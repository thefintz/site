<template>
<footer class="footer" :class="[bg === 'light' ? 'has-background-light' : 'has-background-primary']">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image">
            <img v-if="!bg" src="@/assets/logo-negativo-fundoazul.png" class="max-h">
            <img v-if="bg === 'light'" src="@/assets/logo-positivo.png" class="max-h">
          </figure>
        </div>
      </div>
      <div>
        <div class="level-right">
          <a class="level-item" @click="$router.push('PrivacyPolicy')">
            <span class="icon-text" :class="[bg === 'light' ? 'has-text-dark' : 'has-text-light']">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'copy']" />
              </span>
              <span>Política de Privacidade</span>
            </span>
          </a>
          <a class="level-item" @click="$router.push('SLA')">
          <span class="icon-text" :class="[bg === 'light' ? 'has-text-dark' : 'has-text-light']">
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
  name: 'FooterComp',

  props: {
    bg: String
  }
}
</script>

<style scoped>
.max-h {
  max-height: 6rem;
  max-width: 10rem;
}
</style>
