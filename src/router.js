import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Parent from './components/Parent'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
			beforeEnter: (to, from, next) => {
				console.log(`About's to: `, to);
				console.log(`About's from: `, from);
				next()
			}
		},
		{
			path: '/greet',
			name: 'greet',
			component: () => import('./components/Greet')
		},
		{
			path: '/sub',
			name: 'sub',
			component: Parent,
			children: [
				{
					path: 'son',
					name: 'son',
					component: () => import('./components/Son')
				}
			]
		},
		{
			path: '/foo',
			name: 'foo',
			component: () => import('./components/Foo')
		},
		{
			path: '/multi',
			name: 'multi',
			components: {
				left: () => import('./components/MultiLeft'),
				right: () => import('./components/MultiRight')
			}
		},
		{
			path: '*',
			component: () => import('./components/Err')
		}
	]
})
