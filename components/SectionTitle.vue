<template>
  <div>
    <div class="flex align-center">
      <div class="page-title-num">{{ titleNum }}</div>
      <div class="page-title">{{ title }}</div>
    </div>
  </div>
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
  margin-right: 6%;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-style: italic;
  font-size: 20px;
  letter-spacing: .02em;
  line-height: 1;
}
.page-title {
  display: block;
  font-weight: 500;
  font-family: proxima-nova,sans-serif;
  font-size: 14px;
  letter-spacing: .1em;
  line-height: 1;
}
</style>