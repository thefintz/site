<template>
  <NavbarComp />
  <div>
    <section class="section is-medium" id="section1">
      <div class="container content">
        <div class="columns is-centered">
          <div class="column is-three-quarters">
            <h1 class="title">Termos de Serviço do Fintz Bot</h1>
            <h4 class="subtitle">Última atualização: 11/03/2025</h4>

            <h2 class="title is-4">Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o Fintz Bot via WhatsApp, você concorda com estes Termos de Serviço.
              Caso não concorde com qualquer parte destes termos, não utilize o serviço.
            </p>

            <h2 class="title is-4">Descrição do Serviço</h2>
            <p>
              O Fintz Bot é um assistente financeiro que permite o registro, consulta e gerenciamento das suas compras por meio do WhatsApp.
              O serviço é prestado de forma automatizada e não substitui o aconselhamento financeiro profissional.
            </p>

            <h2 class="title is-4">Obrigações e Responsabilidades do Usuário</h2>
            <p>
              Ao utilizar o Fintz Bot, você se compromete a:
            </p>
            <ul class="list">
              <li>Fornecer informações precisas, verdadeiras e atualizadas;</li>
              <li>Utilizar o serviço de forma ética, legal e em conformidade com a legislação vigente;</li>
              <li>Proteger a confidencialidade de suas credenciais e dados pessoais;</li>
              <li>Não empregar o serviço para fins ilícitos ou que possam prejudicar terceiros.</li>
            </ul>

            <h2 class="title is-4">Propriedade Intelectual</h2>
            <p>
              Todos os conteúdos, tecnologias e marcas relacionados ao Fintz Bot são de propriedade exclusiva da Fintz.
              Nenhum direito de propriedade intelectual é transferido ao usuário.
            </p>

            <h2 class="title is-4">Limitações de Responsabilidade</h2>
            <p>
              O Fintz Bot é fornecido “no estado em que se encontra”. A Fintz não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do serviço, salvo quando expressamente previsto por lei.
            </p>

            <h2 class="title is-4">Modificações e Atualizações</h2>
            <p>
              A Fintz reserva-se o direito de modificar estes Termos de Serviço a qualquer momento.
              Alterações significativas serão notificadas por meio do próprio Fintz Bot ou publicadas em nosso site.
              O uso contínuo do serviço implica a aceitação das alterações.
            </p>

            <h2 class="title is-4">Uso de Inteligência Artificial</h2>
            <p>
              Você está ciente de que utilizamos inteligência artificial (IA) para auxiliar no funcionamento do Fintz Bot, incluindo o processamento e análise das informações que você envia, como os dados relativos às suas compras.
            </p>
            <p>
              Dessa forma, você concorda que os dados pessoais trafegados pelo Fintz Bot poderão ser tratados por IA para a prestação dos serviços, sendo sua responsabilidade garantir todas as autorizações necessárias para esse uso.
            </p>
            <p>
              Você reconhece que a IA pode apresentar limitações e imprecisões, não sendo possível garantir a exatidão ou a completude dos resultados obtidos.
            </p>
            <p>
              É de sua responsabilidade verificar se o uso do Fintz Bot, incluindo o uso de IA, está em conformidade com as normas e regulamentos aplicáveis na sua localidade.
              Caso identifique qualquer impedimento, você deverá abster-se de utilizar o serviço ou interromper imediatamente o seu uso, sem que isso gere qualquer responsabilidade para a Fintz.
            </p>

            <h2 class="title is-4">Rescisão</h2>
            <p>
              Em caso de violação destes Termos ou uso inadequado do serviço, a Fintz poderá suspender ou encerrar seu acesso ao Fintz Bot, sem aviso prévio.
              Você também pode optar por interromper o uso do serviço a qualquer momento.
            </p>
            <h2 class="title is-4">Contato</h2>
            <p>
              Para dúvidas ou esclarecimentos, entre em contato pelo e-mail:
              <a href="mailto:victor@fintz.com.br">victor@fintz.com.br</a>.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'
import FooterComp from '@/comps/FooterComp'

export default {
  name: 'TermsService',
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>

<style scoped>
.content {
  line-height: 1.7;
  margin-bottom: 2rem;
}
.content p {
  margin-bottom: 1.2rem;
}
.title.is-4 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.list {
  margin-left: 2rem;
  list-style-type: disc;
  list-style-position: outside;
  margin-bottom: 1rem;
}
.has-text-centered {
  text-align: center;
  font-size: 0.9rem;
  color: #555;
}
</style>
