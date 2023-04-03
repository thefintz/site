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

<PricingAll/>

<section class="section" id="opcoes-planos">
  <div class="container has-text-centered">
    <span class="title is-4"> Opções de preços simples e flexíveis </span>
      <div class="columns mt-3">

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/use.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Pagamento conforme o uso</p>
          <p class="subtitle is-6">
            Preços simples baseados no uso significam que você não ficará preso a grandes contratos.
          </p>
        </div>

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/volume.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Descontos por volume</p>
          <p class="subtitle is-6">
            Os descontos são acionados à medida que seu uso aumenta, para que você sempre tenha um preço justo.
          </p>
        </div>

        <div class="column is-one-third">
          <div class="is-flex is-justify-content-center pb-3">
            <figure class="image is-64x64">
              <img src="@/assets/icons/pricing/loyalclient.png" alt="Placeholder image">
            </figure>
          </div>
          <p class="title is-5">Preços especiais para clientes fixos</p>
          <p class="subtitle is-6">
            Fale com nossa equipe de vendas para maiores descontos com base em compromisso de uso.
          </p>
        </div>

    </div>
  </div>
</section>

<section class="section py-0" id="modelo-customizavel">
  <div class="hero-body">
    <div class="container">
      <p class="title is-3">Modelo de negócios diferente?</p>
      <p class="subtitle is-6 mb-0">
        Caso você cobre por usuário, por acesso, ou qualquer outra maneira, nós vamos montar o plano ideal para você.
      </p>
      <a href="mailto:contato@fintz.com.br">
        Entre em contato com nosso time de vendas para ver como podemos ajudar.
      </a>
    </div>
  </div>
</section>

<ClientsStories/>

<section>
  <div class="container is-fluid">
    <div class="box m-5 p-5" style="border: 1px solid lightgray; box-shadow: none;">
      <div class="columns mx-5">
        <div class="column">
          <h1 class="title is-2 has-text-primary">Fintz para startups</h1>
          <span class="pt-1 has-text-black">
            No programa Fintz para Startups, as empresas recebem créditos de API e recursos da Fintz para escalar suas soluções.
          </span>
        </div>
        <div class="column is-narrow is-flex is-align-items-center">
          <a
            class="button has-text-black"
            style="background-color: #98C6FF; border-color: lightgray;"
            @click="$router.push('/startups')">
            Conhecer Fintz para startups
          </a>
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

<ClientsTestimonies/>

<ContactForm/>

<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import PricingAll from '@/comps/PricingAll'
import ClientsStories from '@/comps/ClientsStories'
import ClientsTestimonies from '@/comps/ClientsTestimonies'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    ClientsStories,
    ClientsTestimonies,
    PricingAll
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
</style>
