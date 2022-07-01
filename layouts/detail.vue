<template>
  <v-app dark>
    <Nuxt />
    <!-- <ModalContainer v-selectTool="modalSwitch">
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
      </CardImage>
    </ModalContainer> -->
  </v-app>
</template>

<script>
export default {
  name: "DetailLayout",
  data() {
    return {
      modalSwitch: false,
      navigationItems: [
        { list: "TOP", href: "#top" },
        { list: "ABOUT ME", href: "#about-me" },
        { list: "SKILL", href: "#skill" },
        { list: "LANGUAGES TOOLS", href: "#languages-tools" },
        { list: "HISTORY", href: "#history" },
        { list: "PORTFOLIO", href: "#portfolio" },
        { list: "OTHER CONTENTS", href: "#other-contents" },
        { list: "FOLLOW ME", href: "#follow-me" },
      ],
    };
  },
  computed: {
    selectTool() {
      return this.$store.getters.selectTool;
    },
  },
  created() {
    this.startHue();
    this.startHalfHue();
    this.startBrightness();
  },
  methods: {
    startHue() {
      setInterval(() => {
        this.$store.commit("countHueValue");
      }, 100);
    },
    startHalfHue() {
      setInterval(() => {
        this.$store.commit("countHueHalfValue");
      }, 200);
    },
    startBrightness() {
      setInterval(() => {
        this.$store.commit("changeBrightness");
      }, 150);
    },
  },
};
</script>

<style lang="scss">
.modal-overlay {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>