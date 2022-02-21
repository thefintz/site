import VueGtag from 'vue-gtag'

const config = { id: 'G-ZPFRQP7QYB' }

export default {
  install (app, { router }) {
    app.use(VueGtag, { config }, router)
  }
}
