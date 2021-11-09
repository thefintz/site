import { createApp } from 'vue'
import App from '@/App'

import '@/assets/style.scss'

import icons from '@/icons'

const app = createApp(App)

app.use(icons)

app.mount('#app')
