<template>
<div class="container has-background-light">
  <div class="is-flex is-flex-direction-column is-align-items-center">

    <figure class="image is-96x96">
      <img src="../assets/logo.png" >
    </figure>

    <div class="has-text-centered my-3">
      <h4 class="title is-size-4 m-0">
        Email enviado!
      </h4>

      <span class="icon-text">
        <span class="has-text-grey-dark">
          Em breve entraremos em contato
        </span>
        <span class="icon">
          <font-awesome-icon :icon="['far', 'smile-wink']" />
        </span>
      </span>
    </div>

    <button class="button is-primary my-3" @click="$router.back()">
      <span class="has-text-weight-bold p-3 has-text-white">
        voltar
      </span>
    </button>

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
