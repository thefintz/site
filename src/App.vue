<template>
<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="@/assets/logo.png">
        <strong>FINTZ</strong>
      </a>
      <a class="navbar-burger" ref="burger" @click="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <a class="navbar-item" href="https://www.linkedin.com/company/acartera">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span>Linkedin</span>
          </span>
        </a>

        <a class="navbar-item" href="https://instagram.com/cartera.com.br">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span>Instagram</span>
          </span>
        </a>

        <a class="navbar-item" href="https://github.com/monneda">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</nav>

<section class="section is-large" id="section1">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <h1 class="title is-1">
          O futuro dos dados financeiros chegou!
        </h1>
        <h3 class="subtitle is-3">
          Seu ponto de entrada para criação de aplicações data-driven
        </h3>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-1">
          Diversos dados
        </h1>
        <h3 class="subtitle">
          Interface simples de se utilizar com diversos dados disponíveis
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code1.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section3">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h2 class="title is-2">
          Descubra mais
        </h2>
        <h4 class="subtitle is-4">
          Use os dados para tomar decisões mais inteligentes nos seus negócios
        </h4>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code2.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h2 class="title is-2">
          Descubra mais
        </h2>
        <h4 class="subtitle is-4">
          Use os dados para tomar decisões mais inteligentes nos seus negócios
        </h4>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="is-flex is-flex-direction-column is-align-items-center">
      <h2 class="title is-2">
        Quer saber mais?
      </h2>
      <h4 class="subtitle is-4">
        Cadastre-se na nossa newsletter e enviaremos novidades para você!
      </h4>

      <br>
      <MailChimp />
<!--       <div class="control">
        <input class="input" type="email" placeholder="Email" @keyup.enter="submit">
      </div>
      <br>
      <button class="button" @click="submit">Enviar</button>
 -->      <br>

      <article v-if="invalid" class="message is-danger">
        <div class="message-header">
          <p>Email inválido</p>
          <button class="delete" @click="invalid = false" />
        </div>
        <div class="message-body">
          O email inserido não é valido
        </div>
      </article>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-48x48">
            <img src="@/assets/logo.png">
          </figure>
          <h4 class="title is-4">FINTZ</h4>
        </div>
      </div>

      <div class="level-right">
        <a class="level-item" href="https://www.linkedin.com/company/acartera">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span>Linkedin</span>
          </span>
        </a>

        <a class="level-item" href="https://instagram.com/cartera.com.br">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span>Instagram</span>
          </span>
        </a>

        <a class="level-item" href="https://github.com/monneda">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </span>
        </a>
      </div>
    </div>

    <div class="has-text-centered">
      <span>
        Feito por <strong>Cartera</strong>
      </span>
    </div>
  </div>
</footer>
</template>

<script>
import MailChimp from '@/comps/MailChimp'

const REGEX = /.+@.+(\..+)+/

export default {
  name: 'App',

  components: {
    MailChimp
  },

  data: () => ({
    invalid: false
  }),

  methods: {
    submit ({ target: { value } }) {
      if (!REGEX.test(value)) {
        this.invalid = true
        return
      }
      console.log('Send e-mail')
    },

    burger () {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    }
  }
}
</script>

<style scoped>
#section1 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./assets/back1.jpg");
  text-shadow: 3px 3px 3px #313338;
}
</style>
