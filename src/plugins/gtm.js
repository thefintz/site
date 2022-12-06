import { createGtm } from '@gtm-support/vue-gtm'

export default {
  install (app, { router }) {
    app.use(
      createGtm({
        id: 'GTM-TCXDSR5',
        enabled: true,
        debug: true,
        vueRouter: router,
        ignoredViews: ['homepage']
      })
    )
  }
}
