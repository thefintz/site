<template>
  <div>

    <div class="columns is-vcentered">

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/bolsa')">
          <header class="has-background-primary card-header is-flex is-justify-content-center">
            <div>
              <figure class="image is-64x64" style="height: 10rem; top:30%">
                <img width="20" src="@/assets/products/apis/acoes.png" alt="Placeholder image">
              </figure>
            </div>
          </header>
          <div class="card-content has-background-white">
            <span class="title is-4 has-text-black">
              APIs Bolsa B3
            </span>
            <p class="is-size-5"> 100% cobertura de mercado</p>
            <br>
            <p class="is-5">
              Serviço de dados do mercado financeiro para alimentar seu app, site ou plataforma.
            </p>
          </div>
        </div>
      </div>

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/fundos')">
          <header class="has-background-primary card-header is-flex is-justify-content-center">
            <div>
              <figure class="image is-64x64" style="height: 10rem; top:30%">
                <img width="20" src="@/assets/products/apis/fundos.png" alt="Placeholder image">
              </figure>
            </div>
          </header>
          <div class="card-content has-background-white">
            <span class="title is-4 has-text-black">
              API Fundos
            </span>
            <p class="is-size-5"> 20k+ fundos</p>
            <br>
            <p class="is-5">
              Serviço de dados do mercado financeiro para alimentar seu app, site ou plataforma.
            </p>
          </div>
        </div>
      </div>

      <div class="column pointer">
        <div class="card shadow" @click="$router.push('/titulos-publicos')">
          <header class="has-background-primary card-header is-flex is-justify-content-center">
            <div>
              <figure class="image is-64x64" style="height: 10rem; top:30%">
                <img width="20" src="@/assets/products/apis/tesouro.png" alt="Placeholder image">
              </figure>
            </div>
          </header>
          <div class="card-content has-background-white">
            <span class="title is-4 has-text-black">
              API Tesouro Direto
            </span>
            <p class="is-size-5"> Marcação a mercado e na curva</p>
            <br>
            <p class="is-5">
              Serviço de dados do mercado financeiro para alimentar seu app, site ou plataforma.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'APIsComp'
}
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
  </style>
