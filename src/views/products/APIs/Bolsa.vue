<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
  <NavbarComp />

  <section class="section has-background-light" id="sectionBenefits">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="pr-3 column">
          <div class="is-flex">
            <figure class="image is-256x256">
              <img width="20" src="@/assets/products/API_Bolsa/main.png" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="column">
          <p class="title is-3 has-text-black">API Bolsa</p>
          <p class="subtitle is-4">
            <span>
              Dados históricos e intraday de ativos na B3
            </span>
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Partners -->
  <section class="section pt-0 mt-6 has-text-centered" id="partners">
    <div class="container">
      <PartnersComp :hasText="true"/>
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
              <p class="title is-4">Indicadores</p>
              <p class="subtitle is-6">
                <span>
                  Mais de 20 indicadores para o investidor
                  tomar decisões conscientes e informadas.
                  Também com dados de balanço e resultados.
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
                  Agora o investidor também tem acesso à descrição de atuação
                  da empresa, CEO, sede, número de funcionários e
                  muito mais!
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
              <p class="title is-4">Similares</p>
              <p class="subtitle is-6">
                <span>
                  Descubra outros papéis do mesmo setor, subsetor ou segmento de
                  atuação. Use nossas tags para encontrar ainda mais similares.
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
            Diversos indicadores
          </h1>
          <h3 class="subtitle">
            Dividend yield, P/VP, ROIC e muito mais!
          </h3>
        </div>
        <div class="column is-half">
          <figure class="image">
            <!-- <img src="@/assets/code_pngs/indicadores.png"> -->
            <BolsaIndicadores/>
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
            Dados gerais e papéis similares
          </h1>
          <h3 class="subtitle">
            Descrição, tags, website, papéis similares e muito mais!
          </h3>
        </div>
        <div class="column is-half">
          <figure class="image">
            <!-- <img src="@/assets/code_pngs/infosgerais.png"> -->
            <BolsaInfosGerais/>
          </figure>
        </div>
        <div class="column is-half is-hidden-touch">
          <h1 class="title is-1">
            Dados gerais e papéis similares
          </h1>
          <h3 class="subtitle">
            Descrição, tags, website, papéis similares e muito mais!
          </h3>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="section has-background-light" id="pricing-header">
    <div class="has-text-centered mb-6">
      <p class="title has-text-black is-2"> Precificação Simples. </p>
      <p class="subtitle"> Acesso instantâneo. Cancele quando quiser. </p>
    </div>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">
        <PricingB3/>
      </div>
      <div class="column is-2"></div>
    </div>
  </section>

  <ContactForm />

  <FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import PartnersComp from '@/comps/PartnersComp'
import PricingB3 from '@/comps/PricingB3'
import BolsaIndicadores from '@/comps/code/BolsaIndicadores'
import BolsaInfosGerais from '@/comps/code/BolsaInfosGerais'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    PartnersComp,
    PricingB3,
    BolsaIndicadores,
    BolsaInfosGerais
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
