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
              <div>MANY EXPERIENCES<br class="pc-only" /></div>
              <div class="adjust">MAKE YOU GROW UP</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="mt-4">
            <TabDescription :items="curriculumVitae" />
            <p class="tra link rel z-1">
              <a @click="onClickCurriculumVitae" target="_blank" :href="CurriculumVitaeURL">
                CURRICULUM VITAE→
              </a>
            </p>
          </div>
        </template>
      </SectionContainer>
      <Grain></Grain>
      <div :style="secWrapper"></div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import curriculumVitae from '~/assets/json/curriculum-vitae.json'
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
const CurriculumVitaeURL = computed(() => 'https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.921gkvoxctf4')
const onClickCurriculumVitae = () => {
  // this.$gtag("event", "click", {
  //   event_category: "経歴",
  //   event_label: "CurriculumVitae",
  // });
}

</script>


<style lang="scss" scoped>
.carousel-container {
  overflow: hidden;
  opacity: 1
}
.sp-only {
  display: none;
}
@media screen and (max-width: 480px) {
  .pc-only {
    display: none;
  }
  .sp-only {
    display: block;
  }
}
</style>