<template>
  <v-img
    :width
    :height
    :src
  >
    <slot />
  </v-img>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    require: true,
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<style scoped>

</style>