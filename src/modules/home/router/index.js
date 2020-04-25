import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/home/views/login'
Vue.use(Router)


let router = new Router({
	// mode: 'history',
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	}, {
		path: '/main',
		redirect: "/main/Photos"
	}, {
		name: 'Photos',
		path: '/main/Photos',
		component: resolve => require(['@/modules/home/views/main/Photos'], resolve),
		meta: {
			navShow: true
		}
	}, {
		name: 'Video',
		path: '/main/Video',
		component: resolve => require(['@/modules/home/views/main/Video'], resolve),
		meta: {
			navShow: true
		}
	}, {
		name: 'Activity',
		path: '/main/Activity',
		component: resolve => require(['@/modules/home/views/main/Activity'], resolve),
		meta: {
			navShow: true
		}
	}, {
		name: 'My',
		path: '/main/My',
		component: resolve => require(['@/modules/home/views/main/My'], resolve),
		meta: {
			navShow: true
		}
	}]
});

router.beforeEach(({
	name,
	path
}, from, next) => {

	if (name === "Login") {
		next();
	} else {

		let token = localStorage.getItem("userInfo");
		if (!token) {
			next('/'); //对应以上path
		} else {
			next();
		}
	}
})


export default router;