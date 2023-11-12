import VueGtag from 'vue-gtag'

const config = { id: 'AW-11409255208' }

export default {
  install (app, { router }) {
    app.use(VueGtag, { config }, router)
  }
}
