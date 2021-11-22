<template>
<div class="container is-fluid has-background-light">
  <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
    <figure class="image">
      <img src="https://cdn2.thecatapi.com/images/MjA1OTMwMA.jpg" >
    </figure>

    <span class="has-text-primary">
      <c-icon icon="cartera-404" />
    </span>

    <div class="has-text-centered">
      <h4 class="title is-size-4">
        parece que essa página não está na nossa cartera!
      </h4>

      <p class="has-text-grey-dark">
        Parece que não conseguimos encontrar a página que você está procurando.
        <br>
        Tente voltar a procurar a página que deseja, qualquer coisa entre em contato
        <br>
        conosco para relatar um problema.
      </p>
    </div>

    <button class="button is-primary is-large" @click="$router.back()">
      <span class="has-text-weight-bold p-6">
        voltar para o site
      </span>
    </button>

    <br>
  </div>
</div>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>

<style scoped>
.is-flex {
  height: 100vh;
}

img {
  width: 10rem;
  height: auto;
}
</style>
