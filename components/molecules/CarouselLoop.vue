<template>
  <div class="loop-wrap">
    <div class="d-flex pa-2" :class="direction" v-for="n in 2" :key="n" @click="onClickTool(contents.name)">
      <figure class="mx-4 figure rel hover" v-for="(content, i) in contents" :key="i">
        <div class="d-flex image-container">
          <img style="width: 128px" :src="content.image" :alt="content.title" />
        </div>
        <figcaption class="caption text-center" v-text="content.title"></figcaption>
        <ToolRate :rate="content.rate" />
        <label for="modal-trigger" class="all-directions abs hover" @click="$emit('content', content)"></label>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ToolRate from '~/components/atoms/ToolRate.vue'

defineProps([
  'contents',
  'direction',
])
const onClickTool = (name: string) => {
  // this.$gtag('event', 'click', {
  //   event_category: 'ツール',
  //   event_label: name,
  // })
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

.caption {
  font-size: 14px;
  word-break: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.figure {
  display: flex;
  flex-direction: column;
}

.image-container {
  height: 160px;
  align-items: center;
}

.hover {
  cursor: pointer;
  transition: .5s;
}

.hover:hover {
  opacity: .5;
  transition: .5s;
  box-shadow: 10ch;
  background-color: rgba(0, 255, 179, 0.18);
}

</style>