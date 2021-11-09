import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faInstagram)

export default {
  install (app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
