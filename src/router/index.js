import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // which is lazy-loaded when the route is visited. conviene hacerlo asi
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
