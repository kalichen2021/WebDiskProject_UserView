import { createRouter, createWebHistory } from 'vue-router'
import OperaView from "@/views/OperaView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/opera/*default'
    }, {
      path: '/opera/:path',
      name: 'opera',
      component: OperaView
    }
  ]
})

export default router
