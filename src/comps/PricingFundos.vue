<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Básico </p>
        <p class="is-size-7"> Ótimo para testar </p>
        <hr/>
        <div class="mb-1">
          <p class="is-size-5 has-text-weight-bold has-text-black"> Gratuito </p>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/contato')" class="button button-full-width is-small is-primary has-text-white is-full"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="5 chamadas / minuto"/> <br>
        <CheckmarkItemComp text="Limite de 10 fundos"/> <br>
        <CheckmarkItemComp text="Sem histórico"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Suporte em português e inglês"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Simples </p>
        <p class="is-size-7"> Ótimo para construir </p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$399 </span>
          <span>/mês</span>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/contato')" class="button button-full-width is-small is-primary has-text-white is-full"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Sem limite de fundos"/> <br>
        <CheckmarkItemComp text="Histórico de 1 ano"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Dados estatísticos"/> <br>
        <CheckmarkItemComp text="Suporte 24h"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Avançado </p>
        <p class="is-size-7"> Ótimo para escalar </p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$2.400 </span>
          <span>/mês</span>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/contato')" class="button button-full-width is-small is-primary has-text-white is-full"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Sem limite de fundos"/> <br>
        <CheckmarkItemComp text="Histórico ilimitado (+20 anos)"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Dados estatísticos"/> <br>
        <CheckmarkItemComp text="Indicadores"/> <br>
        <CheckmarkItemComp text="Benchmarks"/> <br>
        <CheckmarkItemComp text="Suporte 24h"/> <br>
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
  </style>
