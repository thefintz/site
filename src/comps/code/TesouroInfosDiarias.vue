<template>
  <CodeHighlight
    req="$ curl '/tesouro/BRSTNCNTB3C6'"
    res='{
  "isin": "BRSTNCNTB3C6",
  "nome": "Tesouro IPCA+ com Juros Semestrais 2040",
  "descricao": "Título pós-fixado, uma vez que parte do seu rendimento acompanha a variação da taxa de inflação (IPCA).",
  "vencimento": "2040-08-15",
  "juros_semestrais": true,
  "publico_alvo": "Indicado para aqueles que querem realizar investimentos de longo prazo.",
  "estrategia_de_investimento": "Aumenta o poder de compra do seu dinheiro, pois seu rendimento é composto por uma taxa de juros + a variação da inflação (IPCA). É mais interessante para quem precisa do seu rendimento para complementar sua renda, pois paga juros a cada semestre (cupons de juros). Em caso de resgate antecipado, o Tesouro Nacional garante sua recompra pelo seu valor de mercado.",
  "indice_nome": "IPCA",
  "indice_codigo": 22,
  "juros_compra": 5.78,
  "juros_venda": 5.9,
  "preco_compra": 4081.24,
  "preco_venda": 4029.53,
  "min_valor_compra": 40.81,
  "min_valor_venda": 40.3,
  "min_qtd_venda": 0.01
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
