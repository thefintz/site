import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'

import '@/assets/style.scss'

import icons from '@/icons'

import gtag from '@/plugins/gtag'
import gtm from '@/plugins/gtm'

// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs'
import 'prism-themes/themes/prism-one-light.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import 'prismjs/plugins/custom-class/prism-custom-class'
createApp(App)
  .use(icons)
  .use(gtag, { router })
  .use(gtm, { router })
  .use(router)
  .mount('#app')
