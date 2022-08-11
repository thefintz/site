import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // homepage
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  // contact
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('@/views/Contato')
  },
  {
    path: '/email-enviado',
    name: 'EmailSent',
    component: () => import('@/views/EmailSent')
  },
  // pricing
  {
    path: '/precos',
    name: 'Preços Escolha',
    component: () => import('@/views/pricing/PrecosEscolha')
  },
  {
    path: '/preco-api',
    name: 'Preço API',
    component: () => import('@/views/pricing/PrecoAPI')
  },
  {
    path: '/preco-ferramentas',
    name: 'Preço Ferramentas',
    component: () => import('@/views/pricing/PrecoFerramentas')
  },
  // list of products/solutions
  {
    path: '/solucoes',
    name: 'Produtos Escolha',
    component: () => import('@/views/products/ProdutosEscolha')
  },
  {
    path: '/solucoes-api',
    name: 'Soluções API',
    component: () => import('@/views/products/ProdutosAPIsLista')
  },
  {
    path: '/solucoes-ferramentas',
    name: 'Soluções Ferramentas',
    component: () => import('@/views/products/ProdutosFerramentasLista')
  },
  // APIs
  {
    path: '/api-bolsaB3',
    name: 'API bolsaB3',
    component: () => import('@/views/products/APIs/APIBolsaB3')
  },
  {
    path: '/api-fundos',
    name: 'API Fundos',
    component: () => import('@/views/products/APIs/APIFundos')
  },
  {
    path: '/api-cris',
    name: 'API CRIs',
    component: () => import('@/views/products/APIs/APICRIs')
  },
  // Tools
  {
    path: '/ferramenta-leadz',
    name: 'Ferramenta Leadz',
    component: () => import('@/views/products/tools/FerramentaLeadz')
  },
  {
    path: '/ferramenta-dcm',
    name: 'Ferramenta DCM',
    component: () => import('@/views/products/tools/FerramentaDCM')
  },
  {
    path: '/ferramenta-fundos',
    name: 'Ferramenta Fundos',
    component: () => import('@/views/products/tools/FerramentaFundos')
  },
  // legal/law
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
  // 404 page not found
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
