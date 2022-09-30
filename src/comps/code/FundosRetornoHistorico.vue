<template>
  <CodeHighlight
    req="$ curl '/funds/26344729000179/variation/monthly?months=12'"
    res='[
  { "date": "2022-09", "value": 0.011191219028859 },
  { "date": "2022-08", "value": 0.013357656067729762 },
  { "date": "2022-07", "value": 0.009270801508422855 },
  { "date": "2022-06", "value": 0.00992749266198567 },
  { "date": "2022-05", "value": 0.011273392999448628 },
  { "date": "2022-04", "value": 0.005394514493695546 },
  { "date": "2022-03", "value": 0.01165155298069287 },
  { "date": "2022-02", "value": 0.008273180658336043 },
  { "date": "2022-01", "value": 0.007709947789548144 },
  { "date": "2021-12", "value": 0.00465640148928137 },
  { "date": "2021-11", "value": 0.006922093257815787 },
  { "date": "2021-10", "value": 0.002588219613282483 }
]'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'FundosRetornoHistorico',

  components: {
    CodeHighlight
  }
}
</script>
