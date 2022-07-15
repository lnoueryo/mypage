<template>
  <v-app dark>
    <ViewsMainHeader :navigationItems="navigationItems" />
    <Nuxt />
    <ViewsMainFooter :navigationItems="navigationItems" />
    <ModalContainer v-selectTool="modalSwitch">
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
    </ModalContainer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      modalSwitch: false,
      hash: this.$route.hash,
    };
  },
  computed: {
    selectTool() {
      return this.$store.getters.selectTool;
    },
    navigationItems() {
      return this.$store.getters.navigationItems;
    },
  },
  created() {
    this.startHue();
    this.startHalfHue();
    this.startBrightness();
  },
  mounted() {
    this.$nextTick(function () {
      if (this.hash) {
        const refName = this.hash.replace('#', '')
        this.scrollToAnchorPoint(refName)
      }
    })
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName]
      el.scrollIntoView({ behavior: 'smooth' })
    },
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