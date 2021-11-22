<template>
<footer class="footer">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-48x48">
            <img src="@/assets/logo.png">
          </figure>
          <h4 class="title is-4">Fintz</h4>
        </div>
      </div>
    </div>
    <div>
      <div class="level-right">
        <a class="level-item" @click="$router.push('PrivacyPolicy')">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'copy']" />
            </span>
            <span>Política de Privacidade</span>
          </span>
        </a>

        <a class="level-item">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'scroll']" />
            </span>
            <span>Termos de Serviço</span>
          </span>
        </a>

      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
