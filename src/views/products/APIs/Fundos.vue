<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
  <NavbarComp />

  <section class="section has-background-light" id="sectionBenefits">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="pr-3 column">
          <div class="is-flex">
            <figure class="image is-256x256">
              <img width="20" src="@/assets/products/API_Fundos/main.png" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="column">
          <p class="title is-3 has-text-black">API Fundos</p>
          <p class="subtitle is-4">
            <span>
              Composição, classificação, histórico, índices e indicadores
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

  <section class="section" id="sectionDadosDiários">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title is-1">
            Dados diários
          </h1>
          <h3 class="subtitle">
            Patrimônio líquido, captação, resgate, quantidade de cotistas e mais!
          </h3>
        </div>
        <div class="column is-half">
          <FundosInfosDiarias/>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="sectionDadosDiários">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title is-1">
            Dados históricos
          </h1>
          <h3 class="subtitle">
            Rentabilidade mensal histórica
          </h3>
        </div>
        <div class="column is-half">
          <FundosRetornoHistorico/>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="sectionDadosCadastrais">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title is-1">
            Dados cadastrais
          </h1>
          <h3 class="subtitle">
            Condições de investimento, taxas, política, risco e mais!
          </h3>
        </div>
        <div class="column is-half">
          <FundosInfosEssenciais/>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="section has-background-light" id="pricing-header">
    <div class="has-text-centered mb-6">
      <p class="title has-text-black is-2"> Precificação Personalizada </p>
      <p class="has-text-centered is-size-5 has-text-black"> Bolsa (ações, FIIs, ETFs, BDRs) + Tesouro + Índices </p>
    </div>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">
        <PricingComercial/>
      </div>
      <div class="column is-2"></div>
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
import PartnersComp from '@/comps/PartnersComp'
import PricingComercial from '@/comps/PricingComercial'
import FundosInfosEssenciais from '@/comps/code/FundosInfosEssenciais'
import FundosInfosDiarias from '@/comps/code/FundosInfosDiarias'
import FundosRetornoHistorico from '@/comps/code/FundosRetornoHistorico'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    PartnersComp,
    PricingComercial,
    FundosInfosEssenciais,
    FundosInfosDiarias,
    FundosRetornoHistorico
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
