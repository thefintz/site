<template>
  <span class="icon has-text-primary">
    <font-awesome-icon :icon="['fas', 'check']" />
  </span>
  <span class="is-size-7"> {{ text }} </span>
</template>

<script>
export default {
  name: 'CheckmarkItemComp',

  props: {
    text: String
  }
}
</script>
