<template>
  <div id="app">

          <keep-alive>
             <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive> 
             <router-view v-if=!$route.meta.keepAlive></router-view>
      

      <mt-tabbar fixed v-model="$route.name" v-show="$route.meta.navShow">
            <mt-tab-item v-for="tab in tabs" :id="tab.id" v-bind:key="tab.id" @click.native="toLink(tab.id)">
                <div slot="icon"><i :class="'fa fa-'+tab.icon"></i></div>
                {{tab.name}}
            </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>

    let setRootFontSize=()=>{
        //设计稿750为基准
        let ftsize=Math.min(window.screen.width,document.documentElement.clientWidth) * 16 / 375  +'px';
        // let ftsize=16  / 375 * 100 +'vw';  //vw 支持IOS8,Android 4.4以上
        document.documentElement.style.fontSize=ftsize;
        console.log(ftsize)
    }

    window.addEventListener('resize',setRootFontSize);
    setRootFontSize();
    export default {
      name: 'App',
      data() {
          return {
            tabs: [{
              'id': 'Photos',
              'name': '相册',
              'icon': 'photo',
              'title': '家庭相册'
            }, {
              'id': 'Video',
              'name': '影集',
              'icon': 'video-camera',
              'title': '时光影集'
            }, {
              'id': 'Activity',
              'name': '活动',
              'icon': 'users',
              'title': '活动'
            }, {
              'id': 'My',
              'name': '我的',
              'icon': 'heart',
              'title': '我的'
            }]
          }
      },
      methods:{
        toLink(pageId){
          let me=this;
          me.$router.push(pageId);
        }
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
