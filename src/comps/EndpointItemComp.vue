<template>
  <span
    class="has-text-white py-1 px-2 rounded is-size-7 is-family-code"
    :class="[
      color === 'GREEN' ? 'has-background-success' :
      color === 'YELLOW' ? 'has-background-warning' :
      color === 'RED' ? 'has-background-danger' :
      color === 'BLACK' ? 'hasbackground-dark' :
      'has-background-primary'
    ]">
    {{ label }}
  </span>
  <span class="pl-2">
    {{ text }}
  </span>
</template>

<style scoped>
  .rounded {
    border-radius: 5px;
  }
</style>

<script>
export default {
  name: 'EndpointItemComp',

  props: {
    label: String,
    text: String,
    color: String
  }
}
</script>
