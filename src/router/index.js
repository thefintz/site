import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // homepage (API)
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  // landing ads
  {
    path: '/g',
    name: 'AdsGoogle',
    component: () => import('@/views/Landing')
  },
  // landing ads
  {
    path: '/l',
    name: 'AdsLinkedIn',
    component: () => import('@/views/Landing')
  },
  // landing ads
  {
    path: '/r',
    name: 'AdsReddit',
    component: () => import('@/views/Landing')
  },
  // landing ads
  {
    path: '/t',
    name: 'AdsTwitter',
    component: () => import('@/views/Landing')
  },
  // contact
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('@/views/Contato')
  },
  // FAQ
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/FAQ')
  },
  // contact start to use
  {
    path: '/comecar-a-usar',
    name: 'ContatoComecarUsar',
    component: () => import('@/views/ContatoComecarUsar')
  },
  {
    path: '/email-enviado',
    name: 'EmailSent',
    component: () => import('@/views/EmailSent')
  },
  // pricing comercial
  {
    path: '/precos',
    name: 'Preços',
    component: () => import('@/views/pricing/Precos')
  },
  // pricing individual
  {
    path: '/planos-individuais',
    name: 'Planos Individuais',
    component: () => import('@/views/pricing/PlanosIndividuais')
  },
  {
    path: '/startups',
    name: 'Startups',
    component: () => import('@/views/pricing/ProgramaStartups')
  },
  // products
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import('@/views/Produtos')
  },
  // APIs
  {
    path: '/bolsa',
    name: 'bolsa',
    component: () => import('@/views/products/APIs/Bolsa')
  },
  {
    path: '/fundos',
    name: 'fundos',
    component: () => import('@/views/products/APIs/Fundos')
  },
  {
    path: '/titulos-publicos',
    name: 'titulos-publicos',
    component: () => import('@/views/products/APIs/TitulosPublicos')
  },
  // Platforms
  {
    path: '/plataforma-fundos',
    name: 'Plataforma Fundos',
    component: () => import('@/views/products/platforms/PlataformaFundos')
  },
  // Platforms
  {
    path: '/vagas',
    name: 'Vagas',
    component: () => import('@/views/Vagas')
  },
  {
    path: '/estagio',
    name: 'VagaEstagiario',
    component: () => import('@/views/vagas/Estagiario')
  },
  {
    path: '/senior',
    name: 'VagaSenior',
    component: () => import('@/views/vagas/Senior')
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
  {
    path: '/FintzBot/PrivacyPolicy',
    name: 'termos',
    component: () => import('@/views/fintzbot/PrivacyPolicy')
  },
  {
    path: '/FintzBot/SLA',
    name: 'sla',
    component: () => import('@/views/fintzbot/TermsService')
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
