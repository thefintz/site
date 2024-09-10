<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
  <NavbarComp />

  <section class="section has-background-light" id="sectionBenefits">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="pr-3 column">
          <div class="is-flex">
            <figure class="image is-256x256">
              <img width="20" src="@/assets/products/API_TitulosPublicos/main.png" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="column">
          <p class="title is-3 has-text-black">API Tesouro Direto</p>
          <p class="subtitle is-4">
            <span>
              Descrição, juros, índice, preço a mercado e na curva
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
                  <img src="@/assets/products/dados-CRIs/dados-operacao.png" alt="Placeholder image">
                </figure>
              </div>
            </div>
            <div class="column is-four-fifths has-text-centered-mobile">
              <p class="title is-4">Dados do título</p>
              <p class="subtitle is-6">
                <span>
                  Descrição, índice, juros, preços de compra e venda, vencimento e mais.
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
                  <img src="@/assets/products/dados-CRIs/busca-inteligente.png" alt="Placeholder image">
                </figure>
              </div>
            </div>
            <div class="column is-four-fifths has-text-centered-mobile">
              <p class="title is-4">Histórico</p>
              <p class="subtitle is-6">
                <span>
                  Acesso total a todos os títulos e seus dados (+10 anos).
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
                  <img src="@/assets/products/dados-CRIs/alertas.png" alt="Placeholder image">
                </figure>
              </div>
            </div>
            <div class="column is-four-fifths has-text-centered-mobile">
              <p class="title is-4">Alertas</p>
              <p class="subtitle is-6">
                <span>
                  Crie alertas baseados em taxa de juros ou preço de venda e seja notificado.
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
          <h1 class="title has-text-black is-1">
            Dados intraday
          </h1>
          <h3 class="subtitle">
            Títulos atualizados a cada 30 minutos direto das fontes oficiais.
          </h3>
        </div>
        <div class="column is-half">
          <TesouroInfosDiarias/>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="section2">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title has-text-black is-1">
            Dados históricos
          </h1>
          <h3 class="subtitle">
            Ótimo para plotar gráficos, calcular rentabilidade e analisar ativos.
          </h3>
        </div>
        <div class="column is-half">
          <TesouroInfosHistoricas/>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="section2">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title has-text-black is-1">
            Lista de títulos
          </h1>
          <h3 class="subtitle">
            Acesso a todos os títulos do tesouro direto
          </h3>
        </div>
        <div class="column is-half">
          <TesouroLista/>
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
import TesouroLista from '@/comps/code/TesouroLista'
import TesouroInfosDiarias from '@/comps/code/TesouroInfosDiarias'
import TesouroInfosHistoricas from '@/comps/code/TesouroInfosHistoricas'
import PricingComercial from '@/comps/PricingComercial'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    PartnersComp,
    TesouroLista,
    TesouroInfosDiarias,
    TesouroInfosHistoricas,
    PricingComercial
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
