<template>
  <div>
    <div class="pc-only">
      <div class="d-flex description-container my-16" v-for="(item, i) in items" :key="i">
        <div class="w50 pa-4" :style="{order: item.position == 'right' ? 1 : 2}">
          <h6 class="sec_title">{{ item.title }}</h6>
          <p v-for="(content, j) in item.contents" :key="j">{{ content }}</p>
        </div>
        <div class="w50 pa-4" :style="{order: item.position == 'left' ? 1 : 2}">
          <img class="w100" :src="item.image" alt="">
        </div>
      </div>
    </div>
    <div class="sp-only">
      <div class="d-flex description-container my-16" v-for="(item, i) in items" :key="i">
        <div class="w100 pa-4" :style="{order: item.position == 'right' ? 1 : 2}">
          <h6 class="sec_title">{{ item.title }}</h6>
          <img class="w100 mb-4" :src="item.image" alt="">
          <p v-for="(content, j) in item.contents" :key="j">{{ content }}</p>
        </div>
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
  max-width: 1200px;
  margin: auto;
}
</style>