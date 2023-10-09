<template>
<div>

  <section class="section" :class="[bg === 'light' ? 'has-background-light' : 'has-background-white']" id="pricing-bolsa-b3">
    <p class="has-text-centered is-size-2 has-text-weight-bold is-underlined has-text-black"> Acesso à base completa </p>
    <p class="has-text-centered title has-text-black"> Bolsa + Fundos + Tesouro + Índices </p>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">
        <PricingIndividual/>
      </div>
      <div class="column is-2"></div>
    </div>
  </section>

</div>
</template>

<script>
import PricingIndividual from '@/comps/PricingIndividual'

export default {
  name: 'PricingAll',

  components: {
    PricingIndividual
  },

  props: {
    bg: String
  },

  data () {
    return {
      showCommercial: true
    }
  }
}
</script>
