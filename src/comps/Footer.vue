<template>
<footer class="footer">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-48x48">
            <img src="@/assets/logo.png">
          </figure>
          <h4 class="title is-4">FINTZ</h4>
        </div>
      </div>

      <div class="level-right">
        <a class="level-item" href="https://www.linkedin.com/company/acartera">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span>Linkedin</span>
          </span>
        </a>

        <a class="level-item" href="https://instagram.com/cartera.com.br">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span>Instagram</span>
          </span>
        </a>

        <a class="level-item" href="https://github.com/monneda">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span>GitHub</span>
          </span>
        </a>
      </div>
    </div>

    <div class="has-text-centered">
      <span>
        Feito por <strong>Cartera</strong>
      </span>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
