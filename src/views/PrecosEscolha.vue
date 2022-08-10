<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<NavbarComp />

<section class="section" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-two-thirds">
        <h1 class="title is-2">
          Precificação prática e flexível
        </h1>
        <h3 class="subtitle is-5">
          Comece a usar gratuitamente.
        </h3>
        <div class="has-text-centered">
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionPlans">
  <div class="container has-text-centered">

    <p class="title is-3"> Em qual solução você está interessado? </p>

    <div class="columns is-vcentered">

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/preco-api')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-128x128">
                <img width="20" src="@/assets/icons/pricing/puzzle.png" alt="Placeholder image">
              </figure>
            </div>
            <hr class="mt-0 black-line">
            <p class="title is-3">
              <span>
                APIs
              </span>
            </p>
            <p class="is-5">
              <span>
                Serviço de dados do mercado financeiro para alimentar seu app, site ou plataforma.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/preco-ferramentas')">
          <div class="card-content" style="background-color: #c1ddff">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-128x128">
                <img width="20" src="@/assets/icons/pricing/tools.png" alt="Placeholder image">
              </figure>
            </div>
            <hr class="mt-0 black-line">
            <p class="title is-3">
              <span>
                Ferramentas
              </span>
            </p>
            <p class="is-5">
              <span>
                Gerador automático de lâminas e materiais de distribuição. Pronto para uso e opção whitelabel.
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="section my-5" id="vantagens-fintz">
  <div class="container has-text-centered">
    <span class="subtitle is-3"> Vantagens de usar a Fintz </span>
      <div class="columns mt-3">

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/trusteddata.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Dados confiáveis</p>
          <p class="subtitle is-6">
            Dados direto de fontes oficiais, consolidados e verificados pelo nosso time de especialistas.
          </p>
        </div>

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/brasilglobo.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Opere em escala</p>
          <p class="subtitle is-6">
            Estenda a sua aplicação para novos mercados com recursos configuráveis para localização e conformidade.
          </p>
        </div>

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/notricks.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Sem truques</p>
          <p class="subtitle is-6">
            Coloque em produção com mais agilidade, com suporte qualificado em português e liberdade para escalar ou reduzir sem contratos.
          </p>
        </div>

    </div>
  </div>
</section>

<ContactForm/>

<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm
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

.pointer {
  cursor: pointer
}

.shadow {
  box-shadow: 2px 2px 5px #50525C
}
</style>
