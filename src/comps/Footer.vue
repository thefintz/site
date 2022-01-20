<template>
<footer class="footer">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-32x32">
            <img src="@/assets/logo.png">
          </figure>
          <h4 class="title is-3">Fintz</h4>
        </div>
      </div>
      <div>
        <div class="level-right">
          <a class="level-item" @click="$router.push('PrivacyPolicy')">
            <span class="icon-text has-text-dark">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'copy']" />
              </span>
              <span>Política de Privacidade</span>
            </span>
          </a>
          <a class="level-item" @click="$router.push('SLA')">
          <span class="icon-text has-text-dark">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'scroll']" />
            </span>
            <span>Termos de Serviço</span>
          </span>
          </a>

        </div>
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
