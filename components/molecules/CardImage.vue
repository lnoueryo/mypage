<template>
  <div class="card sec_num tooltip" :class="{ 'm-0': marginReset }" :style="{maxWidth: maxWidth + 'px'}">
    <div :class="{'image-container': imgWidth}" :style="{width: imgWidth + 'px', objectFit: 'cover'}">
      <img class="image" :src="item.image" :alt="item.title" :style="{backgroundColor: item.backgroundColor, height: imgHeight + 'px'}">
    </div>
    <div class="card-title tra d-flex">
      <div>{{ item.title}}</div>
      <div>
        <slot name="sub" />
      </div>
    </div>
    <div class="card-content">
      <p v-for="(content, j) in item.contents" :key="j"> {{ content }}</p>
    </div>
    <div class="bottom-content">
      <slot name="bottom"></slot>
    </div>
    <a class="abs all-directions" :href="item.url" target="_blank" v-if="item.url"></a>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    marginReset: Boolean,
    maxWidth: String,
    imgWidth: String,
    imgHeight: String
  }
}
</script>

<style lang="scss" scoped>
  .card {
    height: 100%;
    background-color: #191919;
    border-radius: 8px;
    box-shadow: rgb(55 88 81) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
    transition: all .5s;

    a {
      color: white;
    }
    .image-container {
      display: flex;
      align-items: center;
      margin: auto;
    }
    .image {
      border-radius: 5px 5px 0 0;
    }

    .card-title {
      text-align: left;
      border-radius: 8px 8px 0 0;
      font-size: 18px;
      padding: 10px 15px;
    }

    .card-content {
      padding: 15px;
      padding-bottom: 0;
      p {
        font-size: 14px;
      }
    }

    .bottom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding: 10px 15px;
      position: relative;
      z-index: 1;
    }
  }

  .card:hover {
    opacity: .6;
    transition: all .5s;
  }

  @media screen and (max-width: 768px) {
    .card {
      max-width: initial;
      width: 100%
    }
  }
  .m-0 {
    margin: 0;
  }
</style>