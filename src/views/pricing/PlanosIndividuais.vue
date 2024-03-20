<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<NavbarComp />

<section>
  <div class="container px-6">
    <figure>
      <img src="@/assets/candle.png"/>
    </figure>
  </div>
</section>

<PricingIndividual/>

<section class="section py-0 px-0" id="modelo-customizavel">
  <div class="hero-body">
    <div class="container">
      <p class="title is-3 has-text-black">Modelo de negócios diferente?</p>
      <p class="subtitle is-6 mb-0">
        Caso você cobre por usuário, por acesso, ou qualquer outra maneira, nós vamos montar o plano ideal para você.
      </p>
      <p>
        Entre em contato e vamos ajudar: contato@fintz.com.br
      </p>
    </div>
  </div>
</section>

<ClientsStories/>

<section class="section my-6" id="vantagens-fintz">
  <div class="container has-text-centered">
    <span class="subtitle is-2 has-text-black"> Vantagens de usar a Fintz </span>
      <div class="columns mt-5">

        <BenefitsComp/>
    </div>
  </div>
</section>

<ClientsTestimonies/>

<ContactForm/>

<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import PricingIndividual from '@/comps/PricingIndividual'
import ClientsStories from '@/comps/ClientsStories'
import ClientsTestimonies from '@/comps/ClientsTestimonies'
import BenefitsComp from '@/comps/BenefitsComp'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    ClientsStories,
    ClientsTestimonies,
    BenefitsComp,
    PricingIndividual
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

.black-line {
  background-color: #444
}
</style>
