import { createApp } from 'vue'
import App from '@/App'

import '@/assets/style.scss'

import icons from '@/icons'

createApp(App)
  .use(icons)
  .mount('#app')
