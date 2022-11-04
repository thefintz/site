<template>
  <a
    :href="link"
    class="has-text-white py-1 px-2 rounded is-size-7 is-family-code"
    :class="[
      link ? 'cursor-pointer' : 'cursor-default',
      color === 'GREEN' ? 'has-background-success' :
      color === 'YELLOW' ? 'has-background-warning' :
      color === 'RED' ? 'has-background-danger' :
      color === 'BLACK' ? 'has-background-dark' :
      'has-background-primary'
    ]">
    {{ label }}
  </a>
  <a :href="link" target="_" class="pl-2 has-text-dark" :class="link ? 'cursor-pointer' : 'cursor-default'">
    {{ text }}
  </a>
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
    color: String,
    link: String
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}
</style>
