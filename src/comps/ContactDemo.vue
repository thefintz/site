<template>
<section class="section pt-0 mt-0" id="section4">
  <div class="container pt-0 mt-0">
    <form action="https://formsubmit.co/674ee13a67030c085e36aa2893dd35e9" method="POST" >
      <div class="columns">

        <div class="column">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-smal" type="email" placeholder="Seu email" name="email" required>
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </span>
            </p>
          </div>
        </div>

        <div class="column">
          <input type="hidden" name="_subject" value="Pedido de Demo"> <!-- quickly reply with subject-->
          <!-- <input type="hidden" name="_autoresponse" value="Obrigado! Em breve entraremos em contato"> -->
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="https://fintz.com.br/#/email-enviado">
          <!--
            TODO: add other captcha side by side with "Enviar" button.
            The current one is on another page and in English
          -->
          <input type="hidden" name="_captcha" value="false">
          <div class="is-flex is-flex-direction-column is-align-items-start">
            <button class="button is-primary has-text-white" type="submit">Agende uma demo hoje!</button>
          </div>
        </div>

      </div>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'ContactDemo'
}
</script>
