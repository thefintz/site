<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box" style="height: 24rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Básico </p>
        <p class="is-size-7"> Ótimo para testar </p>
        <hr/>
        <div class="mb-3">
          <p class="is-size-5 has-text-weight-bold has-text-black"> Gratuito </p>
        </div>
        <CheckmarkItemComp text="100 chamadas/hora"/> <br>
        <CheckmarkItemComp text="Histórico de 1 mês"/> <br>
        <CheckmarkItemComp text="10 fundos"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 24rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Simples </p>
        <p class="is-size-7"> Ótimo para construir </p>
        <hr/>
        <div class="mb-3">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$399 </span>
          <span>/mês</span>
        </div>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Histórico de 1 ano"/> <br>
        <CheckmarkItemComp text="Sem limite de fundos"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Dados estatísticos"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 24rem">
        <p class="is-size-7 has-text-weight-bold"> Fundos </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Avançado </p>
        <p class="is-size-7"> Ótimo para escalar </p>
        <hr/>
        <div class="mb-3">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$2.000 </span>
          <span>/mês</span>
        </div>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Histórico de 20 anos"/> <br>
        <CheckmarkItemComp text="Sem limite de fundos"/> <br>
        <CheckmarkItemComp text="Dados cadastrais"/> <br>
        <CheckmarkItemComp text="Dados estatísticos"/> <br>
        <CheckmarkItemComp text="Indicadores"/> <br>
        <CheckmarkItemComp text="Benchmarks"/> <br>
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
  </style>
