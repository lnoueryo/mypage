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
          <div>
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

<script>
import curriculumVitae from '~/assets/json/curriculum-vitae.json'
export default {
  props: {
    section: Object
  },
  data: () => ({
    curriculumVitae: curriculumVitae
  }),
  computed: {
    wrapper() {
      const path = require("~/assets/image/23.jpg");
      return {
        position: "relative",
        backgroundImage: 'url("' + path + '")',
        backgroundSize: "cover",
        backgroundPosition: "right 75% bottom 50%",
        opacity: 0.9,
      };
    },
    secWrapper() {
      return {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#00000096",
        zIndex: -1,
      };
    },
    CurriculumVitaeURL() {
      return "https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.921gkvoxctf4";
    },
    items() {
      return items.map((item) => {
        item.projects = item.projects.map((project, i) => {
          if(i == 0) {
            project['active'] = true;
            return project;
          }
          project['active'] = false;
          return project;
        })
        return item;
      })
    }
  },
  methods: {
    onClickCurriculumVitae() {
      this.$gtag("event", "click", {
        event_category: "経歴",
        event_label: "CurriculumVitae",
      });
    },
  },
};
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