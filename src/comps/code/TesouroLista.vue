<template>
  <CodeHighlight
    req="$ curl '/tesouro'"
    res='[{
  "nome": "Tesouro Prefixado 2025",
  "isin": "BRSTNCLTN7N2"
},
{
  "nome": "Tesouro Prefixado com Juros Semestrais 2033",
  "isin": "BRSTNCNTF212"
},
{
  "nome": "Tesouro Selic 2027",
  "isin": "BRSTNCLF1RG5"
},
{
  "nome": "Tesouro IPCA+ 2026",
  "isin": "BRSTNCNTB4W2"
},
{
  "nome": "Tesouro IPCA+ com Juros Semestrais 2032",
  "isin": "BRSTNCNTB674"
}...]'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'TesouroLista',

  components: {
    CodeHighlight
  }
}
</script>
