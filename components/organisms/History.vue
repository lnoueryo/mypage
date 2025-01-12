<template>
  <StandardSection :wrapper :section :subTitle :document>
    <template #content>
      <Timeline class="mb-8" :items="history" />
    </template>
    <template #thd-wrapper>
      <div :style="secWrapper" />
    </template>
  </StandardSection>
</template>

<script setup lang="ts">
import history from '~/assets/json/history.json'
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
const subTitle = computed(() => {
  return [
    `LOOK BACK`,
    `ON MY HISTORY`
  ]
})
const document = {
  href: 'https://docs.google.com/document/d/14bj2fv6hF8RhSgoRHrEDpfA1eTQt22MNNj3rENHOwvY/edit?usp=sharing',
  title: 'BACKGROUND',
  category: '経歴',
  label: 'background',
}
</script>


<style lang="scss" scoped>


</style>