<template>
<NavbarComp />
<div>
  <section class="section is-medium" id="section1">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <h3 class="title"> Fintz API Acordo de nível de serviço </h3>
          <h4 class="subtitle"> Última atualização: 22 de novembro de 2021 </h4>
          <span>
            Estes Termos de Nível de Serviço Fintz ("<strong>SLA</strong>") regem o uso da API Fintz de acordo com os
            termos dos Termos e Condições Fintz (o "<strong>Contrato</strong>") entre Cartera Software <strong>("Fintz",
            "nós" ou "nós" )</strong> e qualquer usuário da API Fintz <strong>(“você”, “seu” ou “Cliente Fintz”)</strong>.
            Na medida em que você tem mais de uma conta de cliente, este SLA
            se aplica a cada conta de cliente Fintz individualmente. Exceto conforme estabelecido de outra forma neste
            SLA, este SLA está sujeito ao Contrato e os termos em letras maiúsculas terão o significado especificado no
            Contrato. Fintz reserva-se o direito de alterar os termos deste SLA de acordo com o Contrato.
          </span>
          <br>
          <br>
          <h5 class="title is-size-5"> Definições </h5>
          <ol class="list" type="1">
            <li>
              <strong>"Porcentagem de tempo de atividade mensal"</strong> significa a diferença entre 100% e a
              porcentagem de tempo indisponível para o mês do calendário aplicável, conforme representado abaixo.
              <br>
              <math>
                Porcentagem de tempo de atividade mensal = 100% - [Tempo indisponível] / [Número de minutos em um mês]
              </math>
            </li>
            <li>
              <strong>“Crédito de serviço”</strong> significa um crédito em reais que a Fintz pode, de acordo com os
              termos deste SLA, aplicar à fatura do Cliente da Fintz para o próximo mês, calculado como (a) dez por
              cento (10%) das taxas pagas por você pelos serviços prestados a você pela Fintz durante o mês civil em que
              o Tempo Indisponível (conforme definido abaixo) ocorreu, ou (b) para qualquer Cliente Fintz que usou os
              Serviços gratuitamente, uma porcentagem das taxas que teriam sido cobradas pela Fintz para os Serviços
              (com base no uso dos Serviços pelo Cliente Fintz) para o mês calendário em que o Tempo Indisponível
              (conforme definido abaixo) ocorreu.
            </li>
            <li>
              <strong>“Tempo Indisponível”</strong> significa o número de minutos que o Fintz API não está disponível para uso, medido em incrementos contínuos de 5 minutos. O Tempo Indisponível não inclui qualquer indisponibilidade resultante de qualquer Exclusão (conforme definido abaixo) ou qualquer incremento de tempo inferior a 5 minutos durante o qual a API Fintz não está disponível.
            </li>
          </ol>
          <h5 class="title is-size-5"> Compromisso de Serviços </h5>
          <span>
            A Fintz disponibilizará a API Fintz 99,95% do tempo a cada mês. Se a porcentagem de tempo de atividade
            mensal da Fintz estiver abaixo de 99,95% em um determinado mês, então o cliente Fintz será elegível para
            receber um crédito de serviço conforme descrito na Seção 3 abaixo. A disponibilidade da API Fintz é medida
            pelo desempenho de terceiros e pelos serviços de monitoramento contratados pela Fintz (o “Serviço de
            Monitoramento”). Fintz pode ajustar a medida de disponibilidade pelo Serviço de Monitoramento para
            contabilizar quaisquer Exclusões aplicáveis ao mês calendário relevante. A Fintz também pode compartilhar
            interrupções planejadas e relatórios de manutenção de empresas parceiras.
          </span>
          <br>
          <br>
          <h5 class="title is-size-5"> Exclusões </h5>
          <span>
            Não obstante qualquer coisa em contrário, nenhum Tempo Indisponível será considerado como tendo ocorrido
            com relação a qualquer indisponibilidade da API Fintz ou quaisquer outros problemas de desempenho da API
            Fintz que (a) sejam causados por fatores fora do controle razoável da Fintz, incluindo, sem limitação,
            qualquer evento de força maior, problemas ou questões relacionadas ao provedor de dados da Fintz, ou acesso
            à Internet ou problemas relacionados ocorrendo além do ponto na rede onde Fintz mantém acesso e controle
            sobre a API Fintz; (b) resultar de quaisquer ações ou omissões suas ou de terceiros (que não sejam os
            agentes e subcontratados da Fintz); (c) resultar de qualquer Aplicativo (s) do Cliente, equipamento,
            software ou outra tecnologia e/ou equipamento, software ou outra tecnologia de terceiros (exceto para
            equipamentos sob o controle direto da Fintz); ou (d) ocorre durante a manutenção programada da Fintz para a
            qual a Fintz forneceu pelo menos vinte e quatro (24) horas de aviso prévio; ou (e) problemas ou questões
            relacionadas a alfa, beta ou de outra forma, recursos ou produtos do Fintz geralmente não disponíveis
            (coletivamente, as <strong>“Exclusões”</strong>).
          </span>
          <br>
          <br>
          <h5 class="title is-size-5"> Responsabilidade total do SLA </h5>
          <span>
            Este SLA declara a responsabilidade única e total da Fintz para com você e seu único recurso em relação à
            falha da Fintz em cumprir a Porcentagem de Tempo de Atividade Mensal.
          </span>
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
  name: 'TermosDeServico',

  components: {
    FooterComp,
    NavbarComp
  }
}
</script>

<style scoped>
li {
  margin-bottom: 1rem;
}
.list {
  margin-left: 3rem;
  list-style-position: inside;
}
</style>
