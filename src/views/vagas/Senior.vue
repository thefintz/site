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
          <span class="title is-4 has-text-black"> Desenvolvedor Sênior (remoto) </span>
          <h2 class="title is-5 has-text-black mt-5">TL;DR</h2>
          <ul>
            <li class="list">Vaga Dev Pleno/Senior em startup early-stage (fintech SaaS B2B e B2C).</li>
            <li class="list">Somos API do mercado financeiro, investida por 2 fundos, e clientes como o Sicredi.</li>
            <li class="list">Tech stack: Python, Scrapy, Dagster, Postgres, AWS (Lambda + RDS), Github Actions.</li>
            <li class="list">Essa vaga é p/ quem quer ter participação (equity) no negócio e nos lucros.</li>
            <li class="list">Muita autonomia, desafios, responsabilidades.</li>
            <li class="list">Compensação: salário (negociável) + equity + variável </li>
            <li class="list">Bônus: interesse/experiência em mercado financeiro, produto, UI/UX, marketing ou startups.</li>
          </ul>
          <hr>
          <h2 class="title is-5 has-text-black mt-5">Mais detalhes</h2>
          <p>
            Buscamos Desenvolvedor de Software Pleno ou Sênior, com interesse em trabalhar com as mais novas tecnologias, grandes desafios, muita autonomia e muitas responsabilidades, com mentalidade de dono. Interesse, conhecimento e/ou experiência com mercado financeiro, marketing, UI/UX ou startups são muito bem vindos.
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
            <li class="list">Salário base (negociável)</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Tecnologias que trabalhamos</h2>
          <ul>
            <li class="list">Python (+ Pandas)</li>
            <li class="list">Banco Postgres (SQL)</li>
            <li class="list">AWS (Lambda + RDS)</li>
            <li class="list">Github e Github Actions (CI/CD)</li>
            <li class="list">Scrapy (extração de dados, scrappers)</li>
            <li class="list">Dagster (pipeline de processamento e integrações)</li>
            <li class="list">Front com Vue ou React, e tailwind</li>
            <li class="list">Nos comunicamos por Discord</li>
            <li class="list">Seguimos a metodologia Kanban usando Trello</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">No que vai trabalhar</h2>
          <ul>
            <li class="list">Desenvolver e manter a API, testes, reviews, bugs, versionamento…</li>
            <li class="list">Realizar integrações com novas fontes de dados</li>
            <li class="list">Padronização e estruturação de dados inconsistentes e complexos</li>
            <li class="list">Automatização de extrações de dados</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Requisitos</h2>
          <ul>
            <li class="list">Conhecimento Python + Pandas: extremamente importante.</li>
            <li class="list">Bancos de dados SQL (usamos PostgreSQL).</li>
            <li class="list">Experiência prévia em microserviços, AWS, ajuda bastante.</li>
            <li class="list">Básico de inglês, pois muitas tecnologias que usamos são em inglês.</li>
            <li class="list">Formação em cursos de tecnologia não é obrigatório, mas ajuda.</li>
          </ul>

          <h2 class="title is-5 has-text-black mt-5">Bônus</h2>
          <ul>
            <li class="list">Docker</li>
            <li class="list">AWS Lambdas</li>
            <li class="list">Experiência na criação de APIs usando HTTP</li>
            <li class="list">Experiência com Produto, UI ou UX.</li>
            <li class="list">Já criou algum projeto pessoal, produto ou empresa.</li>
            <li class="list">Experiência com mercado financeiro, investimentos ou finanças.</li>
            <li class="list">Interesse/conhecimento amplos (ex: marketing, videos, cs, vendas).</li>
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
