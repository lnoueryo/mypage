<template>
  <Card
    :color
    :width
    :max-width
    :height
    :max-height
  >
    <ToolBar
      :color="headerColor"
      :height="headerHeight"
      v-if="$slots.header"
    >
      <slot name="header" />
    </ToolBar>
    <v-card-title v-if="$slots.title">
      <slot name="title" />
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions v-if="$slots.footer">
      <slot name="footer" />
    </v-card-actions>
  </Card>
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
  headerColor: {
    type: String,
    default: 'white',
  },
  headerHeight: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<style scoped>

</style>