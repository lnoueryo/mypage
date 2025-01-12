<template>
  <StandardSection :wrapper :section :subTitle :document>
    <template #content>
      <div class="mt-4 mb-8">
        <TabDescription :items="curriculumVitae" />
      </div>
    </template>
    <template #thd-wrapper>
      <Grain />
      <div :style="secWrapper" />
    </template>
  </StandardSection>
</template>
<script setup lang="ts">
import curriculumVitae from '~/assets/json/curriculum-vitae.json'
defineProps([
  'section'
])
const wrapper = computed(() => {
  return {
    position: "relative",
    backgroundImage: 'url("/images/23.jpg")',
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
const subTitle: ComputedRef<[string, string]> = computed(() => {
  return [
    `MANY EXPERIENCES`,
    `MAKE YOU GROW UP`
  ]
})
const document = {
  href: 'https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.921gkvoxctf4',
  title: 'CURRICULUM VITAE',
  category: '経歴',
  label: 'CurriculumVitae',
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