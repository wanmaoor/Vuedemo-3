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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
          component: () => import('./components/Son')
        }
      ]
    }
  ]
})
