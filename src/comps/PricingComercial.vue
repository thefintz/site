<template>
  <!-- <div
    class="my-5 tabs is-toggle is-toggle-rounded is-centered is-medium mb-0">
    <ul>
      <li :class="{ 'is-active': !showAnual }">
        <a @click="showAnual = false">
          <span>Plano mensal</span>
        </a>
      </li>
      <li :class="{ 'is-active': showAnual }">
        <a @click="showAnual = true">
          <span>Plano anual</span>
        </a>
      </li>
    </ul>
  </div> -->

  <div class="columns is-centered">
    <div class="column is-two-thirds">
      <div class="box" style="height: 38rem">
        <p class="is-size-6 has-text-weight-bold"> Uso Comercial </p>
        <p class="is-size-3 has-text-weight-bold has-text-black"> Enterprise </p>
        <p class="is-size-6 is-italic"> Production Ready </p>
        <hr/>
        <div class="has-text-centered mb-2 pr-5">
          <button
            @click="$router.push('/contato')"
            class="button button-full-width is-size-6 is-primary has-text-white is-full has-text-weight-bold">
            Entrar em contato
          </button>
        </div>
        <br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">API Bolsa, Fundos, Tesouro, Índices e Taxas</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Histórico cotações fim de dia (inclusive ajustadas)</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Histórico de dividendos, JCP, splits/inplits e bonificações</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Histórico de +50 indicadores</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Histórico de resultados (BP, DRE, DFC) padronizados</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Número de chamadas customizado</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Suporte premium e técnico</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Ícones e logos dos ativos</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Base backtest sem vieses</span><br>
        <CheckmarkItemComp/><span class="is-size-6" style="line-height: 200%">Acesso antecipado a novas funcionalidades</span><br>
        <span class="is-size-7 pointer is-underlined" @click="$router.push('/FAQ')" style="line-height: 400%">Clique para entender porque a Fintz é a melhor opção</span><br>
      </div>
    </div>
  </div>
</template>

<script>
import CheckmarkItemComp from '@/comps/CheckmarkItemComp'

export default {
  name: 'BenefitsComp',

  components: {
    CheckmarkItemComp
  },

  data () {
    return {
      showAnual: true
    }
  },

  methods: {
    redirectAssinarMensal () {
      this.$gtag.event('click-assinar-mensal', { event_category: this.$route.name })
      window.location.href = 'https://www.asaas.com/c/220760563882'
    },
    redirectAssinarAnual () {
      this.$gtag.event('click-assinar-anual', { event_category: this.$route.name })
      window.location.href = 'https://www.asaas.com/c/567105707020'
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
  .button-full-width {
    padding-left: 28%;
    padding-right: 28%;
  }

  .strikethrough {
  text-decoration: line-through;
  text-decoration-thickness: 2px;  /* Adjust thickness as desired */
  /* text-decoration-color: black; Adjust color for more visibility, if desired */
}

</style>
