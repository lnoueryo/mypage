<template>
  <div id="skill">
    <section-wrapper>
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title :titleNum="section.number" :title="section.title" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>I'VE BEEN LEARNING<br class="pc-only"></div>
              <div class="adjust">SOFTWARE DEVELOPMENT</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="content-container">
            <div class="flex rel mb-8">
              <div class="front-end">
                <div class="sec_title mt-4">{{ skill.frontend.title }}</div>
                <p class="para" v-for="(content, i) in skill.frontend.contents" :key="i">{{ content }}</p>
              </div>
              <div id="nuxt" class="image">
                <img src="/icons/vue.png" alt="">
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
                <img src="/icons/django.png" alt="">
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
                <img src="/icons/gcp.png" alt="">
              </div>
            </div>
          </div>
          <p class="tra link rel z-1">
            <a target="_blank" :href="curriculumVitae" @click="onClickCurriculumVitae">
              CURRICULUM VITAE→
            </a>
          </p>
        </template>
      </section-container>
      <div :style="wrapper"></div>
      <div :style="secWrapper"></div>
    </section-wrapper>
  </div>
</template>

<script>
import skill from '~/assets/json/skill.json'
export default {
  props: {
    section: Object
  },
  data: () => ({
    skill: skill
  }),
  computed: {
    hueHalfValue() {
      return this.$store.getters.hueHalfValue;
    },
    wrapper() {
      const path = require('~/assets/image/02.jpg')
      const hue = `hue-rotate(${this.hueHalfValue}deg)`;
      return {
        backgroundImage: 'url("' + path + '")',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0.9,
        filter: hue,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }
    },
    secWrapper() {
      const path = require('~/assets/image/01.png')
      return {
        backgroundImage: 'url("' + path + '")',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.546)'
      }
    },
    curriculumVitae() {
      return 'https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.f2k7y63qpla3';
    }
  },
  methods: {
    onClickCurriculumVitae() {
      this.$gtag('event', 'click', {
        event_category: '経歴',
        event_label: 'curriculumVitae',
      })
    }
  }
}
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