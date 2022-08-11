<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">
<NavbarComp />

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="pr-3 column">
        <div class="is-flex">
          <figure class="image is-256x256">
            <img width="20" src="@/assets/products/papeis-b3/papeis-b3-page.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <p class="subtitle is-4">Geração automática de lâminas</p>
        <p class="title is-3">
          <span>
            Seu material de distribuição customizado, bonito e automático.
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
                <img src="@/assets/products/papeis-b3/indicadores.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Facilidade</p>
            <p class="subtitle is-6">
              <span>
                Defina uma única vez o layout, cores e dados e não se preocupe nunca mais.
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
                <img src="@/assets/products/papeis-b3/infos.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Confiabilidade</p>
            <p class="subtitle is-6">
              <span>
                Dados de fontes oficiais em D-1, com opção de D0.
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
                <img src="@/assets/products/papeis-b3/similares.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="column is-four-fifths has-text-centered-mobile">
            <p class="title is-4">Customizável</p>
            <p class="subtitle is-6">
              <span>
                Livre escolha dos gráficos, benchmarks, tabelas, histórico e todo o resto.
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
        <h1 class="title is-3">
          Adicione comentário do gestor e objetivo do fundo
        </h1>
        <h3 class="subtitle">
          Quando quiser, adicione campos de texto como comentários do gestor.
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/laminas/comentario_gestor.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h1 class="title is-3">
          Tabela de rentabilidade
        </h1>
        <h3 class="subtitle">
          Escolha o(s) índice/benchmark comparativo.
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/laminas/tabela_rentabilidade.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h1 class="title is-3">
          Tabela de rentabilidade
        </h1>
        <h3 class="subtitle">
          Escolha o(s) índice/benchmark comparativo.
        </h3>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-3">
          Gráfico de rentabilidade configurável
        </h1>
        <h3 class="subtitle">
          Liberdade total para customizar.
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/laminas/grafico_rentabilidade.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half is-hidden-desktop">
        <h1 class="title is-3">
          Informações essenciais
        </h1>
        <h3 class="subtitle">
          Condições de investimento, política, risco, rentabilidade e mais!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/products/laminas/dados_gerais.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h1 class="title is-3">
          Dados históricos e gerais
        </h1>
        <h3 class="subtitle">
          Personalize os dados estatísticos e períodos
        </h3>
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
</style>
