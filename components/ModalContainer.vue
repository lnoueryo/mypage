<template>
  <div>
    <input id="modal-trigger" class="checkbox" type="checkbox" v-model="modal">
    <div class="modal all-directions">
      <label for="modal-trigger" class="abs all-directions">
        <slot class="modal-overlay" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps([
  'value',
  'selectTool',
])
const emits = defineEmits([
  'update:modelValue'
])
const modal = computed({
  get() {
    return props.value
  },
  set(v: boolean) {
    emits('update:modelValue', v)
  }
})

</script>

<style lang="scss" scoped>
#modal-trigger {
  display: none;
}
.modal {
  position: fixed;
  opacity: 0;
  transition: .5s;
  z-index: -1;
}

input:checked ~ .modal {
  z-index: 100;
  opacity: 1;
  transition: .5s;
  background-color: #0e2a2ac3;
}

</style>