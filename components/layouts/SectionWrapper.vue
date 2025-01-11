<template>
  <section>
    <div class="wrapper" :style="wrapper">
      <div class="sec-wrapper" :style="secWrapper">
        <div class="content-wrapper" :style="contentWrapper">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    wrapper: Object,
    secWrapper: Object,
    contentWrapper: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
}
.content-wrapper {
  max-width: 1500px;
  margin: auto;
}
</style>