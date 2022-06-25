<template>
  <div>
    <div class="d-flex description-container my-8" v-for="(item, i) in items" :key="i">
      <div class="w50 pa-2" :style="{order: item.position == 'right' ? 1 : 2}">
        <h6>{{ item.title }}</h6>
        <p v-for="(content, j) in item.contents" :key="j">{{ content }}</p>
      </div>
      <div class="w50 pa-2" :style="{order: item.position == 'left' ? 1 : 2}">
        <img class="w100" :src="item.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
}
</script>

<style lang="scss">
.description-container {
  max-width: 1000px;
  margin: auto;
}
</style>