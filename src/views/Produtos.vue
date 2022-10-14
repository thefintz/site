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

<!-- Clients Stories -->
<ClientsStories/>

<!-- Pricing -->
<PricingAll bg="light"/>

<ContactForm/>

<!-- Clients testimonies -->
<ClientsTestimonies/>

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
import ClientsTestimonies from '@/comps/ClientsTestimonies'
import ClientsStories from '@/comps/ClientsStories'

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
    ClientsStories,
    ClientsTestimonies,
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
