<template>
<nav class="navbar navbar-height" role="navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/plataformas')">
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
        <a class="navbar-item" @click="$router.push('produtos-plataformas')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong>Plataformas</strong>
          </span>
        </a>

        <a class="navbar-item" @click="$router.push('preco-ferramentas')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong>Preços</strong>
          </span>
        </a>

        <a class="navbar-item" @click="$router.push('contato')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span> -->
            <strong>Contato</strong>
          </span>
        </a>

        <a class="navbar-item" @click="$router.push('/')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span> -->
            <strong>APIs</strong>
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
