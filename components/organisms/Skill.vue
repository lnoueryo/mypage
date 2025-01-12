<template>
  <StandardSection :section :subTitle :document>
    <template #content>
      <div class="content-container">
        <div class="flex rel mb-8">
          <div class="front-end">
            <div class="sec_title mt-4">{{ skill.frontend.title }}</div>
            <p class="para" v-for="(content, i) in skill.frontend.contents" :key="i">{{ content }}</p>
          </div>
          <div id="nuxt" class="image">
            <img src="/public/icons/vue.png" alt="">
          </div>
        </div>
        <div class="flex rel mb-8">
          <div class="back-end">
            <div>
              <div class="sec_title mt-40">{{ skill.backend.title }}</div>
              <p class="para" v-for="(content, i) in skill.backend.contents" :key="i">{{ content }}</p>
            </div>
          </div>
          <div class="image" id="go">
            <img src="/public/icons/django.png" alt="">
          </div>
        </div>
        <div class="flex rel mb-8">
          <div class="infrastructure">
            <div>
              <div class="sec_title mt-40">{{ skill.infrastructure.title }}</div>
              <p class="para" v-for="(content, i) in skill.infrastructure.contents" :key="i">{{ content }}</p>
            </div>
          </div>
          <div class="image" id="gcp">
            <img src="/public/icons/gcp.png" alt="">
          </div>
        </div>
      </div>
    </template>
    <template #thd-wrapper>
      <div :style="wrapper" />
      <div :style="secWrapper" />
    </template>
  </StandardSection>
</template>

<script setup lang="ts">
import skill from '~/assets/json/skill.json'
defineProps([
  'section'
])
const hueHalfValue = ref(0)
const countHueHalfValue = () => {
  if (hueHalfValue.value > 359) return hueHalfValue.value = 0
  hueHalfValue.value++
}
const wrapper = computed(() => {
  const hue = `hue-rotate(${hueHalfValue.value}deg)`
  return {
    backgroundImage: 'url("/images/02.jpg")',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.9,
    filter: hue,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  } as const
})
const secWrapper = computed(() => {
  return {
    backgroundImage: 'url("/images/01.png")',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.546)'
  } as const
})
const subTitle: ComputedRef<[string, string]> = computed(() => {
  return [
    `I'VE BEEN LEARNING`,
    `SOFTWARE DEVELOPMENT`
  ]
})
const document = {
  href: 'https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.f2k7y63qpla3',
  title: 'CURRICULUM VITAE',
  category: '経歴',
  label: 'curriculumVitae',
}
onBeforeMount(() => setInterval(countHueHalfValue, 200))
</script>

<style lang="scss" scoped>

.content-container {
  padding: 0 60px;
}

#go {
  left: 0;
  max-width: 300px;
  transform: rotate3d(100, 200, 20, 30deg) translateY(-50%);
}

#gcp {
  position: absolute;
  max-width: 300px;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;
}

#nuxt {
  right: 0;
  max-width: 300px;
}

.image {
  position: absolute;
  z-index: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  width: 100%;
  filter: grayscale(30%)  brightness(.7);
}

.front-end {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin-right: auto;
}

.back-end {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin-left: auto;
}

.infrastructure {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .content-container {
    padding: 0;
  }
}

</style>