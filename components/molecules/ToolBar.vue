<template>
  <v-toolbar :color :height>
    <slot name="prepend" />
    <v-toolbar-title v-if="title">
      {{ title }}
    </v-toolbar-title>
    <slot name="default" />
    <v-spacer v-if="$slots.append" />
    <slot name="append" />
  </v-toolbar>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: undefined,
  },
  color: {
    type: String,
    default: 'white',
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<style scoped>

</style>