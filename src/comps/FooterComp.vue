<template>
<footer class="footer has-background-primary">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image">
            <img src="@/assets/logo-negativo-fundoazul.png" class="max-h">
          </figure>
        </div>
      </div>
      <div>
        <div class="level-right">
          <a class="level-item" @click="$router.push('PrivacyPolicy')">
            <span class="icon-text has-text-light">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'copy']" />
              </span>
              <span>Política de Privacidade</span>
            </span>
          </a>
          <a class="level-item" @click="$router.push('SLA')">
          <span class="icon-text has-text-light">
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
  name: 'FooterComp'
}
</script>

<style scoped>
.max-h {
  max-height: 6rem;
  max-width: 10rem;
}
</style>
