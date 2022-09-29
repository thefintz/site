<template>

<section class="section has-text-centered" :class="[bg === 'light' ? 'has-background-light' : 'has-background-white']" id="pricing-header">
  <p class="title has-text-black is-2"> Precificação Simples. </p>
  <p class="subtitle"> Acesso instantâneo. Cancele quando quiser. </p>
</section>

<section class="section" :class="[bg === 'light' ? 'has-background-light' : 'has-background-white']" id="pricing-bolsa-b3">
  <p class="has-text-centered title has-text-black"> Bolsa B3 </p>
  <p class="has-text-centered subtitle"> Ações, FIIs, ETFs, BDRs, indicadores, dados de empresa e mais. </p>
  <div class="columns">
    <div class="column is-2"></div>
    <div class="column is-8">
      <PricingB3/>
    </div>
    <div class="column is-2"></div>
  </div>
</section>

<section class="section" :class="[bg === 'light' ? 'has-background-light' : 'has-background-white']" id="pricing-fundos">
  <p class="has-text-centered title has-text-black"> Fundos de Investimento </p>
  <p class="has-text-centered subtitle"> Cotação atual e histórica, indicadores, dados cadastrais e mais. </p>
  <div class="columns">
    <div class="column is-2"></div>
    <div class="column is-8">
      <PricingFundos/>
    </div>
    <div class="column is-2"></div>
  </div>
</section>

<section class="section" :class="[bg === 'light' ? 'has-background-light' : 'has-background-white']" id="pricing-tesouro">
  <p class="has-text-centered title has-text-black"> Tesouro </p>
  <p class="has-text-centered subtitle"> Marcação a mercado e na curva, preços, juros, histórico e mais. </p>
  <div class="columns">
    <div class="column is-2"></div>
    <div class="column is-8">
      <PricingTesouro/>
    </div>
    <div class="column is-2"></div>
  </div>
</section>

</template>

<script>
import PricingB3 from '@/comps/PricingB3'
import PricingFundos from '@/comps/PricingFundos'
import PricingTesouro from '@/comps/PricingTesouro'

export default {
  name: 'PricingAll',

  components: {
    PricingB3,
    PricingFundos,
    PricingTesouro
  },

  props: {
    bg: String
  }
}
</script>
