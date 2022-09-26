<template>
<div style="max-width: 100%; overflow-x: hidden;">
<NavbarComp />

<section class="section has-background-light" id="section1">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-size-2 has-text-black"> Produtos </h1>
      <h2 class="subtitle is-size-4"> APIs do mercado financeiro </h2>
    </div>
  </div>
</section>

<!-- 3 Cards citing APIs -->
<section class="section has-background-light" id="apis">
  <div class="container">
    <span class="title is-3 has-text-primary"> APIs do Mercado Financeiro </span>
    <p class="title is-4 has-text-black"> Dados históricos & com atraso (15min) </p>
    <APIsComp/>
  </div>
</section>

<!-- List of endpoints -->
<section class="section" id="endpoints">
  <div class="container" style="line-height: 180%">
    <EndpointsComp/>
  </div>
</section>

<!-- Use case on multiple platforms -->
<section class="section" id="platforms">
  <div class="container">
    <AnyPlatformComp></AnyPlatformComp>
  </div>
</section>

<!-- 3 Cards showing (macro) benefits -->
<section class="section" id="benefits">
  <div class="container">
    <BenefitsComp/>
  </div>
</section>

<!-- Clients testimonies/stories -->
<section class="section my-5" id="success_cases" >
  <div class="container">
    <span class="title is-3 has-text-black"> Casos de Sucesso </span>
    <p class="title is-3 has-text-primary"> Você está em ótima companhia </p>

    <div class="columns">
      <div class="column is-half has-text-centered">
        <figure class="image py-5" style="max-width: 50%; margin-left: auto; margin-right: auto;">
          <img src="@/assets/logos/stark.png" alt="Stark Investment Banking logo">
        </figure>
        <span class="is-size-5"> "Escalamos em 3x nossa operação ao integrarmos com o market data da Fintz". </span>
        <p> - Guilherme Dantas, PM. </p>
      </div>

      <div class="column is-half has-text-centered">
        <figure class="image pt-5 pb-2" style="max-width: 30%; margin-left: auto; margin-right: auto;">
          <img src="@/assets/holder-plus_logo.png" alt="Holder+ logo">
        </figure>
        <span class="is-size-5"> "A Fintz fornece todos os dados de eventos corporativos e cotação de forma clara e correta. A integração com nossa plataforma foi fácil e prática". </span>
        <p> - Bernardo, CEO. </p>
      </div>
    </div>

  </div>
</section>

<!-- Pricing -->
<PricingAll bg="light"/>

<ContactForm/>

<FooterComp />
</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import APIsComp from '@/comps/APIsComp'
import BenefitsComp from '@/comps/BenefitsComp'
import AnyPlatformComp from '@/comps/AnyPlatformComp'
import EndpointsComp from '@/comps/EndpointsComp'
import PricingAll from '@/comps/PricingAll'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    APIsComp,
    BenefitsComp,
    AnyPlatformComp,
    EndpointsComp,
    PricingAll
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
.pointer {
  cursor: pointer
}
</style>
