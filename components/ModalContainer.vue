<template>
  <div>
    <input id="modal-trigger" class="checkbox" type="checkbox" v-model="value">
    <div class="modal all-directions">
      <label for="modal-trigger" class="abs all-directions">
        <slot class="modal-overlay" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    selectTool: Object
  },
  computed: {
    modal: {
      get() {
        return this.value;
      },
      set(v) {
        this.value = v;
      }
    }
  }
}
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
  // padding: 50px;
}

input:checked ~ .modal {
  z-index: 100;
  opacity: 1;
  transition: .5s;
  background-color: #0e2a2ac3;
}

</style>