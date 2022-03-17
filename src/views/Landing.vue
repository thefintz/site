<template>
<div style="max-width: 100%; overflow-x: hidden;">
<Navbar/>

<section class="section" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column">
        <h1 class="title is-3">
          Acesse dados do mercado financeiro
        </h1>
        <h3 class="subtitle is-5">
          Plataforma com múltiplos por setor, busca de CRIs por cidade e muito mais!
        </h3>
        <div class="has-text-centered">
         <ContactDemo/>
        </div>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/storyset/home.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionSources">
  <div class="container">
    <div class="columns is-flex">
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/b3.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/bacen.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/cvm.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/recfed.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/ibge.png" class="my-img">
        </figure>
      </div>
      <!-- <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/nasdaq.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/nyse.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/binance.png" class="my-img">
        </figure>
      </div> -->
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <p class="title is-2"> Agilidade </p>
        <p class="subtitle is-5">
          Com apenas um clique, acesse diversos dados do mercado.
        </p>
        <br>
        <p class="title is-2"> Precisão </p>
        <p class="subtitle is-5">
          Pesquisas inteligentes e com uma série de filtros avançados.
        </p>
        <br>
        <p class="title is-2"> Exporte os dados! </p>
        <p class="subtitle is-5">
          Disponibilizamos os dados para Excel, PowerBI, email ou API
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns">

      <div class="column">
        <div class="card pointer" @click="$router.push('/dcm')">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/empresas.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Fintz DCM</p>
                <p class="subtitle is-6">
                  <span> CRIs, CRAs, Debêntures </span>
                  <ul>
                    <li class="list"> Detalhes da operação </li>
                    <li class="list"> Diversos filtros </li>
                    <li class="list"> Exporte para Excel </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card pointer" @click="$router.push('/leadz')">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/fundos.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Fintz Leadz</p>
                <p class="subtitle is-6">
                  Milhões de empresas para você
                  <ul>
                    <li class="list"> Pesquisa personalizável </li>
                    <li class="list"> Segmente seus leads </li>
                    <li class="list"> Exportação para Excel</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card pointer" @click="$router.push('/papeis-b3')">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/papeis-b3/papeis-b3.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Fintz Bolsa</p>
                <p class="subtitle is-6">
                  Ações, ETFs, FIIs e BDRs
                  <ul>
                    <li class="list"> Indicadores </li>
                    <li class="list"> Informações gerais </li>
                    <li class="list"> Cotações e fatos relevantes </li>
                  </ul>
                </p>
              </div>
            </div>
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
          Fintz DCM
        </h1>
        <h3 class="subtitle">
          Pesquise operações de crédito com praticidade e assertividade!
          <br/>
          CRIs, CRAs e Debêntures.
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/DCM.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section3">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h2 class="title is-2">
          Fintz Leadz
        </h2>
        <h4 class="subtitle is-4">
          Uma base de milhões de empresas para você prospectar
        </h4>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/Leadz.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h2 class="title is-2">
          Fintz Leadz
        </h2>
        <h4 class="subtitle is-4">
          Uma base de milhões de empresas para você prospectar
        </h4>
      </div>
    </div>
  </div>
</section>

<!-- <section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-1">
          Fintz Mz
        </h1>
        <h3 class="subtitle">
          Empresas públicas e privadas!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/empresa_socios.png">
        </figure>
      </div>
    </div>
  </div>
</section> -->

<ContactForm/>

<Footer />
</div>
</template>

<script>
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import ContactForm from '@/comps/ContactForm'
import ContactDemo from '@/comps/ContactDemo'

export default {
  name: 'App',

  components: {
    Footer,
    Navbar,
    ContactForm,
    ContactDemo
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
.pointer {
  cursor: pointer
}
</style>
