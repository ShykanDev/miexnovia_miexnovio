import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/exnovio',
      name: 'exnovio',
      component: () => import('../views/ExBoyfriend.vue')
    },
    {
      path: '/exnovia',
      name: 'exnovia',
      component: () => import('../views/ExGirlfriend.vue')
    },
    {
      path: '/comentarios',
      name: 'comments',
      component: () => import('../views/CommentsSectionView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
