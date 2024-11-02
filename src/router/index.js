import { createRouter, createWebHistory } from 'vue-router'
import ExBoyfriend from '../views/ExBoyfriend.vue'
import ExGirlfriend from '../views/ExGirlfriend.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ex-boyfriend',
      name: 'ex-boyfriend',
      component: ExBoyfriend
    },
    {
      path: '/ex-girlfriend',
      name: 'ex-girlfriend',
      component: ExGirlfriend
    }
  ]
})

export default router