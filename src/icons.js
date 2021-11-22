import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
  faBook,
  faPhoneAlt,
  faMobile,
  faMobileAlt,
  faScroll,
  faCopy
} from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faGithub, faInstagram, faBook, faPhoneAlt, faMobile, faMobileAlt, faWhatsapp, faScroll, faCopy)

export default {
  install (app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
