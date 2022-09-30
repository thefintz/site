<template>
  <CodeHighlight
    req="$ curl '/funds/26344729000179/info/daily'"
    res='{
  "id": 64154030,
  "tp_fundo": "FI",
  "cnpj_fundo": "26.344.729/0001-79",
  "dt_comptc": "2022-09-28",
  "vl_total": 113338552.93,
  "vl_quota": 1.2924128,
  "vl_patrim_liq": 112971526.59,
  "captc_dia": 35100,
  "resg_dia": 209571.88,
  "nr_cotst": 2489
}'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'FundosInfosDiarias',

  components: {
    CodeHighlight
  }
}
</script>
