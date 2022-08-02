<template>
<div style="max-width: 100%; overflow-x: hidden;" class="has-background-white">
<NavbarComp />

<section class="section" id="sectionBenefits">
  <div class="container">

    <div class="card my-3 pointer" @click="$router.push('/dcm')">
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

    <div class="card my-3 pointer" @click="$router.push('/papeis-b3')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/5-acoes.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Fintz Bolsa</p>
            <p class="subtitle is-6">
              <span>
                Busque por indicadores e informações gerais de papéis da B3
                <br>
                Dados de ações, FIIs, ETFs e BDRs
              </span>
              <ul>
                <li class="list"> Ticker, nome, tipo de papel </li>
                <li class="list"> Setor, subsetor, segmento </li>
                <li class="list"> +30 Indicadores </li>
                <li class="list"> Descrição </li>
                <li class="list"> (ações e BDRs) CEO, data de fundação, no funcionários </li>
                <li class="list"> (ETFs e FIIs) composição, gestor, índice </li>
                <li class="list"> Tags e papéis similares</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card my-3 pointer" @click="$router.push('/fundos')">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/3-fundos.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Dados de Fundos</p>
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

    <div class="card my-3">
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
            <p class="title is-4">Fatos Relevantes</p>
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

    <div class="card my-3">
      <div class="card-content">
        <div class="columns is-vcentered align-item-center">
          <div class="pr-3 column is-one-fifth">
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/7-sociedades-anonimas.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Dados de Sociedades Anônimas</p>
            <p class="subtitle is-6">
              <span>
                Tenha acesso a demonstrativos financeiros e relatórios das S.As
                <br>
                Opção para receber alertas de novas publicações via email, WhatsApp, CSV e API.
                <br>
                Gerencie quais papeis e tipos de notificação quer receber
              </span>
              <ul>
                <li class="list"> Demonstrativos financeiros </li>
                <li class="list"> Relatórios </li>
                <li class="list"> Avalie risco de crédito </li>
                <li class="list"> Prospecte clientes  </li>
                <li class="list"> Compare com concorrentes públicos e privados </li>
                <li class="list"> Acesse dados antes do IPO </li>
                <li class="list"> Cruze os dados com nosso produto de contrato social </li>
                <li class="list"> E muito mais! </li>
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
            <div class="is-flex is-justify-content-center">
              <figure class="image is-96x96">
                <img src="@/assets/products/aa/2-merc-imobiliario.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div>
            <p class="title is-4">Dados do Mercado Imobiliário</p>
            <p class="subtitle is-6">
              <span>
                Saiba o preço médio do m2 alugado ou vendido por região
                <br>
                Crie alertas para novas listagens e busque por região, tipo de imóvel e valores
                <br>
                Opção para receber alertas via email, WhatsApp, CSV e API.
              </span>
              <ul>
                <li class="list"> Tipo de imóvel </li>
                <li class="list"> Endereço </li>
                <li class="list"> Valor total </li>
                <li class="list"> Área </li>
                <li class="list"> Data de listagem </li>
                <li class="list"> Imobiliária </li>
                <li class="list"> Contato </li>
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
