<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box" style="height: 21rem">
        <p class="is-size-7 has-text-weight-bold"> Plano individual </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Básico </p>
        <p class="is-size-7"> Ótimo para testar </p>
        <hr/>
        <div class="mb-1">
          <p class="is-size-5 has-text-weight-bold has-text-black"> Gratuito </p>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/comecar-a-usar')" class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="API completa da Bolsa B3"/> <br>
        <CheckmarkItemComp text="API completa de Fundos"/> <br>
        <CheckmarkItemComp text="API completa Tesouro Direto"/> <br>
        <CheckmarkItemComp text="300 chamadas / mês"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 21rem">
        <p class="is-size-7 has-text-weight-bold"> Plano individual </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Padrão </p>
        <p class="is-size-7"> Ótimo para projetos </p>
        <hr/>
        <div class="mb-1">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$14,90 </span>
          <span>/mês</span>
        </div>
        <div class="has-text-centered mb-2">
          <button @click="$router.push('/comecar-a-usar')" class="button button-full-width is-size-7 is-primary has-text-white is-full has-text-weight-bold"> Começar a usar </button>
        </div>
        <CheckmarkItemComp text="Tudo do plano gratuito"/> <br>
        <CheckmarkItemComp text="3.000 chamadas / mês"/> <br>
        <CheckmarkItemComp text="Suporte técnico"/> <br>
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
