<template>
    <div id="app">
    <mt-header fixed :title="getTitle">
          <router-link to="/" slot="left">
            <!-- <mt-button icon="back">返回</mt-button> -->
            <!-- <mt-button @click="handleClose">关闭</mt-button> -->
          </router-link>
          

          <mt-button icon="more" slot="title">title</mt-button>
          <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

        <keep-alive>
             <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive> 
             <router-view v-if=!$route.meta.keepAlive></router-view>

        <mt-tabbar fixed v-model="contents" v-show="$route.meta.navShow">
            <mt-tab-item v-for="tab in tabs" :id="tab.id" v-bind:key="tab.id" @click.native="toLink(tab)">
                <div slot="icon"><i :class="'fa fa-'+tab.icon"></i></div>
                {{tab.name}}
            </mt-tab-item>
        </mt-tabbar>
</div>
</template>

<script>

    
    export default {
        name: 'Home',
        
        data() {
            return {
                contents: this.$route.name,
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
        computed: {

            //标题获取
            getTitle: function() {
                let me=this;

                me.contents=  me.$route.name;

                let curTab = me.tabs.filter((val, idx) => {
                    return val.id === me.contents;
                })
                 
                return curTab.length && curTab[0]['title'] || '家庭相册';
            }
        },
        mounted(){
          
        },
        methods: {
            toLink(tab){
              let me=this;
      
              me.$router.push(tab.id);

            },
            handleClose() {
                alert('Index.vue')
            }
        }
    }

</script>

<style lang="scss" type="text/css">
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .wrap-content{
        background: #fff;
        min-height: calc(100% - 40px);
        padding:40px 0 54px 0;
    }
</style>