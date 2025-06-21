import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/homePage.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomePage },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
