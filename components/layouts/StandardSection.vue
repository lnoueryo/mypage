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
        <DocumentLink :href="document.href" @click="onClickDocument" v-if="document">
          {{ document.title }}→
        </DocumentLink>
      </template>
    </SectionContainer>
    <slot name="thd-wrapper" />
  </SectionWrapper>
</template>

<script setup lang="ts">
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