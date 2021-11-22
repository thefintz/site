<template>
<Navbar />
<div>
  <section class="section is-large" id="section1">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <h3 class="is-size-3"> Termos de Uso </h3>
          <h4 class="is-size-5"> Última atualização: 19 de novembro de 2021 </h4>
          <span>
            aqui...
          </span>
        </div>
      </div>
    </div>
  </section>
</div>
<Footer />
</template>

<script>
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'

export default {
  name: 'PrivacyPolicy',

  components: {
    Footer,
    Navbar
  }
}
</script>

<style scoped>
.list {
  margin-left: 3rem;
  list-style-type: circle;
  list-style-position: inside;
}
</style>
