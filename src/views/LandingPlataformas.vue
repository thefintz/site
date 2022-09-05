<template>
<div style="max-width: 100%; overflow-x: hidden;">
<NavbarPlataformasComp />

<section class="section py-0 my-0" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column">
        <h1 class="title is-2">
          O jeito mais fácil de integrar dados do mercado financeiro
        </h1>
        <h3 class="subtitle is-5">
          Com a Fintz, você escolhe se quer acessar por ferramentas ou APIs.
          Sua solução conectada a dados de fundos, ações, dívida e muito mais!
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

<section class="section pt-0 mt-0" id="sectionSources">
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

<section class="section" id="sectionPlans">
  <div class="container has-text-centered">

    <p class="title is-3"> Soluções </p>

    <div class="columns is-vcentered">

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/produtos')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-128x128">
                <img width="20" src="@/assets/icons/pricing/puzzle.png" alt="Placeholder image">
              </figure>
            </div>
            <hr class="mt-0 black-line">
            <p class="title is-3">
              <span>
                APIs
              </span>
            </p>
            <p class="is-5">
              <span>
                Serviço de dados do mercado financeiro para alimentar seu app, site ou plataforma.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/produtos-plataformas')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-128x128">
                <img width="20" src="@/assets/icons/pricing/tools.png" alt="Placeholder image">
              </figure>
            </div>
            <hr class="mt-0 black-line">
            <p class="title is-3">
              <span>
                Plataformas
              </span>
            </p>
            <p class="is-5">
              <span>
                Aplicações web prontas para uso e opção whitelabel.
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
    <div class="columns is-centered">
      <div class="column is-third has-text-centered">
        <p class="title is-2"> Confiança </p>
        <p class="subtitle is-5">
          Dados direto de fontes oficiais, consolidados e verificados
        </p>
        <br>
      </div>
      <div class="column is-third has-text-centered">
        <p class="title is-2"> Facilidade </p>
        <p class="subtitle is-5">
          Todos os dados do mercado em uma só conexão
        </p>
        <br>
      </div>
      <div class="column is-third has-text-centered">
        <p class="title is-2"> Agilidade </p>
        <p class="subtitle is-5">
          Desenvolva sua solução em dias ao invés de meses
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section pt-0" id="section2" >
  <div class="container has-text-centered">
    <span class="is-size-5 has-text-weight-bold is-underlined"> Confiados por empresas renomadas do mercado. </span>
    <div class="columns mt-5 is-centered">

      <div class="column is-half has-text-centered is-size-4">
        <figure class="image py-5" style="max-width: 50%; margin-left: auto; margin-right: auto;">
          <img src="@/assets/stark_logo.png" alt="Stark Investment Banking logo">
        </figure>
        <span> "Escalamos em 3x nossa operação ao integrarmos com o market data da Fintz". </span>
        <br>
        <span class="is-size-5"> - Guilherme Dantas, PM. </span>
      </div>

      <div class="column is-half has-text-centered is-size-4">
        <figure class="image pt-5 pb-2" style="max-width: 29%; margin-left: auto; margin-right: auto;">
          <img src="@/assets/holder-plus_logo.png" alt="Holder+ logo">
        </figure>
        <span> "A Fintz fornece todos os dados de eventos corporativos e cotação de forma clara e correta. A integração com nossa plataforma foi fácil e prática". </span>
        <br>
        <span class="is-size-5"> - Bernardo, CEO. </span>
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
import ContactDemo from '@/comps/ContactDemo'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarPlataformasComp,
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
