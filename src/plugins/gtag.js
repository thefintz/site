import VueGtag from 'vue-gtag'

const config = { id: 'G-ZPFRQP7QYB' }

export default {
  install (app) {
    app.use(VueGtag, { config })
  }
}
