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

  <section class="section" id="opcoes-planos">
    <div class="container">
      <div class="columns mt-5">
        <div class="column is-2"></div>
        <div class="column is-8 has-text-black">
          <span class="title is-4 has-text-black"> Desenvolvedor Estagiário </span>
          <h2 class="title is-5 has-text-black mt-5">TL;DR</h2>
          <ul>
            <li class="list">Vaga Dev Estagiário em startup early-stage (fintech SaaS B2B e B2C).</li>
            <li class="list">Somos API de market data, investida por 2 fundos, clientes como Sicredi.</li>
            <li class="list">Tech stack: Python, Scrapy, Dagster, Postgres, AWS (Lambda + RDS), Github Actions.</li>
            <li class="list">Possibilidade e interesse de efetivação.</li>
            <li class="list">Muita autonomia, desafios, responsabilidade.</li>
            <li class="list">Compensação: R$1k - R$2k (a depender do conhecimento e horas de trabalho).</li>
            <li class="list">Bônus: interesse/experiência em mercado financeiro, UI/UX, marketing ou startups.</li>
          </ul>
          <hr>
          <h2 class="title is-5 has-text-black mt-5">Mais detalhes</h2>
          <p>
            Buscamos Estagiário de desenvolvimento, com interesse em trabalhar com as mais novas tecnologias, grandes desafios, muita autonomia e muitas responsabilidades, com mentalidade de dono. Interesse, conhecimento e/ou experiência com mercado financeiro, marketing, UI/UX ou startups são muito bem vindos.
          </p>
          <br>
          <p>
            Tudo isso pois hoje a equipe é extremamente pequena e buscamos alguém que acredite no equity e e esteja alinhado com o futuro da empresa. Precisamos de pessoas com conhecimentos e interesses amplos para crescer junto com o time, sendo recompensado tanto com salário base, mais variável de faturamento da empresa como um todo (igual os fundadores) e com equity (parcela da empresa, se tornando também um dono/sócio).
          </p>
          <br>
          <p>
            Hoje somos apenas os dois fundadores, ambos com formação em Ciências da Computação pela UFSC. Embora o time minúsculo, já contamos com dezenas de clientes, entre eles o Sicredi. A Fintz tem >2 anos e já recebeu aporte (pre-seed) de dois fundos de investimento.
          </p>
          <br>
          <p>
            Somos uma API de market data, ou seja, fornecemos dados do mercado financeiro para alimentar plataformas, sites, dashboards, etc. Principalmente dados de ações, fundos, títulos públicos e índices. Portanto, é uma startup de infraestrutura. Modelo SaaS, B2B e B2C.
          </p>

          <h2 class="title is-5 has-text-black mt-5">Compensação</h2>
          <ul>
            <li class="list">Equity (% da empresa)</li>
            <li class="list">Variável (% de faturamento da empresa)</li>
            <li class="list">Salário base de R$1000 - R$2000 (dependendo do conhecimento e horas)</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Tecnologias que trabalhamos</h2>
          <ul>
            <li class="list">Python (+ Pandas)</li>
            <li class="list">Scrapy (extração de dados, scrappers)</li>
            <li class="list">Dagster (pipeline de processamento e integrações)</li>
            <li class="list">Banco Postgres (SQL)</li>
            <li class="list">AWS (Lambda + RDS)</li>
            <li class="list">Github e Github Actions (CI/CD)</li>
            <li class="list">Front com Vue ou React, e tailwind</li>
            <li class="list">Nos comunicamos por Discord e seguimos a metodologia Kanban usando Trello</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">No que vai trabalhar</h2>
          <ul>
            <li class="list">Na parte de engenharia, praticamente tudo.</li>
            <li class="list">Desenvolver e manter a API, testes, reviews, bugs, versionamento…</li>
            <li class="list">Realizar integrações com novas fontes de dados</li>
            <li class="list">Padronização e estruturação de dados inconsistentes e complexos</li>
            <li class="list">Automatização de extrações de dados</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Requisitos</h2>
          <ul>
            <li class="list">Inglês não precisa ser fluente, somos focados no mercado do Brasil. Um pouco de inglês ajuda no desenvolvimento pois muitas tecnologias que usamos são em inglês.</li>
            <li class="list">Formação em cursos de tecnologia não é obrigatório, mas ajuda.</li>
            <li class="list">Saber programar: extremamente importante.</li>
            <li class="list">Experiência prévia em microserviços, AWS, ajuda também.</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Bônus</h2>
          <ul>
            <li class="list">Experiência com produto, UI ou UX.</li>
            <li class="list">Em produto, tem muito valor saber analisar em alto-nível (visão macro) das demandas dos clientes e essa relação com prioridades e urgências da empresa.</li>
            <li class="list">Já criou algum projeto pessoal ou produto ou empresa.</li>
            <li class="list">Possui curiosidade, vontade de aprender e de superar desafios.</li>
            <li class="list">Experiência com mercado financeiro, investimentos ou finanças.</li>
            <li class="list">Experiência com marketing ou publicidade</li>
            <li class="list">Em marketing, vendas, etc não precisa fazer nada, só se tiver interesse, e talvez isso seja bacana.</li>
          </ul>
        </div>
        <div class="column is-2"></div>
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
.my-img {
  max-height: 10rem;
  max-width: 10rem
}

.black-line {
  background-color: #444
}
</style>
