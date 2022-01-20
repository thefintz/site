<template>
<nav class="navbar navbar-height" role="navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/')">
        <img src="@/assets/logo.png" class="max-h" height="36" width="36">
        <strong class="title is-3">Fintz</strong>
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
  name: 'Navbar',

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
  max-height: 100%
}
</style>
