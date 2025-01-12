<template>
  <NuxtLink
    class="link"
    :href
    target="_blank"
    @click="$emit('click', $event)"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    rerquire: true,
  }
})
</script>

<style lang="scss" scoped>
.link {
  font-size: 2.5vw;
  text-align: right;
  font-family: trajan-pro-3, serif;
  z-index: 1;
  position: relative;
  display: block;
}
@media screen and (max-width: 768px) {
  .link {
    font-size: 4vw;
  }
}

@media screen and (max-width: 480px) {
  .link {
    font-size: 5vw;
  }
}
</style>