<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Bolsa B3 </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Básico </p>
        <p class="is-size-7"> Ótimo para testar </p>
        <hr/>
        <div class="mb-3">
          <p class="is-size-5 has-text-weight-bold has-text-black"> Gratuito </p>
        </div>
        <CheckmarkItemComp text="Preço de fechamento"/> <br>
        <CheckmarkItemComp text="100 chamadas / hora"/> <br>
        <CheckmarkItemComp text="Histórico de 1 mês"/> <br>
        <CheckmarkItemComp text="Ações, FIIs, BDRs e ETFs"/> <br>
        <CheckmarkItemComp text="Logos, setor, segmento"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Bolsa B3 </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Simples </p>
        <p class="is-size-7"> Ótimo para construir </p>
        <hr/>
        <div class="mb-3">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$599 </span>
          <span>/mês</span>
        </div>
        <CheckmarkItemComp text="Intraday (atraso 30min)"/> <br>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Histórico de 1 ano"/> <br>
        <CheckmarkItemComp text="Ações, FIIs, BDRs e ETFs"/> <br>
        <CheckmarkItemComp text="Logos, setor, segmento"/> <br>
        <CheckmarkItemComp text="Dados gerais de empresas"/> <br>
        <CheckmarkItemComp text="Indicadores"/> <br>
      </div>
    </div>
    <div class="column is-one-third">
      <div class="box" style="height: 28rem">
        <p class="is-size-7 has-text-weight-bold"> Bolsa B3 </p>
        <p class="is-size-5 has-text-weight-bold has-text-black"> Avançado </p>
        <p class="is-size-7"> Ótimo para escalar </p>
        <hr/>
        <div class="mb-3">
          <span class="is-size-5 has-text-black has-text-weight-bold"> R$3.000 </span>
          <span>/mês</span>
        </div>
        <CheckmarkItemComp text="Intraday (atraso 30min)"/> <br>
        <CheckmarkItemComp text="Chamadas ilimitadas"/> <br>
        <CheckmarkItemComp text="Histórico de 10 anos"/> <br>
        <CheckmarkItemComp text="Ações, FIIs, BDRs e ETFs"/> <br>
        <CheckmarkItemComp text="Logos, setor, segmento"/> <br>
        <CheckmarkItemComp text="Dados gerais de empresas"/> <br>
        <CheckmarkItemComp text="Indicadores"/> <br>
        <CheckmarkItemComp text="Eventos Corporativos"/> <br>
        <CheckmarkItemComp text="Fatos relevantes"/> <br>
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
