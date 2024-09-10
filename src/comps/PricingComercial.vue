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
        <span class="is-size-3 is-italic">R$ 925 </span>
        <span class="is-size-5 is-italic"> / mês </span>
        <hr/>
        <div class="has-text-centered mb-2 pr-5">
          <button
            @click=redirectAssinarMensal()
            class="button button-full-width is-size-6 is-primary has-text-white is-full has-text-weight-bold">
            Assinar e receber chave API
          </button>
        </div>
        <br>
        <CheckmarkItemComp/>
          <span class="is-size-6" style="line-height: 200%">
            API <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/" target="_blank">Bolsa</a>,
            <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/tesouro/" target="_blank">Tesouro</a>,
            <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/indices/" target="_blank">Índices e Taxas</a>
          </span><br>
        <CheckmarkItemComp/>
          <span class="is-size-6" style="line-height: 200%">
            Histórico <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#json" target="_blank">cotações </a>
            fim de dia (inclusive ajustadas)
          </span><br>
        <CheckmarkItemComp/>
          <span class="is-size-6" style="line-height: 200%">
            Histórico de <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#proventos-dividendos-jcp" target="_blank">
              dividendos, JCP,
            </a>
            <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#desdobramentos" target="_blank">
              desdobramentos,
            </a>
            <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#bonificacoes" target="_blank">
              bonificações
            </a>
          </span><br>
        <CheckmarkItemComp/>
        <span class="is-size-6" style="line-height: 200%">
          Histórico de +30
          <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#indicadores" target="_blank">indicadores</a>
        </span><br>
        <CheckmarkItemComp/>
        <span class="is-size-6" style="line-height: 200%">
          Histórico de
          <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#itens-contabeis" target="_blank">linhas dos balanços</a>
          (BP, DRE, DFC)
        </span><br>
        <CheckmarkItemComp/>
        <span class="is-size-6" style="line-height: 200%">
        Ícones e <a class="is-underlined" href="https://docs.fintz.com.br/endpoints/bolsa/#logos-e-iconess" target="_blank">logos</a>
        dos ativos
        </span><br>
        <CheckmarkItemComp/>
        <span class="is-size-6" style="line-height: 200%">
          Base backtest sem vieses (look-ahead e survivorship)
        </span><br>
        <CheckmarkItemComp/>
        <span class="is-size-6" style="line-height: 200%">
          20 mil chamadas / mês
        </span><br>
        <CheckmarkItemComp/>
          <span class="is-size-6" style="line-height: 200%">
            Tudo que está <a target="_blank" class="is-underlined" href="https://docs.fintz.com.br"> na docs (link)</a>
          </span><br>
        <span class="is-size-6 pointer is-underlined" @click="$router.push('/FAQ')" style="line-height: 400%">Por que a Fintz é a melhor opção?</span><br>
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
      window.location.href = 'https://www.asaas.com/c/jx86vlosxttstl07'
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
