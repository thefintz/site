<template>
  <section class="section my-5" id="success_cases" >
    <div class="container">
      <span class="title is-3 has-text-black"> Casos de Sucesso </span>
      <p class="title is-3 has-text-primary"> Você está em ótima companhia </p>

      <div class="columns">
        <div class="column is-half pr-5">
          <figure class="image py-5" style="max-width: 30%">
            <img src="@/assets/logos/sicredi.png" alt="Stark Investment Banking logo">
          </figure>
          <p class="is-size-5 has-text-black has-text-weight-bold pt-5"> Dados para lâmina de fundos </p>
          <span class="is-size-5">
            O Sicredi utiliza o market data da Fintz para gerar e customizar o material de distribuição dos seus fundos.
          </span>
        </div>

        <div class="column is-half pl-5">
          <figure class="image py-5" style="max-width: 30%">
            <img src="@/assets/logos/manfing.png" alt="Holder+ logo">
          </figure>
          <p class="is-size-5 has-text-black has-text-weight-bold pt-4"> Alimentando algoritmos </p>
          <span class="is-size-5">
            A Fintz fez uma parceria com a Manfing para prover dados para alimentar e treinar seus algoritmos de inteligência artificial
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientsStories'
}
</script>
