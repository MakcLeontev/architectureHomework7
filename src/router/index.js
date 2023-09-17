import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactList from '../views/ContactList.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
