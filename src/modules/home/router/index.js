import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/modules/home/views/login'
import Main from '@/modules/home/views/main'

Vue.use(Router)


let router = new Router({
	routes: [{
		path: '/Main',
		name: 'Main',
		component: Main
	}, {
		path: '/',
		name: 'Login',
		component: Login
	}]
});

router.beforeEach(({
    name
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