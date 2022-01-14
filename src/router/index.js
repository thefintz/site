import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  {
    path: '/produtos',
    name: 'Products',
    component: () => import('@/views/Products')
  },
  {
    path: '/papeis-b3',
    name: 'PapeisB3',
    component: () => import('@/views/PapeisB3')
  },
  {
    path: '/dados-CRIs',
    name: 'DadosCris',
    component: () => import('@/views/DadosCRIs')
  },
  {
    path: '/PrivacyPolicy',
    name: 'privacypolicy',
    component: () => import('@/views/legal/PrivacyPolicy')
  },
  {
    path: '/SLA',
    name: 'sla',
    component: () => import('@/views/legal/SLA')
  },
  {
    // Adapted from:
    //  https://next.router.vuejs.org/guide/essentials/dynamic-matching.html
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/NotFound')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
