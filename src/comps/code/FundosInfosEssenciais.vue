<template>
  <CodeHighlight
    req="$ curl '/funds/26344729000179/info'"
    res='{
  "id": 33092,
  "tp_fundo": "FI",
  "cnpj_fundo": "26.344.729/0001-79",
  "denom_social": "SICREDI SCHRODERS FUNDO DE INVESTIMENTO MULTIMERCADO MULTI CLASSES CRÉDITO PRIVADO LONGO PRAZO",
  "dt_reg": "2018-03-15",
  "dt_const": "2016-03-03",
  "cd_cvm": "296465",
  "dt_cancel": null,
  "sit": "EM FUNCIONAMENTO NORMAL",
  "dt_ini_sit": "2018-03-19",
  "dt_ini_ativ": "2018-03-19",
  "dt_ini_exerc": "2022-01-01",
  "dt_fim_exerc": "2022-12-31",
  "classe": "Fundo Multimercado",
  "dt_ini_classe": "2016-03-03",
  "rentab_fundo": "DI de um dia",
  "condom": "Aberto",
  "fundo_cotas": "N",
  "fundo_exclusivo": "N",
  "trib_lprazo": "S",
  "publico_alvo": "Público Geral",
  "entid_invest": null,
  "taxa_perfm": 20,
  "inf_taxa_perfm": "0",
  "taxa_adm": 0.7,
  "inf_taxa_adm": null,
  "vl_patrim_liq": 113120678.1,
  "dt_patrim_liq": "2022-09-27",
  "diretor": "JÚLIO PEREIRA CARDOZO JÚNIOR",
  "cnpj_admin": "01.181.521/0001-55",
  "admin": "BANCO COOPERATIVO SICREDI S.A.",
  "pf_pj_gestor": "PJ",
  "cpf_cnpj_gestor": "92.886.662/0001-29",
  "gestor": "SCHRODER INVESTMENT MANAGEMENT BRASIL LTDA.",
  "cnpj_auditor": "61.562.112/0001-20",
  "auditor": "PRICEWATERHOUSECOOPERS AUDITORES INDEPENDENTES LTDA.",
  "cnpj_custodiante": "01.181.521/0001-55",
  "custodiante": "BANCO COOPERATIVO SICREDI S.A.",
  "cnpj_controlador": "01.181.521/0001-55",
  "controlador": "BANCO COOPERATIVO SICREDI S.A."
}'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'FundosInfosEssenciais',

  components: {
    CodeHighlight
  }
}
</script>
