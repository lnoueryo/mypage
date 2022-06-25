<template>
  <div>
    <div class="container1 flex pc-only" style="justify-content: space-around;flex-flow: row-reverse;">
      <div>
        <div class="tab" @mouseover="tabKey(i)" v-for="(title, i) in titles" :key="i">
          {{ title }}
        </div>
      </div>
      <div style="width: 40vw;max-width: 450px;position: relative;">
        <transition name="slide" v-for="(feature, i) in features" :key="i">
          <ol class="content-container1 abs" v-show="tab[i]">
            <div class="sec_title">{{ feature.type }}</div>
            <li class="para" v-for="(content, i) in feature.content" :key="i">{{ content }}</li>
          </ol>
        </transition>
      </div>
    </div>
    <div class="sp-only tab-items">
      <transition name="slide" v-for="(feature, i) in features" :key="i">
        <ol class="content-container1 abs" v-show="tab[i]">
          <div class="sec_title">{{ feature.type }}</div>
          <li class="para" v-for="(content, i) in feature.content" :key="i">{{ content }}</li>
        </ol>
      </transition>
    </div>
    <div class="flex sp-only-f" style="justify-content: space-around;">
      <div class="tab" @mouseover="tabKey(i)" v-for="(title, i) in titles" :key="i">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: Array
  },
  data: () => ({
    titles: [
      'Front-End',
      'Back-End',
      'Infrastructure',
    ],
    tab: [true, false, false],
  }),
  methods: {
    tabKey(key) {
      this.tab = [false, false, false];
      this.$set(this.tab, key, true);
    },
  }
}
</script>

<style lang="scss" scoped>
/* transition */
.slide-appear-to{
    transform: translateY(100%);
}
.slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.slide-enter-to, .slide-leave {
    transform: translateX(0);
}
.slide-enter-active, .slide-leave-active {
    transition: opacity 1s, transform 1s;
}

</style>