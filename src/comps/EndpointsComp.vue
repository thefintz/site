<template>
  <div class="columns">
    <div class="column">
      <p class="is-size-4"> Bolsa B3 </p>
      <EndpointItemComp label="GET" text="Cotação atual"/> <br/>
      <EndpointItemComp label="GET" text="Cotação histórica"/> <br/>
      <EndpointItemComp label="GET" text="Cotação mercado futuro"/> <br/>
      <EndpointItemComp label="GET" text="Indicadores fundamentalistas"/> <br/>
      <EndpointItemComp label="GET" text="Proventos"/> <br/>
      <EndpointItemComp label="GET" text="Eventos corporativos"/> <br/>
    </div>

    <div class="column">
      <p class="is-size-4"> Fundos </p>
      <EndpointItemComp label="GET" text="Dados cadastrais"/> <br/>
      <EndpointItemComp label="GET" text="Dados diários"/> <br/>
      <EndpointItemComp label="GET" text="Variação mensal da cota"/> <br/>
      <EndpointItemComp label="GET" text="Variação anual da cota"/> <br/>
      <EndpointItemComp label="GET" text="Variação, por data, da cota"/> <br/>
    </div>

    <div class="column">
      <p class="is-size-4"> Tesouro </p>
      <EndpointItemComp label="GET" text="Lista de títulos" link="https://docs.fintz.com.br/endpoints/titulos-publicos/#lista-de-titulos"/> <br/>
      <EndpointItemComp label="GET" text="Preços e taxas atuais" link="https://docs.fintz.com.br/endpoints/titulos-publicos/#precos-e-taxas-atuais"/> <br/>
      <EndpointItemComp label="GET" text="Preços e taxas históricos" link="https://docs.fintz.com.br/endpoints/titulos-publicos/#historico-de-precos-e-taxas"/> <br/>
      <EndpointItemComp label="GET" text="Informações gerais" link="https://docs.fintz.com.br/endpoints/titulos-publicos/#informacoes-dos-titulos"/> <br/>
      <br>
      <p class="is-size-4"> Utils </p>
      <EndpointItemComp label="GET" text="Logos e ícones"/> <br/>
    </div>

  </div>
</template>

<script>
import EndpointItemComp from '@/comps/EndpointItemComp'

export default {
  name: 'EndpointsComp',

  components: {
    EndpointItemComp
  }
}
</script>
