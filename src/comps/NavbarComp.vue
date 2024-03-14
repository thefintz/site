<template>
<nav :style="[theme !== 'dark' ? '' : 'background-color: #1f2b3d']" class="navbar navbar-height" role="navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/')">
        <img
          :src="require(theme !== 'dark' ? '@/assets/logo-positivo.png' : '@/assets/logo-negativo.png')"
          class="max-h"
        >
      </a>
      <a class="navbar-burger" ref="burger" @click="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <a class="navbar-item mx-3" @click="$router.push('produtos')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']">
              Produtos
            </strong>
          </span>
        </a>

        <a class="navbar-item mx-3" href="https://docs.fintz.com.br">
          <span class="icon-text">
            <!-- <span class="icon"> -->
              <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
              <!-- </span> -->
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              Docs
            </strong>
          </span>
        </a>

        <a class="navbar-item mx-3" @click="$router.push('precos')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span> -->
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              Preços
            </strong>
          </span>
        </a>

        <a class="navbar-item mx-3" @click="$router.push('FAQ')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span> -->
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              FAQ
            </strong>
          </span>
        </a>

        <a class="navbar-item mx-3" @click="$router.push('contato')">
          <span class="icon-text">
            <!-- <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span> -->
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              Contato
            </strong>
          </span>
        </a>

        <a class="navbar-item mx-3" href="https://findicadores.com.br/#/WEGE3">
          <span class="icon-text">
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              Navegar em ações
            </strong>
          </span>
        </a>

        <!-- <a class="navbar-item mx-3" href="https://blog.fintz.com.br">
          <span class="icon-text">
            <strong
              :class="[theme !== 'dark' ? 'has-text-black' : 'has-text-white']"
            >
              Blog
            </strong>
          </span>
        </a> -->

        <!-- <a class="navbar-item" @click="$router.push('plataforma-fundos')">
          <span class="icon-text">
            <strong class="has-text-black">Dashboard Fundos</strong>
          </span>
        </a> -->

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
  },

  props: {
    theme: String
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
