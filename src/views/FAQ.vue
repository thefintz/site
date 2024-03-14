<template>
  <div style="max-width: 100%; overflow-x: hidden;" class="has-background-light">

  <NavbarComp/>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-black has-text-weight-bold">Fintz FAQ - Base de Dados do Mercado Financeiro</h1>

      <div class="box" v-for="(faq, index) in faqs" :key="index">
        <p class="subtitle has-text-black has-text-weight-bold" v-html="faq.question"></p>
        <p class="has-text-black" :style="multilineStyle" v-html="faq.answer"></p>
      </div>
    </div>
  </section>

  <FooterComp bg="light"/>
  </div>
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'
import FooterComp from '@/comps/FooterComp'
import faqs from '../FAQ_perguntas.js'

export default {
  name: 'FAQ',

  components: {
    NavbarComp,
    FooterComp
  },

  data () {
    return {
      faqs,
      // pra renderizar o(s) '\n' como nova linha
      multilineStyle: {
        whiteSpace: 'pre-line'
      }
    }
  }
}
</script>
