<template>
<section class="section" id="section4">
  <div class="container">
    <div class="columns">
      <div class="column is-half is-align-items-center">
        <h2 class="title is-3 has-text-dark">
          Dúvidas sobre como a Fintz pode se encaixar no seu negócio?
        </h2>
        <h4 class="subtitle is-5 has-text-dark">
          Podemos te ajudar a encontrar a solução certa. Informe seu email e entraremos em contato em até 24h.
        </h4>
      </div>

      <div class="column is-half has-text-centered">
        <form action="https://formsubmit.co/19d9f6a9f2082b148676258586d638ff" method="POST" >
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
          <p class="has-text-justified p-1 has-text-weight-bold">
            Qual o principal assunto da sua mensagem?
          </p>
          <div class="columns is-multiline is-mobile">
            <div class="column is-full-mobile control">
              <input type="radio" id="opcao1" name="sobre" value="Plano enterprise">
              <label for="opcao1"> Plano enterprise </label>
            </div>

            <div class="column is-full-mobile control">
              <input type="radio" id="opcao2" name="sobre" value="Plano individual">
              <label for="opcao2"> Plano individual </label>
            </div>

            <div class="column is-full-mobile control">
              <input type="radio" id="opcao3" name="sobre" value="Demonstração">
              <label for="opcao3"> Demonstração </label>
            </div>

            <div class="column is-full-mobile control">
              <input type="radio" id="opcao4" name="sobre" value="Dúvidas">
              <label for="opcao4"> Dúvidas gerais </label>
            </div>
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

        <!-- <h4 class="subtitle is-5 pt-5 mt-5 pb-0 mb-0 has-text-dark">
          Ou entre em contato pelo nosso WhatsApp
        </h4>
        <ContactComp /> -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
// import ContactComp from '@/comps/ContactComp'

export default {
  name: 'ContactForm',

  components: {
    // ContactComp
  }
}
</script>
