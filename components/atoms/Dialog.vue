<template>
  <v-dialog
    v-bind="isOpen ? { modelValue: isOpen } : {}"
    :max-width="maxWidth"
  >
    <template #activator="props">
      <slot name="activator" v-bind="props" />
    </template>
    <template #default="props">
      <slot name="default" v-bind="props"  />
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  maxWidth: {
    type: [String, Number]
  }
})
const emits = defineEmits([
  'update:modelValue'
])
const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(v: boolean) {
    emits('update:modelValue', v)
  }
})
</script>

<style scoped>

</style>