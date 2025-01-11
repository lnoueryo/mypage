<template>
  <h2 class="flex align-center">
    <span class="page-title-num">{{ titleNum }}</span>
    <span class="page-title">{{ title }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    titleNum: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.page-title-num {
  margin-right: 28px;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-style: italic;
  font-size: 20px;
  letter-spacing: .02em;
}
.page-title {
  display: block;
  font-weight: 500;
  font-family: trajan-pro-3,serif;
  font-size: 14px;
  letter-spacing: .1em;
}
</style>