<template>
  <div>
    <div class="container1">
      <br class="pc">
      <div class="carousel">
        <!-- <input @click="carouselPrev" class="prev filter pc48-only" style="max-width: 30px;" type="image"
          src="~/assets/image/carousel/21.png" :disabled="disabled">
        <input @click="carouselNext" class="next filter pc48-only" style="max-width: 30px;" type="image"
          src="~/assets/image/carousel/20.png" :disabled="disabled"> -->
        <div>
          <div ref="carouselFlame" class="flex" style="position: relative;overflow: hidden;filter: grayscale(60%);align-items: flex-start;">
            <img :src="image" :style="show[srcKey[index]]" v-for="(image, index) in src" :key="index" @click="openCarouselModal">
          </div>
        </div>
      </div>
      <!-- <input @click="carouselPrev" class="prev filter sp48-only" style="max-width: 30px;" type="image" src="~/assets/image/carousel/21.png" :disabled="disabled">
      <input @click="carouselNext" class="next filter sp48-only" style="max-width: 30px;" type="image" src="~/assets/image/carousel/20.png" :disabled="disabled"> -->
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  padding: 30px 75px;
}
.prev {
  position: absolute;
  top: 50%;
  left: 0;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-size: 20px;
  letter-spacing: .02em;
  line-height: 1.3;
  color: white;
  background-color: transparent;
  font-style: italic;
  border: transparent;
}
.next {
  position: absolute;
  top: 50%;
  right: 0;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-size: 20px;
  letter-spacing: .02em;
  line-height: 1.3;
  color: white;
  background-color: transparent;
  font-style: italic;
  border: transparent;
}

</style>