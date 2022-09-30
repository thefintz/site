<template>
  <div data-prismjs-copy-timeout="500">
    <pre class="pb-1 my-0"><code class="language-sh" data-prismjs-copy="Copiar">{{ req }}</code></pre>
    <pre class="pt-1 my-0"><code class="line-numbers language-json" data-prismjs-copy="Copiar">{{ res }}</code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-onelight.css'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/custom-class/prism-custom-class.js'

Prism.plugins.customClass.prefix('prism--')

export default {
  name: 'CodeHighlight',

  mounted () {
    Prism.highlightAll()
  },

  props: {
    req: String,
    res: String
  }
}
</script>
