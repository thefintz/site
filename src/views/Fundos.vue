<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<Navbar/>

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="pr-3 column">
        <div class="is-flex">
          <figure class="image is-256x256">
            <img width="20" src="@/assets/products/papeis-b3/papeis-b3-page.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <p class="subtitle is-4">Fundos de investimentos</p>
        <p class="title is-3">
          <span>
            Tenha acesso a composição, informações e documentos de FIs
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
            <p class="title is-4">Composição</p>
            <p class="subtitle is-6">
              <span>
                Saiba como os fundos estão diversificando seus investimentos em Ações, Opções, Mercado Futuro
                e valores aplicados mensalmente
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
            <p class="title is-4">Informações</p>
            <p class="subtitle is-6">
              <span>
                Tenha acesso ao regulamento, lâmina de informações essencias, informações cadastrais
                como taxa de administração, perfomance e muito mais!
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
            <p class="title is-4">Periódicos</p>
            <p class="subtitle is-6">
              <span>
                Dados diários de captação, resgates, patrimônio líquido. Informações contábeis. Fatos relevantes,
                comunicados e outros documentos.
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
          Composição detalhada
        </h1>
        <h3 class="subtitle">
          Ações, BDRs, Opções e muito mais!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/fundos_carteira.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h1 class="title is-1">
          Informações essenciais
        </h1>
        <h3 class="subtitle">
          Condições de investimento, política, risco, rentabilidade e mais!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/fundos_info.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h1 class="title is-1">
          Informações essenciais
        </h1>
        <h3 class="subtitle">
          Condições de investimento, política, risco, rentabilidade e mais!
        </h3>
      </div>
    </div>
  </div>
</section>

<ContactForm/>

<Footer />

</div>
</template>

<script>
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import ContactForm from '@/comps/ContactForm'

export default {
  name: 'App',

  components: {
    Footer,
    Navbar,
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
