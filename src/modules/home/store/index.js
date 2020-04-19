import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		photoTitle: ''
	},
	mutations: {
		changePhotoTitle(state, user) {
			// 变更状态
			state.photoTitle = user.title;
		}
	}
})

export default store;