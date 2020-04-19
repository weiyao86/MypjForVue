<template>
	<div>
	<mt-header fixed :title="getTitle">
		  <router-link to="/" slot="left">
		    <!-- <mt-button icon="back">返回</mt-button> -->
		    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
		  </router-link>

		  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>

	<div class="wrap-content">
		  <transition  name="fade" mode="out-in" appear>
	        <keep-alive>
	          <component :is="currentTabComponent" :key="contents" ref="contents" class="tab"></component>
	        </keep-alive> 
         </transition>
     </div>

	<mt-tabbar fixed v-model="contents">
		<mt-tab-item v-for="tab in tabs" v-bind:key="tab.id" :id="tab.id">
			<div slot="icon"><i :class="'fa fa-'+tab.icon"></i></div>
			{{tab.name}}
		</mt-tab-item>
	</mt-tabbar>
</div>
</template>

<script>

	import Photos from './Photos';
	import Video from './Video';
	import Activity from './Activity';
	import My from './My';

	export default {
		name: 'Home',
		components: {
			Photos,
			Video,
			Activity,
			My
		},
		data() {
			return {
				contents: 'Photos',
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
				return this.$store.state.photoTitle;
			},

			//组件切换
			currentTabComponent() {
				let me = this;

				let curTab = me.tabs.filter((val, idx) => {
					return val.id === me.contents;
				})

				me.$store.commit("changePhotoTitle", {
					title: curTab[0].title
				});
				return me.contents;
			}
		},
		methods: {
			handleClose() {
				alert('Index.vue')
			}
		}
	}

</script>

<style lang="scss" type="text/css">
	.wrap-content{
		background: #fff;
		min-height: calc(100% - 40px);
		padding:40px 0 54px 0;
	}
</style>