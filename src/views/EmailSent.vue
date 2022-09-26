<template>
<div style="max-width: 100%; overflow-x: hidden; min-height: 100vh" class="has-background-white">
  <NavbarComp />

  <section class="section" id="message">
    <div class="container">
      <div class="columns is-vcentered">

        <div class="column has-text-centered justify-content-center">
          <div class="is-flex is-justify-content-center">
            <figure class="image is-64x64">
              <img src="@/assets/logo.png" alt="People working">
            </figure>
          </div>
          <div>
            <h4 class="title is-size-3 m-0">
              Email enviado!
            </h4>
            <span class="icon-text">
              <span class="has-text-grey-dark subtitle">
                Entraremos em contato em até 24h
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['far', 'smile-wink']" />
              </span>
            </span>
          </div>
          <button class="button is-primary" @click="$router.back()">
            <span class="has-text-weight-bold px-3 has-text-white">
              voltar
            </span>
          </button>
        </div>

        <div class="column">
          <figure class="image is-big">
            <img src="@/assets/email-sent.png" alt="People working">
          </figure>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'

export default {
  name: 'EmailSent',

  components: {
    NavbarComp
  }
}
</script>

<style scoped>
.is-big {
  max-height: 40vh;
}
</style>
