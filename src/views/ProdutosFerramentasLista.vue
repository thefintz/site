<template>
<div style="max-width: 100%; overflow-x: hidden;" class="has-background-white">
<NavbarComp />

<section class="section pb-0" id="section1">
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-two-thirds">
        <h1 class="title is-1">
          Ferramentas Fintz
        </h1>
        <h3 class="subtitle is-4">
          Plataformas prontas para uso e com opção whitelabel.
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

    <div class="card mb-3 pointer" @click="$router.push('/fundos')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/6-fatos-relevantes.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Lâmina de fundos automática</p>
            <p class="subtitle is-6">
              <span>
                Geração automática de materiais de distribuição e lâminas.
                <br>
                Campos para comentário do gestor, objetivo do fundo e mais.
                <br>
                Opção para customização de layout e whitelabel.
              </span>
              <ul>
                <li class="list"> Diversos benchmarks/índices </li>
                <li class="list"> Gráficos personalizáveis </li>
                <li class="list"> Pronto para uso em seu site ou app </li>
                <li class="list"> Opção para dados em D-0 </li>
                <li class="list"> Dados estatísticos e históricos </li>
                <li class="list"> E muito mais! </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 pointer" @click="$router.push('/dcm')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/1-cri.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Fintz DCM</p>
            <p class="subtitle is-6">
              <span>
                Pesquise CRIs, CRAs e Debêntures com praticidade e assertividade.
                <br/>
                Diversos filtros para você personalizar sua busca: cidade, estado, volume, prazo, juros, entre outros.
                <br/>
                Acesse todos os detalhes da operação, com opção de exportar para Excel ou PowerBI.
              </span>
              <ul>
                <li class="list"> Emissor </li>
                <li class="list"> Cliente (cedente) </li>
                <li class="list"> Data de emissão </li>
                <li class="list"> Valor da emissão </li>
                <li class="list"> Vencimento </li>
                <li class="list"> Remuneração (juros e índice) </li>
                <li class="list"> Agente fiduciário </li>
                <li class="list"> Código IF B3 </li>
                <li class="list"> Termo de securitização </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3 pointer" @click="$router.push('/leadz')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/4-contrato-social.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Fintz Leadz</p>
            <p class="subtitle is-6">
              <span>
                Uma base de milhões de empresas para você prospectar
                <br>
                Use filtros avançados como faturamento, cidade, setor de atuação, número de funcionários e muito mais.
                <br>
                Opção para receber alertas via email, WhatsApp, CSV e API.
              </span>
              <ul>
                <li class="list"> Telefone, website, endereço </li>
                <li class="list"> Quadro societário (nome, idade, cpf...) </li>
                <li class="list"> Porte, razão social, nome fantasia </li>
                <li class="list"> Capital Social, data da fundação </li>
                <li class="list"> Natureza e regime tributário </li>
                <li class="list"> Tags, CNAEs primários e secundários, atividades </li>
                <li class="list"> Estabelecimentos </li>
                <li class="list"> Status </li>
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
