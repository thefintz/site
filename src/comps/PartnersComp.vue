<template>
  <span v-if="hasText" class="is-size-6">
    {{ text ? text : 'Empresas e Instituições renomadas confiam na Fintz.'}}
  </span>
  <br>
  <br>
  <div class="columns is-flex is-vcentered">
    <div class="column">
      <figure class="image">
        <img src="@/assets/logos/stark.png" class="img-crop">
      </figure>
    </div>
    <div class="column">
      <figure class="image">
        <img src="@/assets/logos/sicredi.png" class="img-crop">
      </figure>
    </div>
    <div class="column">
      <figure class="image">
        <img src="@/assets/logos/manfing.png" class="img-crop">
      </figure>
    </div>
    <div class="column">
      <figure class="image">
        <img src="@/assets/logos/holderplus.png" class="img-crop">
      </figure>
    </div>
    <div class="column">
      <figure class="image">
        <img src="@/assets/logos/anbima.png" class="img-crop">
      </figure>
    </div>
  </div>
</template>

<style scoped>
  .img-crop {
    max-height: 80%;
    max-width: 70%
  }
</style>

<script>
export default {
  name: 'DataSourcesComp',

  props: {
    text: String,
    hasText: Boolean
  }
}
</script>
