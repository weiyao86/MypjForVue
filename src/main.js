// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import QRCode from 'qrcode'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.css'


// 使用 fastclick解决移动端click事件300毫秒延迟
// const FastClick = require('fastclick')
// FastClick.attach(document.body)


Vue.use(VueAxios, axios);

Vue.use(MintUI);

Vue.config.productionTip = false

// eslint-disable no-new 
new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})


/**	
 *	for ios
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