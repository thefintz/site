<template>
  <CodeHighlight
    req="$ curl '/b3/indicadores/WEGE3'"
    res='{
  "data": "2022-09-29T00:00:00Z",
  "ticker": "WEGE3",
  "empresa": "WEG SA ON N1",
  "setor": "Maquinas e Equipamentos",
  "subsetor": "Motores, Compressores e Outros",
  "tipoDoAtivo": "ON N1",
  "dataUltimaCotacao": "2022-09-28T00:00:00Z",
  "valorDaFirma": 127044000000,
  "valorDeMercado": 127263000000,
  "ultimoBalancoProcessado": "2022-06-30T00:00:00Z",
  "dy": "0.016",
  "vpa": "3.2",
  "lpa": "0.84",
  "roic": "0.228",
  "roe": "0.264",
  "liquidezCorrente": "1.69",
  "margemEbit": "0.175",
  "margemBruta": "0.279",
  "margemLiquida": "0.135",
  "evEbitda": "24.34",
  "receitaLiquida12Meses": 26752100000,
  "pl": "35.91",
  "pvp": "9.49",
  "pebit": "27.19"
}'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'BolsaIndicadores',

  components: {
    CodeHighlight
  }
}
</script>
