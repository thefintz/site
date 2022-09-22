<template>
<div>
  <NavbarComp/>
  <div class="has-background-light is-justify-content-center">
      <div class="has-text-centered columns">
        <div class="column is-2"></div>

        <div class="column is-8">

          <div class="is-flex is-justify-content-center pt-3" style="height: 12rem">
            <figure class="image">
              <img src="../assets/logo.png" >
            </figure>
          </div>

          <h4 class="title is-size-4">
            Essa página não foi encontrada!
          </h4>
          <p class="has-text-grey-dark">
            Parece que não conseguimos encontrar a página que você está procurando.
          </p>
          <p>
            Tente voltar a procurar a página que deseja, qualquer coisa entre em contato conosco para relatar um problema.
          </p>

          <button class="my-5 button is-primary is-large" @click="$router.push('/')">
            <span class="has-text-weight-bold p-6 has-text-white">
              Voltar à página inicial
            </span>
          </button>

          <div>
            <a class="py-3" href="https://wa.me/554191875540">
              <span class="my-auto has-text-primary">
                Contato WhatsApp
              </span>
            </a>
          </div>
        </div>

        <div class="column is-2"></div>
      </div>

      <br>
    </div>
</div>
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'

export default {
  name: 'NotFound',

  components: {
    NavbarComp
  }
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
