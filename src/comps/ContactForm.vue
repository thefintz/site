<template>
<section class="section" id="section4">
  <div class="container">
    <div class="columns">
      <div class="column is-half is-align-items-center">
        <h2 class="title is-3 has-text-dark">
          Dúvidas sobre como a Fintz pode se encaixar no seu negócio?
        </h2>
        <h4 class="subtitle is-5 has-text-dark">
          Podemos te ajudar a encontrar a solução certa. Informe seu email e em breve entraremos em contato.
        </h4>
      </div>

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
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-medium" type="text" placeholder="No que podemos ajudar?" name="assunto">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'comment']" />
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
          <button class="button is-secondary has-text-dark" type="submit">Enviar</button>
          </div>
        </form>

        <h4 class="subtitle is-5 pt-5 mt-5 pb-0 mb-0 has-text-dark">
          Ou entre em contato pelo nosso WhatsApp
        </h4>
        <ContactComp />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import ContactComp from '@/comps/ContactComp'

export default {
  name: 'ContactForm',

  components: {
    ContactComp
  }
}
</script>
