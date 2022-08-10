import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  {
    path: '/preco-api',
    name: 'Preço API',
    component: () => import('@/views/PrecoAPI')
  },
  {
    path: '/preco-ferramentas',
    name: 'Preço Ferramentas',
    component: () => import('@/views/PrecoFerramentas')
  },
  {
    path: '/precos',
    name: 'Preços Escolha',
    component: () => import('@/views/PrecosEscolha')
  },
  {
    path: '/solucoes',
    name: 'Produtos Escolha',
    component: () => import('@/views/ProdutosEscolha')
  },
  {
    path: '/solucoes-api',
    name: 'Soluções API',
    component: () => import('@/views/ProdutosAPIsLista')
  },
  {
    path: '/solucoes-ferramentas',
    name: 'Soluções Ferramentas',
    component: () => import('@/views/ProdutosFerramentasLista')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('@/views/Contato')
  },
  {
    path: '/papeis-b3',
    name: 'PapeisB3',
    component: () => import('@/views/PapeisB3')
  },
  {
    path: '/leadz',
    name: 'Leadz',
    component: () => import('@/views/Leadz')
  },
  {
    path: '/dcm',
    name: 'DCM',
    component: () => import('@/views/DCM')
  },
  {
    path: '/fundos',
    name: 'Fundos',
    component: () => import('@/views/Fundos')
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
    path: '/email-enviado',
    name: 'EmailSent',
    component: () => import('@/views/EmailSent')
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
