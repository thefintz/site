import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'

import '@/assets/style.scss'

import icons from '@/icons'

import gtag from '@/plugins/gtag'

createApp(App)
  .use(icons)
  .use(gtag)
  .use(router)
  .mount('#app')
