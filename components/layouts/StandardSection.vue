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
        <DocumentLink :href="document.href" @click="onClickDocument(document)" v-if="document">
          {{ document.title }}→
        </DocumentLink>
      </template>
    </SectionContainer>
    <slot name="thd-wrapper" />
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  wrapper: {
    type: Object
  },
  secWrapper: {
    type: Object
  },
  section: {
    type: Object
  },
  subTitle: {
    type: Object as () => [string, string],
  },
  document: {
    type: Object as () => Document,
  },
})

type Document = {
  href: string
  title: string
  category: string
  label: string
}
const { sendGtag } = useGtag()
const onClickDocument = (document: Document) => {
  sendGtag('click_document', {
    name: document.label,
    title: document.category,
    location: window.location.href,
  })
}
</script>

<style scoped>
.first-sentence {
  display: block;
}
</style>