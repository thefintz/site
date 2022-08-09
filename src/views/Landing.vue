<template>
<div style="max-width: 100%; overflow-x: hidden;">
<NavbarComp />

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

<section class="section has-background-primary" id="sectionBenefits">
  <div class="container">
    <div class="columns">

      <div class="column">
        <div class="card pointer" @click="$router.push('/fundos')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/empresas.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Fundos</p>
                <p class="subtitle is-6">
                  <span> Todos os fundos de investimento </span>
                  <ul>
                    <li class="list"> Histórico de preços </li>
                    <li class="list"> Rentabilidade e indicadores </li>
                    <li class="list"> Crie lâminas personalizadas automaticamente </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card pointer" @click="$router.push('/papeis-b3')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/papeis-b3/papeis-b3.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Bolsa</p>
                <p class="subtitle is-6">
                  Ações, ETFs, FIIs e BDRs
                  <ul>
                    <li class="list"> Dados gerais </li>
                    <li class="list"> Cotações e indicadores</li>
                    <li class="list"> Fatos relevantes e eventos corporativos </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card pointer" @click="$router.push('/leadz')">
          <div class="card-content" style="background-color: #c1ddff">
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

    </div>
  </div>
</section>

<section class="section" id="section2" >
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered is-size-4 pb-5">
        <span class="is-size-6 has-text-weight-bold"> Confiados pelas empresas mais renomadas do mercado. </span>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half has-text-centered is-size-4">
        <figure class="image pb-5" style="max-width: 50%; margin-left: auto; margin-right: auto;">
          <img src="@/assets/stark_logo.png" alt="Stark Investment Banking logo">
        </figure>
        <span> "Integramos nossa solução aos dados de ações da Fintz e escalamos em 3x nossa operação". </span>
        <br>
        <span class="is-size-5"> - Guilherme Dantas, PM. </span>
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

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered is-size-4">
        <figure
          class="image pb-5"
          style="max-width: 50%; margin-left: auto; margin-right: auto;"
        >
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
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import ContactDemo from '@/comps/ContactDemo'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
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
