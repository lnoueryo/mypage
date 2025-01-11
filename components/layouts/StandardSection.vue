<template>
  <SectionWrapper :wrapper="wrapper" :secWrapper="secWrapper">
    <SectionContainer>
      <template #title v-if="section">
        <SectionTitle :titleNum="section.number" :title="section.title" />
      </template>
      <template #sub-title v-if="subTitle">
        <h3 class="message tra">
          <span class="first-sentence">{{ subTitle[0] }}</span>
          <span class="adjust">{{ subTitle[1] }}</span>
        </h3>
      </template>
      <template #content>
        <slot name="content" />
        <p class="tra link" v-if="document">
          <a @click="onClickDocument" target="_blank" :href="document.href">{{ document.title }}→</a>
        </p>
      </template>
    </SectionContainer>
    <slot name="thd-wrapper" />
  </SectionWrapper>
</template>

<script setup lang="ts">
import SectionWrapper from '~/components/layouts/SectionWrapper.vue'
import SectionContainer from '~/components/layouts/SectionContainer.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
defineProps([
  'wrapper',
  'secWrapper',
  'section',
  'subTitle',
  'document',
])
const onClickDocument = () => {
  // this.$gtag('event', 'click', {
  //   event_category: document.category,
  //   event_label: document.label,
  // })
}
</script>

<style scoped>
.first-sentence {
  display: block;
}
</style>