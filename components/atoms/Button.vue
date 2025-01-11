<template>
  <v-btn
    :href
    :target
    @click="emits('click', $event)"
   >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
})
const emits = defineEmits([
  'click'
])
</script>

<style scoped>

</style>