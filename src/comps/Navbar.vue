<template>
<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="@/assets/logo.png">
        <strong>FINTZ</strong>
      </a>
      <a class="navbar-burger" ref="burger" @click="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <a class="navbar-item" href="https://www.linkedin.com/company/acartera">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span>Linkedin</span>
          </span>
        </a>

        <a class="navbar-item" href="https://instagram.com/cartera.com.br">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span>Instagram</span>
          </span>
        </a>

        <a class="navbar-item" href="https://github.com/monneda">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
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
