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
              <div>CATCH UP WITH<br class="pc-only" /></div>
              <div class="adjust">LATEST TECHNOLOGIES</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="pc-only">
            <div class="w100 rel pc-only d-flex justify-end">
              <v-btn text color="success" class="tra" to="/languages-tools">DETAIL</v-btn>
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
            <div>
              <p class="tra link rel z-1">
                <a @click="onClickSkill" target="_blank" :href="skillURL">
                  SKILL→
                </a>
              </p>
            </div>
          </template>
        </SectionContainer>
      </div>
      <Grain></Grain>
      <div :style="secWrapper"></div>
    </SectionWrapper>
  </div>
</template>

<script>
import languagesTools from "~/assets/json/languages-tools";
export default {
  props: {
    section: Object
  },
  data: () => ({
    languagesTools: [],
  }),
  computed: {
    wrapper() {
      const path = require("~/assets/image/24.jpg");
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
    skillURL() {
      return "https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.de3jguofxwzy";
    },
  },
  created() {
    this.languagesTools = this.preprocessTools(languagesTools)
  },
  methods: {
    onClickSkill() {
      this.$gtag("event", "click", {
        event_category: "経歴",
        event_label: "skill",
      });
    },
    onModalOpen(e) {
      this.modalSwitch = !this.modalSwitch;
      this.$store.commit('selectTool', e)
    },
    preprocessTools(languagesTools) {
      return languagesTools.map((tools) => {
        tools.items = tools.items.map((tool) => {
          let total = 0;
          tool.durations.forEach(duration => {
            const start = new Date(duration.start)
            const end = duration.end ? new Date(duration.end) : new Date()
            total += this.diffMonth(start, end)
          });
          tool['total'] = total
          return tool;
        })
        return tools;
      });
    },
    diffMonth(d1, d2) {
      let d1Month, d2Month;
      d1Month = d1.getFullYear() * 12 + d1.getMonth();
      d2Month = d2.getFullYear() * 12 + d2.getMonth();
      return d2Month - d1Month;
    }
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