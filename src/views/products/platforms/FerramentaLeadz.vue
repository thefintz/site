<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<NavbarPlataformasComp />

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="pr-3 column">
        <div class="is-flex">
          <figure class="image is-256x256">
            <img width="20" src="@/assets/storyset/leadz.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <p class="subtitle is-4">Fintz Leadz</p>
        <p class="title is-3">
          <span>
            Uma base de milhões de empresas para você prospectar
          </span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="features">
  <div class="container">
    <span class="subtitle is-4"> Funcionalidades </span>
    <div class="columns pt-3">

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/papeis-b3/indicadores.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Agilidade</p>
            <p class="subtitle is-6">
              <span>
                Ao invés de diversas pesquisas comuns no Google, ganhe tempo pesquisando no sistema Fintz Leadz
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/papeis-b3/infos.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Precisão</p>
            <p class="subtitle is-6">
              <span>
                Segmente sua busca e não sofra com listas genéricas.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/papeis-b3/similares.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Assertividade</p>
            <p class="subtitle is-6">
              <span>
                Use filtros avançados como faturamento, cidade, setor de atuação, número de funcionários e muito mais.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-1">
          Fintz Leadz
        </h1>
        <h3 class="subtitle">
          Milhões de leads de valor para você.
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/Leadz.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<ContactForm/>

<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarPlataformasComp from '@/comps/NavbarPlataformasComp'
import ContactForm from '@/comps/ContactForm'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarPlataformasComp,
    ContactForm
  }
}
</script>

<style scoped>
#section1 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url("../assets/back_light4.jpg");
  background-image: url("../assets/back_dark.jpg"); */
  /* text-shadow: 1px 1px 1px #313338; */
}
.list {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}
.my-img {
  max-height: 10rem;
  max-width: 10rem
}
</style>
