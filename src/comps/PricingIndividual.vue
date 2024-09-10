<template>
  <div
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
  </div>

  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box" style="height: 37rem">
        <p class="is-size-7 has-text-weight-bold"> Plano individual </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Padrão </p>
        <p class="is-size-7"> Ótimo projetos pessoais </p>
        <hr/>
        <div class="mb-1">
          <span v-if="!showAnual" class="is-size-5 has-text-gray has-text-weight-bold strikethrough"> De R$85,00 / mês </span>
          <span v-if="showAnual" class="is-size-5 has-text-gray has-text-weight-bold strikethrough"> De R$1.020,00 / ano </span>
        </div>
          <div class="mb-1">
          <span v-if="!showAnual" class="is-size-4 has-text-black has-text-weight-bold"> R$29,90 </span>
          <span v-if="showAnual" class="is-size-4 has-text-black has-text-weight-bold"> R$299,00 </span>
          <span v-if="!showAnual">/mês</span>
          <span v-if="showAnual">/ano</span>
        </div>
        <div class="has-text-centered mb-2">
          <button v-if="!showAnual" @click="redirectAssinarMensal" class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold"> Assinar agora </button>
          <button v-if="showAnual" @click="redirectAssinarAnual" class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold"> Assinar agora </button>
        </div>
        <CheckmarkItemComp text="3.000 chamadas / mês"/> <br>
        <CheckmarkItemComp text="API Bolsa B3"/> <br>
        <CheckmarkItemComp text="API Fundos"/> <br>
        <CheckmarkItemComp text="API Tesouro Direto"/> <br>
        <CheckmarkItemComp text="API Índices, Taxas e Câmbio"/> <br>
        <CheckmarkItemComp text="Histórico cotações (+10 anos)"/> <br>
        <CheckmarkItemComp text="Base ajustada e padronizada"/> <br>
        <CheckmarkItemComp text="Proventos, splits e bonificações"/> <br>
        <CheckmarkItemComp text="Indicadores anuais e trimestrais"/> <br>
        <CheckmarkItemComp text="DRE, DFC e BPs padronizados"/> <br>
        <CheckmarkItemComp text="Balanços trimestrais e anuais"/> <br>
        <CheckmarkItemComp text="Plugin Excel/Sheets (em breve)"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 37rem">
        <p class="is-size-7 has-text-weight-bold"> Plano comercial </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Enterprise </p>
        <p class="is-size-7"> Para escalar seu negócio</p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> Sob consulta </span>
          <!-- <span> Entre em contato. </span> -->
        </div>
        <div class="mb-4">
          <span class="is-size-6 has-text-gray has-text-weight-bold"> Precificação customizada </span>
          <!-- <span> Entre em contato. </span> -->
        </div>
        <div class="has-text-centered mb-2 pr-5">
          <button
            @click="$router.push('/comecar-a-usar')"
            class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold">
            Entrar em contato
          </button>
        </div>
        <CheckmarkItemComp text="Tudo do plano Padrão"/> <br>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Suporte premium e técnico"/> <br>
        <CheckmarkItemComp text="Soluções customizadas"/> <br>
        <CheckmarkItemComp text="Desenvolvimento de features"/> <br>
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
      window.location.href = 'https://www.asaas.com/c/567105707020'
    },
    redirectAssinarAnual () {
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
