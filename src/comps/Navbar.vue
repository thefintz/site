<template>
<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push('/')">
        <img src="@/assets/logo.png">
        <strong class="title is-5">Fintz</strong>
      </a>
      <a class="navbar-burger" ref="burger" @click="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <!-- <a class="navbar-item" href="">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'book']" />
            </span>
            <span>Documentação</span>
          </span>
        </a> -->

        <a class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span>
            <span>(41) 9 9187-5540</span>
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
