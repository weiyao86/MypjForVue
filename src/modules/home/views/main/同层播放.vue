<template>
    <div class="wrap">
           <!--   webkit-playsinline="true" /* 这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放*/  
              playsinline="true"  // IOS微信浏览器支持小窗内播放
               x5-playsinline="true"  //在原位置播放 区域播放 但会覆盖底部广告层
               controls="true"  //显示控制条
               muted="muted"
               autoplay="autoplay"
              x-webkit-airplay="allow" 
                webkit-playsinline="true"
                  playsinline="true"
              x5-video-player-type="h5"  // 启用H5播放器,是wechat安卓版特性  会新打开层播放
              x5-video-player-fullscreen="true" // 全屏设置，设置为 true 是防止横屏 
              x5-video-orientation="portraint" // 播放器的方向， landscape横屏，portraint竖屏，默认值为竖屏.需要x5-video-player-type支持
              static/video.mp4 -->
            <div class="first"> 
                <video
                  ref="video"
                  src="static/video.mp4"
                  loop="loop"
                  controls
                  poster="static/8.jpg" 
                  preload="auto" 
                  autoplay="autoplay"
                  controls
                
                  webkit-playsinline="true"
                  playsinline="true"
                  x5-playsinline="true"
                  x5-video-player-type="h5"
                  x5-video-orientation="portraint" 
                  x5-video-player-fullscreen="true"
                  x-webkit-airplay="allow">
                </video>
            <div class="share">share</div>
             <div class="footer-ad-text" @click="adRouter">footer-ad-textfooter-ad-textfooter-ad</div>
             
         </div>
            <!-- <h1 v-for="(item,idx) in videos" :key="idx">
                <div style="position: absolute;z-index: 999;">----------------{{idx}}--------------</div> 
                <video-player  class="video-player vjs-custom-skin" ref="videoplayer" :id="idx" :playsinline="true" :options="item.playerOptions" @play="onPlay($event)" @pause="onPause($event)" @timeupdate="onPlayerTimeupdate($event)"></video-player>

            </h1> -->
    </div>
</template>
<script>
    export default{
        name:'Activity',
        data(){
            return {
                mescroll:null
            }
        },
        created(){
            
        },
        mounted(){
            this.init();
        },
        activated(){
            // videoP && videoP.play();
        },
       
        methods:{
            adRouter(){
                alert('roter')
            },
            
            debounce(fn,wait){
                let timer=null;
                return function(){
                    let args=arguments,
                        ctx=this;
                    clearTimeout(timer);
                    timer=setTimeout(function(){
                        fn.apply(ctx,args);
                    },wait)
                }
            },
            init(page){
                let me=this,
                    v=me.$refs.video;
                window.onresize = me.debounce(function(){
alert(window.innerWidth+'--------'+window.screen.width)
                      v.style.width = window.innerWidth + "px";

                      v.style.height = (window.innerHeight-100) + "px";

                    },0);

                v.addEventListener("x5videoexitfullscreen", function(){
                  alert("player exit");
                  // v.style.width='100%';
                  // v.style.height='auto';
                })
                
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
            }

          
        }
    }
</script>
<style type="text/css" lang="scss">
    h1{
        height:200px;
        margin: 40px 0;
        position: relative;
    }
    .first{
        position: absolute;
        background: #fff;
        display: flex;
        top:0;
        bottom:60px;
        width: 100%;
        video{
            width:100%;
            object-fit:contain;
            object-position:0 40%;
            border:2px solid #f00;
        }
        .footer-ad-text{
            
            color:#fff;
            background: #000;
            position:absolute;
            bottom:60px;
            left:0;
            right:0;
            height:60px;
            line-height:60px;
            z-index: 9999;
            opacity: .5;
        }
        .share{
            position:absolute;
            top:40px;
            right:10px;
            width:60px;
            height:60px;
            background: #f00;
            z-index: 9999999999999;
        }
    }
    .wrap{
        position:fixed;
        top:40px;
        bottom:0;
        width:100%;
        height: auto;
        padding-bottom: 10px;
        overflow: auto;
    }
    .mescroll {
        position: fixed;
        top: 44px;
        bottom: 50px;
        height: auto;
    }
</style>