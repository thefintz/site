<template>
  <CodeHighlight
    req="$ curl '/b3/infosgerais/WEGE3'"
    res='{
  "b3": [ "WEGE3" ],
  "setor": "Máquinas e Equipamentos",
  "subsetor": "Motores, Compressores e Outros",
  "website": "https://www.weg.net/institutional/BR/pt/",
  "ceo": "Harry Schmelzer Jr."
  "valor de mercado": 126633000000,
  "funcionarios": 31800,
  "atividade": "Engenharia industrial",
  "genero": "Sociedade Anônima",
  "fundacao": "1961-09-16",
  "descricao": "A empresa é uma das maiores fabricantes...",
  "bolsa": "B3",
  "nome": "WEG",
  "razão social": "WEG S.A.",
  "Nasdaq": [ "WEGZY"],
  "sedePais": "Brasil"
  "sedeCidade": "Jaraquá do Sul",
  "tags": [
    "motores elétricos",
    "geradores",
    "transformadores",
    "disjuntores",
    "acionamento de motores",
    "controle e automação industrial",
    "componentes mecânicos",
    "equipamentos de energia",
    "tintas e vernizes",
  "similares": [ "SHUL4"],
  "status": "ativa"
}'
  />
</template>

<script>
import CodeHighlight from '@/comps/CodeHighlight'

export default {
  name: 'BolsaInfosGerais',

  components: {
    CodeHighlight
  }
}
</script>
