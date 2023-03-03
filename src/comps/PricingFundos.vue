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
          <button @click="$router.push('/comecar-a-usar')" class="button button-full-width is-size-7 is-primary has-text-white has-text-weight-bold is-full"> Começar a usar </button>
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
        <p class="is-size-5 has-text-weight-bold has-text-black"> Avançado </p>
        <p class="is-size-7"> Ótimo para construir </p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$449 </span>
          <span>/mês</span>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/comecar-a-usar')" class="button button-full-width is-size-7 is-primary has-text-white has-text-weight-bold is-full"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Sem limite de fundos"/> <br>
        <CheckmarkItemComp text="Histórico ilimitado (+20 anos)"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Dados estatísticos"/> <br>
        <CheckmarkItemComp text="Indicadores"/> <br>
        <CheckmarkItemComp text="Benchmarks"/> <br>
        <CheckmarkItemComp text="Suporte técnico"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Enterprise </p>
        <p class="is-size-7"> Excelente para escalar </p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> Sob consulta </span>
          <!-- <span> Entre em contato. </span> -->
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/comecar-a-usar')" class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold"> Entrar em contato </button>
        </div>
        <CheckmarkItemComp text="Tudo do plano avançado"/> <br>
        <CheckmarkItemComp text="Customização da solução"/> <br>
        <CheckmarkItemComp text="Desenvolvimento de plataforma"/> <br>
        <CheckmarkItemComp text="Dashboard e relatórios"/> <br>
        <CheckmarkItemComp text="Ferramentas de automação"/> <br>
        <CheckmarkItemComp text="Suporte premium 24h"/> <br>
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
