export default [
  {
    question: '<span class="has-text-weight-bold"> 1. Por que a Fintz é a melhor opção?</span>',
    answer: 'Diferente de nossos concorrentes, sites aleatório e/ou "webscraping" que tem por aí, nós priorizamos a precisão e a confiabilidade dos nossos dados. Integramos com fontes oficiais e nossos dados passam por rigorosos processos de verificação antes de serem disponibilizados aos nossos clientes. \n\n Além disso, a Fintz possui controle total sobre o pipeline de processamento dos dados, como balanços e resultados, então oferecemos a maior qualidade e agilidade para, por exemplo, adicionar novos dados (ex: indicadores).\n\n Cuidado ao utilizar serviços e APIs que são apenas uma fachada (inclusive não oficial e proibida) do Yahoo Finance, Fundamentus ou similar, pois além de poderem parar de funcionar/atualizar a qualquer momento, geralmente contém erros grotescos em suas informações'
  },
  {
    question: '2. O que é a Fintz?',
    answer: 'A Fintz é uma empresa que fornece dados do mercado financeiro brasileiro para clientes integrarem em seus sites, plataformas, planilhas, análises, etc. \nResumidamente, temos uma base de dados do mercado financeiro brasileiro, cuidadosamente elaborada e atualizada. Nossos clientes podem acessar e utilizar esses dados por um de nossos produtos: serviço de dados (API), <a href="https://findicadores.com.br/#/WEGE3"> navegador de ações </a>, plugin Excel/GoogleSheets. \n Se ficou interessado, entre em contato: contato@fintz.com.br'
  },
  {
    question: '3. Qual a missão da Fintz?',
    answer: 'Nossa missão é facilitar o acesso e integração de dados confiáveis do mercado financeiro brasileiro. São dados públicos, mas nada acessíveis, e estamos aqui para mudar isso. \nQueremos que o investidor brasileiro tenha acesso a mesma qualidade de informação que grandes gestores, seja para uso próprio ou para auxiliar na criação da sua empresa.\nDaí vem nossos 2 pilares: dados confiáveis e facilidade de utilizá-los.'
  },
  {
    question: '4. Qual problema a Fintz resolve?',
    answer: 'Facilidade de acessar e/ou integrar dados confiáveis do mercado financeiro. \nHoje o investidor brasileiro entra em vários sites de dados fundamentalistas e histórico de indicadores, a grande maioria com informações erradas. Não só desatualizadas, totalmente erradas mesmo. \nO pior é que ele nem fica sabendo, pois como iria confirmar? Acessar esses dados direto da B3 ou CVM é extremamente trabalhoso. \nSe até acessar essa informação é difícil, imagina pro empreendedor começar um negócio ou integrar sua plataforma com dados errados?'
  },
  {
    question: '5. Quais dados a Fintz oferece?',
    answer: 'Oferecemos dados para diversas classes de ativo, com foco em ações brasileiras.\n- Bolsa B3: Ações, FIIs, ETFs e BDRs, com históricos de cotação, de indicadores, proventos, demonstrações financeiras das empresas, e muito mais.\n- Índices e taxas: histórico de pontos e retornos de dezenas de índices e taxas.\n- Fundos: histórico de cotação, captação, resgate, patrimônio líquido, cotistas, etc.\n- Tesouro Direto: histórico de preços e taxas de compra e venda.\n+10 anos de histórico para todas os ativos.'
  },
  {
    question: '6. Como posso acessar os dados da Fintz?',
    answer: 'Os dados podem ser acessados através da nossa API (<a href="https://docs.fintz.com.br" target="_blank">ver documentação</a>) ou, em breve, utilizando nossos plugins para Excel e Google Sheets.'
  },
  {
    question: '7. Quanto custa para acessar os dados da Fintz?',
    answer: 'Consulte os planos e preços atualizados <a href="https://fintz.com.br/#/precos" target="_blank">neste link</a>.'
  },
  {
    question: '8. Os dados da Fintz são atualizados com que frequência?',
    answer: 'Todos os dados são atualizados diariamente, com dados de fim do dia (EOD - End of Day). Até mesmo para as demontrações financeiras que são trimestrais, pois a empresa pode enviar uma nova versão ou uma errata para a CVM a qualquer momento, então sempre atualizamos, inclusive os indicadores que são consequência destas atualizações. Temos um algoritmo que constrói uma árvore de dependências, de maneira que qualquer novo dados  gera uma atualização dos seus nodos conectados (outros dados que dependem daquela nova informação que chegou).'
  },
  {
    question: '9. Como integro a API da Fintz em meu sistema ou aplicativo?',
    answer: 'Fornecemos <a href="https://docs.fintz.com.br" target="_blank"> documentação</a> detalhada sobre como integrar nossa API. Se está construindo um projeto comercial e precisar de assistência técnica, nossa equipe está à disposição para ajudar, basta <a href="https://fintz.com.br/#/contato" target="_blank"> entrar em contato</a>.'
  },
  {
    question: '10. O que é o plugin Excel/Sheets?',
    answer: 'É uma maneira de você importar os dados da base da Fintz direto na sua planilha, como se fosse uma fórmula qualquer do seu Excel/Sheets. Caso tenha interesse, entre em contato e vamos explicar melhor suas funcionalidades.'
  },
  {
    question: '11. Plano gratuito? Posso testar a Fintz antes de comprar?',
    answer: 'Sim, você pode utilizar a chave: chave-de-teste-api-fintz. Essa chave é extremamente limitada e lenta, servindo apenas para teste inicial. Hoje não temos como bancar uma chave individual gratuita para todos. Considere assinar um plano pago para ajudar todos os brasileiros a terem fácil acesso a dados confiáveis do mercado financeiro.'
  },
  {
    question: '12. Quais dados a Fintz ainda não oferece?',
    answer: 'Ainda não oferecemos:\n- Ativos de bolsas que não sejam a B3.\n- Criptomoedas.\n- Crédito Privado (debêntures, CRIs, CRAs).\n- Opções.\n- Futuros.\n- Commodities.\nDito isso, estamos sempre aprimorando nossa base de dados. Precisa de algum dado que ainda não fornecemos? Envie um email e vamos atrás: suporte@fintz.com.br'
  },
  {
    question: '13. Como posso entrar em contato com o suporte da Fintz?',
    answer: 'Nossa equipe de suporte está à disposição via e-mail: suporte@fintz.com.br. Vamos responder qualquer dúvida, seja técnica ou não, em no máximo 24h.'
  },
  {
    question: '14. Roadmap de produtos?',
    answer: 'Por enquanto não temos um roadmap público.'
  }
  // ... (insira os outros itens do FAQ aqui no mesmo formato)
]
