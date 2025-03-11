<template>
  <NavbarComp />
  <div>
    <section class="section is-medium" id="section1">
      <div class="container content">
        <div class="columns is-centered">
          <div class="column is-three-quarters">

            <!-- Título principal e data de atualização -->
            <h1 class="title">Política de Privacidade do Fintz Bot</h1>
            <h4 class="subtitle">Última atualização: 11/03/2025</h4>

            <!-- 1. Introdução -->
            <h2 class="title is-4">Introdução</h2>
            <p>
              Esta Política de Privacidade explica como Fintz Bot (“nós”, “nosso”) coleta,
              utiliza, armazena e protege as informações dos usuários (“você”) por meio do
              nosso bot do WhatsApp, que atua como assistente financeiro para registro,
              listagem e exclusão de compras. Ao utilizar o bot, você concorda com as
              práticas descritas nesta política.
            </p>

            <!-- 2. Informações Coletadas -->
            <h2 class="title is-4">Informações Coletadas</h2>
            <p>
              Para prestar os serviços de assistente financeiro, podemos coletar e
              processar os seguintes dados:
            </p>
            <ul class="list">
              <li><strong>Dados de Contato:</strong> Número de telefone e nome utilizado no WhatsApp.</li>
              <li><strong>Dados de Transação:</strong> Informações relativas às compras registradas,
                tais como descrição, valor, data e categoria.</li>
              <li><strong>Dados de Uso:</strong> Informações sobre a interação com o bot para
                melhorar a experiência do usuário.</li>
            </ul>

            <!-- 3. Finalidade do Tratamento dos Dados -->
            <h2 class="title is-4">Finalidade do Tratamento dos Dados</h2>
            <p>Utilizamos os seus dados para:</p>
            <ul class="list">
              <li>Registrar as compras informadas pelos usuários;</li>
              <li>Listar e organizar os registros de compras;</li>
              <li>Permitir a exclusão de registros mediante solicitação;</li>
              <li>Melhorar e personalizar o serviço prestado pelo bot;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <!-- 4. Compartilhamento de Dados -->
            <h2 class="title is-4">Compartilhamento de Dados</h2>
            <p>
              Seus dados são utilizados exclusivamente para as finalidades descritas e não
              serão compartilhados com terceiros, exceto:
            </p>
            <ul class="list">
              <li>Quando exigido por lei ou por autoridade competente;</li>
              <li>Para proteger nossos direitos, a segurança dos usuários ou em situações de emergência.</li>
            </ul>

            <!-- 5. Segurança dos Dados -->
            <h2 class="title is-4">Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações
              contra acesso não autorizado, perda, alteração ou divulgação. Contudo, nenhum método
              de transmissão ou armazenamento eletrônico é 100% seguro, e não podemos garantir
              segurança absoluta.
            </p>

            <!-- 6. Armazenamento e Retenção dos Dados -->
            <h2 class="title is-4">Armazenamento e Retenção dos Dados</h2>
            <p>
              Os dados coletados serão armazenados enquanto forem necessários para a prestação
              dos serviços oferecidos. Você pode solicitar a exclusão completa de seus dados a
              qualquer momento, por meio dos comandos disponíveis no bot ou através do contato
              informado nesta política.
            </p>

            <!-- 7. Direitos dos Usuários -->
            <h2 class="title is-4">Direitos dos Usuários</h2>
            <p>Você tem o direito de:</p>
            <ul class="list">
              <li>Solicitar acesso às informações que mantemos sobre você;</li>
              <li>Solicitar a correção ou atualização dos seus dados;</li>
              <li>Solicitar a exclusão dos seus dados;</li>
              <li>Solicitar informações sobre como seus dados são utilizados.</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato através do
              <a href="mailto:victor@fintz.com.br">victor@fintz.com.br</a>.
            </p>

            <!-- 8. Alterações nesta Política -->
            <h2 class="title is-4">Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos os
              usuários sobre mudanças significativas através do próprio bot ou por outros meios
              apropriados. Recomendamos que você revise a política sempre que utilizar os nossos
              serviços.
            </p>

            <!-- 9. Contato -->
            <h2 class="title is-4">Contato</h2>
            <p>
              Se tiver dúvidas ou solicitações relacionadas à privacidade dos seus dados, entre em
              contato através de:
            </p>
            <p>
              E-mail: <a href="mailto:victor@fintz.com.br">victor@fintz.com.br</a>
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterComp />
</template>

<script>
import FooterComp from '@/comps/FooterComp'
import NavbarComp from '@/comps/NavbarComp'

export default {
  name: 'PrivacyPolicy',
  components: {
    FooterComp,
    NavbarComp
  }
}
</script>

<style scoped>
.content {
  line-height: 1.6; /* Ajuste de espaçamento entre linhas */
}
.content p {
  margin-bottom: 1rem; /* Espaço entre parágrafos */
}
.title.is-4 {
  margin-top: 2rem; /* Espaço extra antes dos títulos */
  margin-bottom: 1rem;
}
.list {
  margin-left: 2rem;
  list-style-type: disc;
  list-style-position: outside;
  margin-bottom: 1rem;
}
</style>
