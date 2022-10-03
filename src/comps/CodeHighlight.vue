<template>
  <div>
    <pre class="pb-1 my-0"><code class="language-sh">{{ req }}</code></pre>
    <pre class="pt-1 my-0"><code class="line-numbers language-json">{{ res }}</code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'

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

<style>
/*
  Adapted from:
    https://www.darraghoriordan.com/2019/01/20/bulma-prismjs-in-gatsby-css-conflicts
*/
.token.tag,
.token.content,
.token.number {
  display: inline;
  padding: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  vertical-align: inherit;
  border-radius: inherit;
  font-weight: inherit;
  white-space: inherit;
  background: inherit;
  margin: inherit;
}
</style>
