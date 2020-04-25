import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		title: ''
	},
	mutations: {
		changeTitle(state, user) {
			// 变更状态
			state.title = user.title;
		}
	}
})

export default store;