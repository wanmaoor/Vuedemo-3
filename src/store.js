import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		num: 1
	},
	mutations: {
		increment(state, n) {
			state.num += n
		},
		decrement(state, n) {
			state.num -= n
		}
	},
	actions: {
		asyncIncrement(context) {
			context.commit('increment', 10)
			setTimeout(() => {
				context.commit('decrement', 5);
			}, 5000)
		},
		asyncDecrement({commit}) {
			commit('decrement', 10)
			setTimeout(() => {
				commit('increment', 5)
			}, 5000)
		}
	},
	getters: {
		num(state) {
			return state.num += 2
		}
	}
})
