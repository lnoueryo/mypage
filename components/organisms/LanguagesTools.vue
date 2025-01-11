<template>
  <SectionWrapper :wrapper="wrapper">
    <SectionContainer>
      <template #title>
        <transition name="bottom">
          <SectionTitle :titleNum="section.number" :title="section.title" />
        </transition>
      </template>
      <template #sub-title>
        <transition name="bottom">
          <div class="message tra">
            <div>CATCH UP WITH</div>
            <div class="adjust">LATEST TECHNOLOGIES</div>
          </div>
        </transition>
      </template>
      <template #content>
        <div class="pc-only">
          <div class="w100 rel pc-only d-flex justify-end">
            <v-btn variant="text" color="success" class="tra" to="/languages-tools">DETAIL</v-btn>
          </div>
          <div class="mb-8 carousel-container">
            <CarouselLoop
              :contents="languagesTool.items"
              :direction="languagesTool.position"
              v-for="(languagesTool, i) in languagesTools"
              :key="i"
              @content="onModalOpen($event)"
            />
          </div>
          <p class="tra link rel z-1">
            <a @click="onClickSkill" target="_blank" :href="skillURL">
              SKILL→
            </a>
          </p>
        </div>
      </template>
    </SectionContainer>
    <div class="sp-only rel z-1">
      <CarouselLoop
        :contents="languagesTool.items"
        :direction="languagesTool.position"
        v-for="(languagesTool, i) in languagesTools"
        :key="i"
        @content="onModalOpen($event)"
      />
      <SectionContainer>
        <template #content>
          <p class="tra link rel z-1">
            <a @click="onClickSkill" target="_blank" :href="skillURL">
              SKILL→
            </a>
          </p>
        </template>
      </SectionContainer>
    </div>
    <Grain />
    <div :style="secWrapper"></div>
  </SectionWrapper>
  <!-- <ModalContainer v-model="modalSwitch" v-if="selectTool">
    <CardImage
      class="modal-overlay"
      :item="selectTool"
      max-width="330"
      img-width="170"
      img-height="170"
      :margin-reset="true"
    >
      <template #sub>
        <ToolRate class="ml-4" :rate="selectTool.rate" />
      </template>
      <template #bottom>
        <div class="w100 text-right fw-bold tra">
          <a :href="selectTool.link" target="_blank" style="color: #1976d2">Tech-Blog→</a>
        </div>
      </template>
    </CardImage>
  </ModalContainer> -->
</template>

<script setup lang="ts">
import languagesToolsData from '~/assets/json/languages-tools.json'
import CarouselLoop from '~/components/molecules/CarouselLoop.vue'
import SectionWrapper from '~/components/layouts/SectionWrapper.vue'
import SectionContainer from '~/components/layouts/SectionContainer.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Grain from '~/components/atoms/Grain.vue'
import { defineProps } from 'vue'
defineProps([
  'section'
])
interface Duration {
  start: string;
  end: string;
}

interface Item {
  id: number;
  title: string;
  image: string;
  handson: number;
  durations: Duration[];
  rate: number;
  contents: string[];
  link: string;
  total: number;
}

interface Section {
  name: string;
  position: 'left' | 'right'; // 'left' または 'right'
  items: Item[];
}
const modalSwitch = ref(false)
const selectTool = ref<Item | null>(null)
const wrapper = computed(() => {
  return {
    position: "relative",
    backgroundImage: 'url("/images/24.jpg")',
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
const skillURL = computed(() => 'https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.de3jguofxwzy')
const onClickSkill = () => {
  // this.$gtag("event", "click", {
  //   event_category: "経歴",
  //   event_label: "skill",
  // });
}
const onModalOpen = (item: Item) => {
  modalSwitch.value = !modalSwitch.value;
  selectTool.value = item
}
const preprocessTools = (languagesTools: Section[]) => {
  return languagesTools.map((tools) => {
    tools.items = tools.items.map((tool) => {
      let total = 0;
      tool.durations.forEach(duration => {
        const start = new Date(duration.start)
        const end = duration.end ? new Date(duration.end) : new Date()
        total += diffMonth(start, end)
      });
      tool['total'] = total
      return tool;
    })
    return tools;
  })
}
const diffMonth = (d1: Date, d2: Date) => {
  let d1Month, d2Month;
  d1Month = d1.getFullYear() * 12 + d1.getMonth();
  d2Month = d2.getFullYear() * 12 + d2.getMonth();
  return d2Month - d1Month;
}
const languagesTools = ref<Section[]>([])
onBeforeMount(() => {
  languagesTools.value = preprocessTools(languagesToolsData as Section[])
})
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
.modal-overlay {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>