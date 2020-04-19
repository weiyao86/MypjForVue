<template>
	<div class="wrap">
        <div class="h-title">
            <div class="h-title-l">我的音乐影集</div>
            <div class="h-title-r"><span><i class="fa fa-bell-o"></i>影集消息</span></div>
        </div>
        <div class="box-list">
            <div class="box-video">
                <!-- <img src="" alt=""> -->
                <i class="fa fa-plus-circle"></i>
                <span>新建影集</span>
            </div>
        </div>
        <mt-button size="large" type="danger" class="btn-new-video">新建影集</mt-button>
         <div class="h-title">
            <div class="h-title-l">精选主题模板</div>
        </div>

        <div class="btn-list">
          <mt-button v-for="item in categroy" :key="item.id" size="small" type="default" class="btn-new-list" :class="{selected:currentBtn==item.id}" @click="currentBtn=item.id">{{item.name}}</mt-button>
         </div>
        <!-- 容器 -->
         <mt-tab-container v-model="currentBtn" class="tab-container-list" swipeable>
            <mt-tab-container-item v-for="list in categroy" :id="list.id" :key="list.id">
                <ul class="list-for-category">
                    <li v-for="item in categroyItems[list.dataView]"><div class="columns-top">
                         <img slot="icon" :src="suf+item.src">
                         <div class="play"  @click="setShowVideo(true)"><i class="fa fa-play-circle"></i></div>
                        </div>
                        <div class="columns-bottom">
                            <span>{{item.name}}</span>
                        </div>
                    </li>
             </ul>
            </mt-tab-container-item>
         </mt-tab-container>
        <!-- 容器结束 -->
         <mt-popup v-model="showVideo"  :modal=true  position="right" class="popup-wrap">
            <div class="popup-wrap-video">
                <mt-header fixed title="">
                     <mt-button slot="left" icon="back" @click="setShowVideo(false)">返回</mt-button>
                </mt-header>
                 <div class="full-video">
                    <video-player class="video-player vjs-custom-skin" ref="videoplayer" :playsinline="true" :options="playerOptions"></video-player>
                   <!--  <video id="video" src="" type="video/mp4" poster="../../../../assets/logo.png" controls preload  width="100%" height="100%">抱歉，你的浏览器不支持video标签。。</video> -->
                </div>

          </div></mt-popup>
	</div>
</template>
<script>
	import common from '@/lib/common';
    import {Indicator,Toast} from 'mint-ui';
    import globalConfig from '@/globalConfig';

	export default{
		name:'Video',
        data(){
            return {
                showVideo:false,
                currentBtn:'hot',
                categroy:[{
                    id:'hot',name:'热门',dataView:'videos1'},
                    {id:'child',name:'亲子',dataView:'videos2'},
                    {id:'pergnancy',name:'孕期',dataView:'videos3'},
                    {id:'lift',name:'生活',dataView:'videos4'
                }],
                suf:globalConfig.resoucePhotoPathsuffix,
                categroyItems:{videos1:[],videos2:[],videos3:[],videos4:[]},
                playerOptions : {
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
                            type: "application/x-mpegURL",
                            // src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                            src:"static/video.mp4"// "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" //你的视频地址（必
                          // type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                          // src: "static/asf-video.asf" //url地址 //https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm
                        }],
                        poster: "../../static/images/test.jpg", //你的封面地址
                        // width: document.documentElement.clientWidth, //播放器宽度
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        controlBar: {
                          timeDivider: true,
                          durationDisplay: true,
                          remainingTimeDisplay: false,
                          fullscreenToggle: true  //全屏按钮
                        }
                    }
            }
        },

        beforeCreate:function(){
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
            });
        },
        created:function(){
            var me=this;
            common.axios({
                url:'/api/getVideoApi'
            }).then(res=>{
                
                let videos=res.data;

                Object.keys(me.categroyItems).forEach((val,idx)=>{
                    me.$set(me.categroyItems,val,videos[val]);
                });

                Toast({
                    message:'拉取主题模板成功',
                    iconClass:'icon icon-success'
                });
            }).catch(err=>{
               Toast({
                    message:'拉取主题模板失败',
                    iconClass:'icon icon-field-error'
                });
            }).then(()=>{
                
                Indicator.close();
            });
        },

        computed:{
        },

        methods:{
             setShowVideo(isShow){
                
                let video=document.getElementById("video");
                // if(!isShow ){
                //     video.src='';
                // }else{
                //     video.src='static/video.mp4';
                // }

                // this.$refs.videoplayer.player.src=
                this.$refs.videoplayer.player.play();

                this.showVideo=isShow;
            }
        }
	}
</script>
<style type="text/css" lang="scss" scoped>
    .wrap{
        background: #fff;
        padding:0 10px;
    }
	.h-title{
        display: flex;
        padding: 20px;
        &-l{
            text-align: left;
            flex: 1;
        }
        &-r{
            text-align: right;
            color:#bbb;
            flex: 1;
            & i{padding: 0 2px;}
        }
    }
    .box-list{
    }
    .box-video{
        border-radius: 4px;
        background: #eee;
        width:200px;
        height:240px;
        display: flex;
        flex-flow: column;
        font-size: 12px;
        justify-content: center;
        i{margin: 10px;}
    }
    .btn-new-video{
        margin:20px 0;
        border-radius: 20px
    }
    .btn-new-list{
        border-radius:16px;
        margin:0 10px;
        &.selected{
            background:#fe886e;
            color:#fff;
        }
    }
    .list-for-category{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li{
            position: relative;
            width:108px;
            height:150px;
            border-radius: 6px;
            background: #fff;
            padding:5px;
            margin:5px;
            overflow: hidden;
            text-align:center;
            display: flex;
            flex-flow:column nowrap;
            .columns-top{
                flex:1;
                display: flex;
                align-items: center;
                overflow: hidden;
                .play{
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right:0;
                    display: flex;
                    align-items: center;
                    background: rgba(0,0,0,.1);
                    justify-content: center;
                   i{
                     font-size: 40px !important;
                     color: #fff;
                   }
                }
                img{width: 100%;}
            }
            .columns-bottom{
                font-size:14px;
                height: 30px;
                line-height: 30px;
            }
        }
    }
    .tab-container-list{
        margin:20px 0;
    }
    .popup-wrap{
        height:100%;
        width:100%;
        &-video{
            background: #fff;
            .full-video{
                position: absolute;
                top:40px;
                left:0;
                right:0;
                bottom: 0;
            } 
        }
    }
</style>