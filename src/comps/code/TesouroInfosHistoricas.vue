<template>
  <CodeHighlight
    req="$ curl '/tesouro/BRSTNCNTB3C6/historico?inicio=2022-09-01&fim=2022-09-05'"
    res='{
  "isin": "BRSTNCNTB3C6",
  "nome": "Tesouro IPCA+ com Juros Semestrais 2040",
  "vencimento": "2040-08-15",
  "jurosSemestrais": true,
  "indiceNome": "IPCA",
  "historico": [
    {
      "data": "01-09-2022",
      "jurosCompra": "5,91%",
      "jurosVenda": "6,03%",
      "precoCompra": 4022.02,
      "precoVenda": 3970.63,
      "PuBase": 3970.63
    },
    {
      "data": "02-09-2022",
      "jurosCompra": "5,78%",
      "jurosVenda": "5,90%",
      "precoCompra": 4077.79,
      "precoVenda": 4026.30,
      "PuBase": 4026.30
    },
    {
      "data": "05-09-2022",
      "jurosCompra": "5,78%",
      "jurosVenda": "5,90%",
      "precoCompra": 4078.26,
      "precoVenda": 4025.93,
      "PuBase": 4025.93
    }
  ]
}'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'TesouroInfosDiarias',

  components: {
    CodeHighlight
  }
}
</script>
