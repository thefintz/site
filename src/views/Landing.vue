<template>
<Navbar />

<section class="section is-large" id="section1">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <h1 class="title is-1">
          Acesse os dados do mercado financeiro
        </h1>
        <h3 class="subtitle is-3">
          Dados e indicadores de empresas, FIs, títulos, ações e muito mais!
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
          Busque dados por CNPJ
        </h1>
        <h3 class="subtitle">
          Interface simples de utilizar e com todos os dados disponíveis
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

<section class="section" id="section4">
  <div class="container">
    <div class="is-flex is-flex-direction-column is-align-items-center">
      <h2 class="title is-2">
        Quer saber mais?
      </h2>
      <h4 class="subtitle is-4">
        Temos os dados do mercado financeiro que você precisa!
        <br>
        Entre em contato para tirar dúvidas ou pedir uma demo.
      </h4>

      <Contact />
    </div>
  </div>
</section>

<Footer />
</template>

<script>
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import Contact from '@/comps/Contact'

export default {
  name: 'App',

  components: {
    Footer,
    Navbar,
    Contact
  }
}
</script>

<style scoped>
#section1 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/back1.jpg");
  text-shadow: 3px 3px 3px #313338;
}
</style>
