<template>
<div style="max-width: 100%; overflow-x: hidden;">
<Navbar/>

<section class="section" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column">
        <h1 class="title is-3">
          Acesse dados do mercado financeiro
        </h1>
        <h3 class="subtitle is-5">
          Dados de empresas, fundos, títulos, ações, criptos e muito mais!
        </h3>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/clients.png">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionSources">
  <div class="container">
    <div class="columns is-flex">
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/b3.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/bacen.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/cvm.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/recfed.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/ibge.png" class="my-img">
        </figure>
      </div>
      <!-- <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/nasdaq.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/nyse.png" class="my-img">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="@/assets/sources_logos/binance.png" class="my-img">
        </figure>
      </div> -->
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <p class="title is-2"> Facilidade para seu negócio </p>
        <p class="subtitle is-5">
          Em um único ponto de acesso, você tem dados de diversas fontes.
          Nós já coletamos, validamos, limpamos e filtramos esses dados para você.
        </p>
        <br>
        <p class="title is-2"> Desenvolva mais rápido! </p>
        <p class="subtitle is-5">
          Disponibilizamos os dados em API REST,
          CSV, email ou add-in do Excel.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionBenefits">
  <div class="container">
    <div class="columns">

      <div class="column">
        <div class="card pointer" @click="$router.push('/papeis-b3')">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/papeis-b3/papeis-b3.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">API B3</p>
                <p class="subtitle is-6">
                  Ações, ETFs, FIIs e BDRs
                  <ul>
                    <li class="list"> Indicadores </li>
                    <li class="list"> Informações gerais </li>
                    <li class="list"> Papéis similares </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card pointer" @click="$router.push('/dados-CRIs')">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/empresas.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">Dados de CRIs</p>
                <p class="subtitle is-6">
                  <span> Atualizados automaticamente </span>
                  <ul>
                    <li class="list"> Dados da operação </li>
                    <li class="list"> Busca por filtros </li>
                    <li class="list"> Notificação por email </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns is-vcentered">
              <div class="column p-0">
                <div class="is-flex is-justify-content-center">
                  <figure class="image is-96x96">
                    <img src="@/assets/products/fundos.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="column is-four-fifths py-0">
                <p class="title is-4">API Fundos</p>
                <p class="subtitle is-6">
                  Dados da CVM em tempo real
                  <ul>
                    <li class="list"> Resgate e captação </li>
                    <li class="list"> Demonstrativos, relatórios </li>
                    <li class="list"> Composição dos FIs </li>
                  </ul>
                </p>
              </div>
            </div>
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
          Diversos indicadores
        </h1>
        <h3 class="subtitle">
          Múltiplos de receita, ebitda, dividendos e mais!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/indicadores.png">
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
          Dados gerais
        </h2>
        <h4 class="subtitle is-4">
          Descrição, empresas similares, website e muito mais!
        </h4>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/infosgerais.png">
        </figure>
      </div>
      <div class="column is-half is-hidden-touch">
        <h2 class="title is-2">
          Dados gerais
        </h2>
        <h4 class="subtitle is-4">
          Descrição, empresas similares, website e muito mais!
        </h4>
      </div>
    </div>
  </div>
</section>

<section class="section" id="section2">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <h1 class="title is-1">
          Informações de sociedade
        </h1>
        <h3 class="subtitle">
          Empresas públicas e privadas!
        </h3>
      </div>
      <div class="column is-half">
        <figure class="image">
          <img src="@/assets/code_pngs/empresa_socios.png">
        </figure>
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
</div>
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
.pointer {
  cursor: pointer
}
</style>
