<template>
<div class="container is-fluid has-background-light">
  <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
    <figure class="image">
      <img src="../assets/logo.png" >
    </figure>

    <div class="has-text-centered">
      <h4 class="title is-size-4">
        Essa página não foi encontrada!
      </h4>

      <p class="has-text-grey-dark">
        Parece que não conseguimos encontrar a página que você está procurando.
        <br>
        Tente voltar a procurar a página que deseja, qualquer coisa entre em contato
        <br>
        conosco para relatar um problema.
        <br>
        <br>
        Contato WhatsApp:
        <br>
        (41) 9 9187-5540
      </p>
    </div>

    <button class="button is-primary is-large" @click="$router.back()">
      <span class="has-text-weight-bold p-6 has-text-white">
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
