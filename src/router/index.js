import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/index",
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/layout/Layout.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
