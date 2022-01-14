<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<Navbar/>

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="pr-3 column">
        <div class="is-flex">
          <figure class="image is-256x256">
            <img width="20" src="@/assets/products/dados-CRIs/dados-CRIs-page.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <p class="subtitle is-4">Dados de CRIs</p>
        <p class="title is-3">
          <span>
            Seja notificado sobre emissões de CRIs e os detalhes da operação
          </span>
        </p>
      </div>
    </div>

  </div>
</section>

<section class="section" id="features">
  <div class="container">
    <span class="subtitle is-4"> Funcionalidades </span>
    <div class="columns pt-3">

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/dados-CRIs/dados-operacao.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Dados da operação</p>
            <p class="subtitle is-6">
              <span>
                Emissor, cedente, remuneração, agente fiduciário, termo de
                securitização, data de emissão, vencimento, entre outros.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/dados-CRIs/busca-inteligente.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Busca Inteligente</p>
            <p class="subtitle is-6">
              <span>
                Pesquise os CRIs por cidade ou estado, tipo de imóvel, emissor,
                cedente e muito mais!
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-64x64">
                <img src="@/assets/products/dados-CRIs/alertas.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Alertas</p>
            <p class="subtitle is-6">
              <span>
                Receba as atualizações de maneira automática direto no seu
                email, WhatsApp, ou também via WebHooks.
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-1">
          Dados da operação
        </h1>
        <h3 class="subtitle">
          Com link para documentos emitidos
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/dados-CRIs/cri_response.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<!-- TODO: Adicionar imagem de iPhone recebendo msg da operação no WhatsApp
<section class="section" id="section3">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h2 class="title is-2">
          Receba email de emissão e atualizações
        </h2>
        <h4 class="subtitle is-4">
          Opte por quais tipos de emissões e/ou localização
        </h4>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/infosgerais.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h2 class="title is-2">
          Dados gerais e papéis similares
        </h2>
        <h4 class="subtitle is-4">
          Descrição, tags, website, papéis similares e muito mais!
        </h4>
      </div>
    </div>
  </div>
</section>
 -->

<Footer />

</div>
</template>

<script>
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'

export default {
  name: 'App',

  components: {
    Footer,
    Navbar
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
</style>
