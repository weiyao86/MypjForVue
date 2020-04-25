<template>
    <div class="wrap-page-global">
        <mescroll ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
           <!--   webkit-playsinline="true" /* 这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放*/  
              playsinline="true"  // IOS微信浏览器支持小窗内播放
               x5-playsinline="true"  //在原位置播放 区域播放 但会覆盖底部广告层
               controls="true"  //显示控制条
               muted="muted"
               autoplay="autoplay"
              x-webkit-airplay="allow" 
              x5-video-player-type="h5"  // 启用H5播放器,是wechat安卓版特性  会新打开层播放
              x5-video-player-fullscreen="true" // 全屏设置，设置为 true 是防止横屏 
              x5-video-orientation="portraint" // 播放器的方向， landscape横屏，portraint竖屏，默认值为竖屏.需要x5-video-player-type支持
              static/video.mp4 -->
            <div class="first"> 
                <video
                  id="video" 
                  src="static/video.mp4"
                  loop="loop"
                  
                  poster="static/8.jpg" 
                  preload="auto" 
                  autoplay="autoplay"
                  controls

                  webkit-playsinline="true"
                  playsinline="true"

                  x5-playsinline="true"
                  
                  x5-video-orientation="portraint" 
                  x5-video-player-fullscreen="true"
                  x-webkit-airplay="allow"
                  @canplay="onPlayerCanplay($event)"
                  style="object-fit:fill;width: 100%;">
                </video>
             <div class="footer-ad-text" @click="adRouter">footer-ad-textfooter-ad-textfooter-ad</div>
             
         </div>
            <h1 v-for="(item,idx) in videos" :key="idx">
                <div style="position: absolute;z-index: 999;">----------------{{idx}}--------------</div> 
                <video-player  class="video-player vjs-custom-skin" ref="videoplayer" :id="idx" :playsinline="true" :options="item.playerOptions" @play="onPlay($event)" @pause="onPause($event)" @timeupdate="onPlayerTimeupdate($event)"></video-player>

            </h1>
            <button @click="isShow = !isShow">Toggle show</button>
            <transition name="bounce" > 
            <slot-demo v-show="isShow" v-slot="{ temp }" :prop="$props" >
                
                     {{temp.name}}
                        ----slotProps is NOT available here
            </slot-demo>
        </transition>
        </mescroll>
    </div>
</template>
<script>
    let videoP=null;
    // 检测微信环境
    // var ua = window.navigator.userAgent.toLowerCase();
    // Vue.prototype.inWeixin = ua.match(/MicroMessenger/i) == 'micromessenger'

    // // 检测是ios还是android
    // var u = navigator.userAgent;
    // // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    // Vue.prototype.inIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //微信
      // document.addEventListener("WeixinJSBridgeReady", function () {
      //                  videoP = document.getElementById("video");
      //                   // let v = document.querySelector("#video");
      //                    alert('wx')
      //                   videoP.play();
      //        }, false);

      import SlotDemo from '@/components/Slot';
    export default{
        name:'Activity',
        props:['contents'],
        components:{
            SlotDemo
        },
        data(){
            return {
                isShow:true,
                mescroll:null,
                mescrollDown:{
                    auto:false,  // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
                    callback:this.downCallback // 下拉刷新的回调
                },
                mescrollUp:{
                    auto:true,
                    callback:this.upCallback,
                    page:{
                        num:0,
                        size:5
                    },
                    dataList:[],
                    noMoreSize: 5,
                    toTop: { // 配置回到顶部按钮
                      src: './static/logo.png'
                    },
                    onScroll:this.deBounce(this.scroll,1*1000)
                },
                cHeight:(document.documentElement.clientHeight || document.body.clientHeight)-100,
                currentVideo:null,
                videos:[]
            }
        },
        created(){
            
            this.init();
        },
        mounted(){
            let me=this;
            this.currentVideo = this.$refs.videoplayer && this.$refs.videoplayer[0];
            videoP = document.getElementById("video");

             videoP.addEventListener("canplaythrough",function(){
                console.log('当前视频总长度:'+this.duration/60+'分')
             })
          

            videoP.addEventListener("touchstart",function(){
                alert(this.paused)
                if(this.paused){
                    this.play();
                }else{
                    this.pause();
                }
            });

            setTimeout(()=>me.isShow=false,3000);

        },
        activated(){
            // videoP && videoP.play();
        },
       
        methods:{
            adRouter(){
                alert('roter')
            },
            btnPlay(){
                 videoP = document.getElementById("video");
                 videoP.play();
            },
            downCallback() {
                console.log('this.mescroll.version=' + this.mescroll.version);
                let me=this;

                setTimeout(()=>{
                    me.videos.unshift({
                        sources: [{
                            type: "",
                            // src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                            src: "static/video.mp4" 
                        }]
                    });
                     me.mescroll.endSuccess();
                },2*1000);
            },
            upCallback(page){
                let me=this;
                console.log('upCallback')
                setTimeout(function(){
                    me.init(page);
                },2*1000);
            },
            init(page){
                let me=this;
                let playerOptions = {
                        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                        autoplay: false, //如果true,浏览器准备好时开始回放。
                        muted: false, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        controls:true,
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: "",
                            // src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                            src: "static/video.mp4" 
                        }],
                        // poster: "../../static/images/test.jpg", //你的封面地址
                        // width: document.documentElement.clientWidth, //播放器宽度
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        controlBar: {
                          timeDivider: true,
                          durationDisplay: true,
                          remainingTimeDisplay: false,
                          fullscreenToggle: true  //全屏按钮
                        }
                    };
                let arr=[];
                
                for(let i=0;i<20;i++) {
                    arr.push({
                        playerOptions:playerOptions
                    });
                }
                arr.length=1;
                me.videos=arr;
                
                me.$nextTick(() => {
                     // 数据渲染成功后,隐藏下拉刷新的状态
                    me.mescroll.endSuccess(arr.length)
                     // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                    me.mescroll.endErr();
                })
            },

            deBounce(fn,wait){
                let timer=null;
                return function(){
                    let ctx=this,args=arguments;
                    let later=()=>{
                        timer=null;
                        fn.apply(ctx,args);
                    }
                    clearTimeout(timer);
                    timer = setTimeout(later,wait);
                }
            },

            isView(items){
                let me=this;
                return items.find(video=>{
                    let rct=video.$el.getBoundingClientRect(),
                        t=rct.top;

                    return  t > 50 && me.cHeight - t > 0;
                })
            },

            scroll(mescroll,y,isup){
                 let me=this,
                     items = me.$refs.videoplayer,
                     item = me.isView(items);
                     
                    if(me.currentVideo == item && item){ }
                    else if(item){
                        me.currentVideo && me.currentVideo.player.pause();
                        item.player.play();
                        me.currentVideo = item;
                    }else{
                        me.currentVideo=null;
                    }
            },

            onPlay(evt){
                let me=this;
                console.log('play')
                
                if(me.currentVideo.player == evt){}
                else{
                    
                    if(me.currentVideo.player){
                        // debugger;
                        me.currentVideo.player.pause();
                    }
                    me.currentVideo.player=evt;
                }
            },
            
            onPause(evt){
                // alert('pause')
            },

            onPlayerTimeupdate(evt){
                // alert('onPlayerTimeupdate')
            },

             onPlayerCanplay(){
                 //解决自动全屏
                 try{
                  var me=this,
                      ua = navigator.userAgent.toLocaleLowerCase(),
                      video=me.$refs.videoPlayer[0];
                      // video=video.$el.getElementsByTagName("video")[0];
                      // debugger;
                      //x5内核
                    if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
                        var flag=true;
                        
                        video.setAttribute('x-webkit-airplay',flag );
                        video.setAttribute('x5-playsinline',flag );
                        video.setAttribute('webkit-playsinline',flag );
                        video.setAttribute('playsinline',flag );
                    }else{
                      //ios端
                        video.setAttribute('webkit-playsinline',"true");
                        video.setAttribute('playsinline',"true") ;
                    }
                 }
                 catch(error){
                   console.log(error);
                 }
              },

            mescrollInit(mescroll){
                this.mescroll=mescroll;
            }
        }
    }
</script>
<style type="text/css" lang="scss">
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      
      100% {
        transform: scale(1);
      }
    }
    h1{
        height:200px;
        margin: 40px 0;
        position: relative;
    }
    .first{
        position: relative;
        background: #fff;
       
        .footer-ad-text{
            
            color:#fff;
            background: #000;
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            height:60px;
            line-height:60px;
            z-index: 9999;
            opacity: .5;
        }
    }

    .mescroll {
        position: fixed;
        top: 44px;
        bottom: 50px;
        height: auto;
    }
</style>