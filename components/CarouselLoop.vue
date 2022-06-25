<template>
  <div class="loop-wrap">
    <div class="d-flex pa-2" :class="direction" v-for="n in 2" :key="n">
      <figure class="mx-4" style="display: flex;flex-direction: column;" v-for="(image, i) in src" :key="i">
        <div class="d-flex" style="height: 160px;align-items: center">
          <img style="width: 128px" :src="image.src" :alt="image.capture">
        </div>
        <figcaption style="font-size: 14px;word-break: break-word;display: flex;justify-content: center;align-items: center;margin-top: auto;" class="text-center" v-text="image.capture"></figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: Array,
    direction: String
  },
}
</script>

<style lang="scss">
@keyframes left1 {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes left2 {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}

@keyframes right1 {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes right2 {
  0% {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
}
.loop-wrap {
  display: flex;
  width: 100vw;
  height: 200px;
  overflow: hidden;
}
.loop-wrap .left:first-child {
  animation: left1 70s -35s linear infinite;
}

.loop-wrap .left:last-child {
  animation: left2 70s linear infinite;
}

.loop-wrap .right:first-child {
  animation: right1 60s -30s linear infinite;
}

.loop-wrap .right:last-child {
  animation: right2 60s linear infinite;
}
</style>