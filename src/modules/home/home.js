// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Home from '@/modules/home/views/main'
import store from './store'
import QRCode from 'qrcode'
import disableHS from '@/lib/disableHS'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../style/weui.scss' //配置在utils.js全局中会被覆盖
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'
import 'vue-video-player/node_modules/video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

import MescrollVue from 'mescroll.js/mescroll.vue'
// import Mescroll from 'mescroll.js'
// import 'mescroll.js/mescroll.min.css'

// 使用 fastclick解决移动端click事件300毫秒延迟
// const FastClick = require('fastclick')
// FastClick.attach(document.body);


Vue.component("mescroll", MescrollVue);

Vue.use(VideoPlayer);

Vue.use(VueAxios, axios);

Vue.use(MintUI);

Vue.config.productionTip = false

// eslint-disable no-new 
new Vue({
	el: '#app',
	store,
	router,
	components: {
		Home
	},
	template: '<Home/>'
})


/** 
 *  for ios
 *
 *
 **/
window.onload = function() {
	// 阻止双击放大
	var lastTouchEnd = 0;
	document.addEventListener('touchstart', function(event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, {
		passive: false // 关闭被动监听
	});
	document.addEventListener('touchend', function(event) {
		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
	// 阻止双指放大
	document.addEventListener('gesturestart', function(event) {
		event.preventDefault();
	});
}