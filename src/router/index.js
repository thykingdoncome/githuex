import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Readme from '../views/Readme.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
    // component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/readme/:username/:repo',
    name: 'Readme',
    component: Readme
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
