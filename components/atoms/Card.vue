<template>
  <v-card
    :color
    :width
    :max-width
    :height
    :max-height
  >
    <slot />
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as () => 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain',
    default: 'elevated',
  },
  color: {
    type: String,
    default: 'white',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  maxWidth: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  maxHeight: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<style scoped>

</style>