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
  faCopy,
  faEnvelope,
  faComment,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

import {
  faSmileWink
} from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedin, faGithub, faInstagram, faBook, faPhoneAlt, faMobile, faMobileAlt, faWhatsapp, faScroll, faCopy, faEnvelope, faComment,
  faSmileWink, faCheck)

export default {
  install (app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
