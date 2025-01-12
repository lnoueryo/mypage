<template>
  <div class="d-flex">
    <div class="star5-rating" :data-rate="rate"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  rate: {
    type: Number
  }
})
</script>

<style lang="scss" scoped>
.star5-rating {
  position: relative;
  z-index: 0;
  display: inline-block;
  white-space: nowrap;
  color: #CCCCCC;
}

.star5-rating:after {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  color: #ffcf32;
}

.star5-rating:before, .star5-rating:after {
  content: '★★★★★';
}

.star5-rating[data-rate="5"]:after {
  width: 100%;
}

.star5-rating[data-rate="4"]:after {
  width: 80%;
}

.star5-rating[data-rate="3"]:after {
  width: 60%;
}

.star5-rating[data-rate="2"]:after {
  width: 40%;
}
.star5-rating[data-rate="1"]:after {
  width: 20%;
}
</style>