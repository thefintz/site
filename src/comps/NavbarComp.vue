<template>
<nav class="navbar navbar-height" role="navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/')">
        <img src="@/assets/logo-positivo.png" class="max-h">
      </a>
      <a class="navbar-burger" ref="burger" @click="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <a class="navbar-item" @click="$router.push('produtos')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong>Produtos</strong>
          </span>
        </a>

        <a class="navbar-item" @click="$router.push('precos')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong>Preços</strong>
          </span>
        </a>

        <a class="navbar-item" href="https://docs.fintz.com.br">
          <span class="icon-text">
            <!-- <span class="icon"> -->
              <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
            <!-- </span> -->
            <strong>Documentação da API</strong>
          </span>
        </a>

        <a class="navbar-item" @click="$router.push('contato')">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span>
            <strong>Contato</strong>
          </span>
        </a>
      </div>
    </div>

  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarComp',

  methods: {
    burger () {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    }
  }
}
</script>

<style scoped>
.navbar-height {
  height: 4rem
}
.max-h {
  max-height: 2.5rem
}
</style>
