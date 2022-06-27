<template>
  <div id="languages-tools" class="rel">
    <SectionWrapper :wrapper="wrapper">
      <SectionContainer>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="03" title="LANGUAGES TOOLS" />
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
          <div class="pc-only">
            <div class="mb-8 carousel-container">
              <CarouselLoop
                :src="languagesTool.contents"
                :direction="languagesTool.position"
                v-for="(languagesTool, i) in languagesTools"
                :key="i"
              />
            </div>
            <p class="tra link rel z-1">
                <a class="tooltip" @click.prevent.stop="onClickSkill" target="_blank" :href="skillURL">
                  <ToolChip>Sorry, Coming Soon</ToolChip>
                  SKILL→
                </a>
            </p>
          </div>
        </template>
      </SectionContainer>
      <div class="sp-only">
        <CarouselLoop
          :src="languagesTool.contents"
          :direction="languagesTool.position"
          v-for="(languagesTool, i) in languagesTools"
          :key="i"
        />
        <SectionContainer>
          <template #content>
            <div>
              <p class="tra link rel z-1">
                <!-- 準備中 -->
                <a class="tooltip" @click.prevent.stop="onClickSkill" target="_blank" :href="skillURL">
                  <ToolChip>Sorry, Coming Soon</ToolChip>
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
  data: () => ({
    languagesTools: languagesTools,
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
      return "https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0";
    },
  },
  methods: {
    onClickSkill() {
      this.$gtag("event", "click", {
        event_category: "経歴",
        event_label: "skill",
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