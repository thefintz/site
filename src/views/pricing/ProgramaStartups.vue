<template>
<div style="max-width: 100%; overflow-x: hidden" class="has-background-white">

<NavbarComp theme="dark" />

<section style="background-color: #1f2b3d">
  <div class="container px-6">
    <figure>
      <img src="@/assets/candle_white.png"/>
    </figure>
  </div>
</section>

<section class="py-6 mb-6" style="background-color: #1f2b3d">
  <div class="container px-6 has-text-centered">
    <h1 class="is-size-1 has-text-primary has-text-weight-semibold"> Escale sua startup com a Fintz</h1>
    <p class="is-size-5 has-text-white-ter mx-5 px-5"> Com a Fintz, sua startup pode receber créditos para dar o pontapé inicial no desenvolvimento de produtos sem gastar nada.</p>
  </div>
</section>

<section>
  <div class="container" style="width: 85%">
    <h2 class="is-size-3 has-text-black has-text-weight-semibold">Fintz para Startups</h2>
    <p class="is-size-6 has-text-black">Começamos a Fintz em 2020 e aqueles meses ainda estão muito frescos em nossa memória! Sabemos como é ser uma pequena empresa com uma boa ideia, recursos limitados e barreiras significativas para entrar em nosso nicho da indústria. O mercado financeiro está inovando mais rapidamente do que nunca, e a importância de inovadores na indústria se juntarem a nós em nossa busca comum para informar os investidores da melhor forma possível nunca foi maior.</p>
    <br>
    <p class="is-size-6 has-text-black">Nos primeiros momentos da Fintz, nos beneficiamos muito de programas de créditos como o AWS Activate, e, portanto, queremos ter certeza de pagar isso adiante para outras startups em nossa indústria. Através da nossa API unificada do mercado financeiro, eliminamos barreiras técnicas, acabando com o que costumava tomar meses a anos de trabalho redundante para empresas de todos os tamanhos. Para aquelas novas startups com recursos limitados que procuram entrar na via rápida em direção ao seu MVP, ter acesso à nossa API do mercado financeiro pode significar toda a diferença no seu sucesso. </p>
    <br>
    <h3 class="is-size-3 has-text-black has-text-weight-semibold">Nossa missão</h3>
    <p class="is-size-6 has-text-black">A missão da Fintz é acelerar a adoção de tecnologia e ciência de dados no mercado financeiro, levando o fácil acesso a informação de qualidade. Somos inspirados pela ambição e visão das mais novas empresas na indústria e acreditamos que tornando o poder da Fintz disponível para empresas em estágio inicial, nós como indústria alcançaremos nossa missão mais rapidamente.</p>
    <br>
    <p
      class="is-size-6 has-text-gray is-italic pl-4"
      style="border-width: 0px 0px 0px 4px; border-style: solid; border-color: lightgray;"
    >
      Para se qualificar para o programa Fintz para Startups, sua empresa deve ter sido fundada há menos de dois anos e ter menos de R$1 milhão em financiamento total. Empresas elegíveis recebem créditos de API e recursos da Fintz para ajudar no dimensionamento de suas soluções.
    </p>
    <br>
    <p class="is-size-6 has-text-black">Se você se qualificar para os critérios acima, ou se estiver fora dos critérios, mas gostaria que revisássemos sua inscrição com base em seus méritos individuais, entre em contato abaixo!</p>
  </div>
</section>

<ContactForm/>

<ClientsTestimonies/>

<FooterComp />

</div>
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'
import ContactForm from '@/comps/ContactForm'
import ClientsTestimonies from '@/comps/ClientsTestimonies'

export default {
  name: 'App',

  components: {
    FooterComp,
    NavbarComp,
    ContactForm,
    ClientsTestimonies
  }
}
</script>
