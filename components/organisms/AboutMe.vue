<template>
  <StandardSection :wrapper :secWrapper :section :subTitle :document>
    <template #content>
      <div class="mb-2">
        <div class="pc-only abs z-0 img-container">
          <img class="img-filter" src="/public/images/10.jpg" alt="">
        </div>
        <div class="content-container rel">
          <div class="sec_title mt-4">{{ aboutMe.personalHistory.title }}</div>
          <p class="para" v-for="(content, i) in aboutMe.personalHistory.contents" :key="i">{{ content }}</p>
        </div>
      </div>
      <div class="content-container ml-a mb-4 pc-only rel z-1">
        <div class="sec_title">{{ aboutMe.profile.title }}</div>
        <p class="para" v-for="(content, i) in aboutMe.profile.contents" :key="i">{{ content }}</p>
      </div>
      <div class="content-container ml-a mb-4 sp-only rel z-1">
        <div class="sec_title">{{ aboutMe.profile.title }}</div>
        <p class="para">
          <img id="dog" src="/public/images/10.jpg" alt="">
          <span v-for="(content, i) in aboutMe.profile.contents" :key="i">{{ content }}<br><br></span>
        </p>
      </div>
    </template>
  </StandardSection>
</template>

<script setup lang="ts">
import aboutMe from '~/assets/json/about-me.json'
import StandardSection from '~/components/layouts/StandardSection.vue'
import { defineProps } from 'vue'
defineProps([
  'section'
])
const wrapper = computed(() => {
  return {
    backgroundImage: 'url("/images/03.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'right 75% bottom 50%',
    opacity: 0.9
  }
})
const secWrapper = computed(() => {
  return {
    backgroundColor: 'rgba(0, 0, 0, 0.646)'
  }
})
const subTitle = computed(() => {
  return [
    'A HOTEL RECEPTIONIST',
    'TO A WEB DEVELOPER',
  ]
})
const document = {
  href: 'https://docs.google.com/presentation/d/12T7tlSXZmJBru31kPOTb-dusfTJAtI-XTWv1qWhmwS4/edit?usp=sharing',
  title: 'PROFILE',
  category: '経歴',
  label: 'profile',
}

</script>

<style lang="scss" scoped>
.img-container {
  right: 0;
  width: 100%;
  max-width: 500px;
}
.img-filter {
  filter: grayscale(60%) brightness(.7);
}

.content-container {
  max-width: 550px;
}

#dog {
  float: right;
  filter: grayscale(60%) brightness(.7);
  max-width: 210px;
  margin-left: 25px;
}

@media screen and (max-width: 480px) {
  #dog {
    max-width: 0;
    margin-left: 0;
    float: initial;
    max-width: initial;
    width: 100%;
    margin-bottom: 20px;
  }
}

</style>