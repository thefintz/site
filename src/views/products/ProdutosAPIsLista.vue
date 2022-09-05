<template>
<div style="max-width: 100%; overflow-x: hidden">
<NavbarComp />

<section class="section pb-0" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-two-thirds">
        <h1 class="title is-1">
          APIs Fintz
        </h1>
        <h3 class="subtitle is-4">
          Diversas APIs de market data e utilitários.
        </h3>
        <div class="has-text-centered">
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</section>

<section class="section" id="sectionBenefits">
  <div class="container">

    <div class="card mb-3 pointer" @click="$router.push('/api-bolsaB3')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <p class="title is-4 has-text-centered">API Bolsa B3</p>
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/5-acoes.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <br>
            <p class="subtitle is-6">
              <span>
                Busque por indicadores e informações gerais de papéis da B3
              </span>
              <ul>
                <li class="list"> Ações, BDRs, ETFs, FIIs e +30 indicadores </li>
                <li class="list"> Ticker, nome, tipo de papel, setor, segmento </li>
                <li class="list"> Dividendos, JCP, subscrições e outros eventos corporativos </li>
                <li class="list"> Acionistas, descrição da atuação, sede, nº funcionários </li>
                <li class="list"> Notícias e fatos relevantes com opção de alertas webhook </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3 pointer" @click="$router.push('/api-fundos')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <p class="title is-4 has-text-centered">API Fundos</p>
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/3-fundos.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="subtitle is-6">
              <span>
                Receba informações detalhadas de fundos de investimento
                <br>
                Crie alertas para novos papéis no portfólio, valores resgatados e captados e mais!
                <br>
                Opção para receber alertas via email, WhatsApp, CSV e API.
              </span>
              <ul>
                <li class="list"> Valor captado </li>
                <li class="list"> Valor resgatado </li>
                <li class="list"> Rentabilidade </li>
                <li class="list"> Composição do portfólio </li>
                <li class="list"> Data da atualização </li>
                <li class="list"> Nome do fundo </li>
                <li class="list"> Link para documento </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3 pointer" @click="$router.push('/api-cris')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <p class="title is-4 has-text-centered">API CRIs</p>
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/1-cri.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="subtitle is-6">
              <span>
                Crie alertas para emissões de CRIs por região, emissor ou volume de operação
                <br>
                Receba todos os dados e detalhes de CRIs dos últimos 10 anos.
                <br>
                Opção para receber alertas via email, WhatsApp, CSV e API.
              </span>
              <ul>
                <li class="list"> Volume da operação </li>
                <li class="list"> Emissor </li>
                <li class="list"> Remuneração </li>
                <li class="list"> Prazo </li>
                <li class="list"> Localização </li>
                <li class="list"> Comparação </li>
                <li class="list"> Histórico </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <p class="title is-4 has-text-centered">API Fatos Relevantes</p>
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/6-fatos-relevantes.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="subtitle is-6">
              <span>
                Fique sabendo de tudo que se passa nos RIs das empresas e fundos
                <br>
                Opção para receber notificações via email, WhatsApp, CSV e API.
                <br>
                Gerencie quais papeis e tipos de notificação quer receber
              </span>
              <ul>
                <li class="list"> Splits/Desdobramentos e inplits </li>
                <li class="list"> Follow-ons </li>
                <li class="list"> Mudança na diretoria </li>
                <li class="list"> Relatórios e demonstrativos trimestrais </li>
                <li class="list"> Novos investimentos e direção da empresa </li>
                <li class="list"> E muito mais! </li>
              </ul>
            </p>
          </div>
        </div>
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
.pointer {
  cursor: pointer
}
</style>
