import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Readme from '../views/Readme.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User
  },
  {
    path: '/readme/:username/:repo',
    name: 'readme',
    component: Readme
},
{
  path: '*',
  name: 'not_found',
  component: NotFound
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
