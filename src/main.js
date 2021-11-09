import { createApp } from 'vue'
import App from '@/App'

import '@/assets/style.scss'

import icons from '@/icons'

import gtag from '@/plugins/gtag'

createApp(App)
  .use(icons)
  .use(gtag)
  .mount('#app')
