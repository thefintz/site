<template>
<div style="max-width: 100%; overflow-x: hidden;">
<NavbarComp/>

<section>
  <div class="container px-6">
    <figure>
      <img src="@/assets/candle.png"/>
    </figure>
  </div>
</section>

<section class="pt-6">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-3 has-text-black">
        Começar a usar
      </h1>
      <h2 class="subtitle is-5">
        Coloque seu email abaixo e receba gratuitamente sua chave de uso da API.
      </h2>
    </div>
  </div>
</section>

<section class="section mb-6" id="section4">
  <div class="container">
    <div class="columns">

      <div class="column is-half has-text-centered">
        <form action="https://formsubmit.co/674ee13a67030c085e36aa2893dd35e9" method="POST" >
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-medium" type="email" placeholder="Seu email" name="email" required>
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </span>
            </p>
          </div>
          <input type="hidden" name="_subject" value="Retornando seu contato"> <!-- quickly reply with subject-->
          <!-- <input type="hidden" name="_autoresponse" value="Obrigado! Em breve entraremos em contato"> -->
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="https://fintz.com.br/#/email-enviado">
          <!--
            TODO: add other captcha side by side with "Enviar" button.
            The current one is on another page and in English
          -->
          <input type="hidden" name="_captcha" value="false">
          <div class="is-flex is-flex-direction-column is-align-items-center">
          <button class="button px-6 has-background-primary has-text-white" type="submit">Enviar</button>
          </div>
        </form>

      </div>
        <div class="column is-half has-text-centered">
        <span class="subtitle is-5 has-text-dark">
          Ou entre em contato pelo WhatsApp
        </span>
        <ContactComp />
        <a href="mailto:contato@fintz.com.br"> contato@fintz.com.br </a>
      </div>
    </div>
  </div>
</section>

<FooterComp bg="light"/>

</div>
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'
import FooterComp from '@/comps/FooterComp'
import ContactComp from '@/comps/ContactComp'

export default {
  name: 'ContatoComecarUsar',

  components: {
    NavbarComp,
    FooterComp,
    ContactComp
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
