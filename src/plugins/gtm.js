import { createGtm } from '@gtm-support/vue-gtm'

export default {
  install (app, { router }) {
    app.use(
      createGtm({
        id: 'GTM-W7X28Q7W',
        enabled: true,
        debug: true,
        vueRouter: router,
        ignoredViews: ['homepage']
      })
    )
  }
}
