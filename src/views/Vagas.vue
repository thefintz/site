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

<section class="section" id="lista-vagas">
  <div class="container">
    <div class="columns mt-5">
      <div class="column is-4"></div>
      <div class="column is-4 has-text-black">
        <span class="title is-3 has-text-black"> Vagas abertas </span>
        <ul class="mt-5">
          <li class="list"><a class="is-size-4" @click="$router.push('/senior')">Desenvolvedor Sênior</a></li>
          <li class="list"><a class="is-size-4" @click="$router.push('/estagio')">Estágio: Desenvolvedor</a></li>
        </ul>
      </div>
      <div class="column is-4"></div>
    </div>
  </div>

</section>
<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp
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
#lista-vagas {
  min-height: 65vh;
}
</style>
