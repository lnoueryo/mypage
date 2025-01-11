<template>
  <div class="rel">
    <SectionWrapper :wrapper="wrapper">
      <SectionContainer>
        <template #title>
          <transition name="bottom">
            <section-title :titleNum="section.number" :title="section.title" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>LOOK BACK<br class="pc-only"></div>
              <div class="adjust">ON MY HISTORY</div>
            </div>
          </transition>
        </template>
        <template #content>
          <Timeline class="mb-8" :items="history" />
          <p class="tra link rel z-1">
            <a @click="onClickBackground" target="_blank" :href="backgroundURL">BACKGROUND→</a>
          </p>
        </template>
      </SectionContainer>
      <div :style="secWrapper"></div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import Timeline from '../Timeline.vue'
import history from '~/assets/json/history.json'
import { defineProps } from 'vue'
defineProps([
  'section'
])
const wrapper = computed(() => {
  return {
    position: "relative",
    backgroundImage: 'url("/images/25.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "right 75% bottom 50%",
    opacity: 0.9,
  } as const
})
const secWrapper = computed(() => {
  return {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#00000096",
    zIndex: -1,
  } as const
})
const backgroundURL = computed(() => 'https://docs.google.com/document/d/14bj2fv6hF8RhSgoRHrEDpfA1eTQt22MNNj3rENHOwvY/edit?usp=sharing')
const onClickBackground = () => {
  // this.$gtag('event', 'click', {
  //   event_category: '経歴',
  //   event_label: 'background',
  // })
}

</script>


<style lang="scss" scoped>


</style>