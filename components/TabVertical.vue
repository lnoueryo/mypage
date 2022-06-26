<template>
  <div>
    <div class="pc">
      <div class="w50">
        <div class="tab" @mouseover="tabKey(i)" v-for="(title, i) in titles" :key="i">
          {{ title }}
        </div>
      </div>
      <div class="tab-items w50">
        <transition name="list" v-for="(feature, i) in features" :key="i">
          <ol class="content-container" v-show="tab[i]">
            <div class="sec_title">{{ feature.type }}</div>
            <li class="para" v-for="(content, i) in feature.content" :key="i">{{ content }}</li>
          </ol>
        </transition>
      </div>
    </div>
    <div class="sp">
      <div class="sp-only tab-items">
        <transition name="slide" v-for="(feature, i) in features" :key="i">
          <ol class="content-container1 abs" v-show="tab[i]">
            <div class="sec_title">{{ feature.type }}</div>
            <li class="para" v-for="(content, i) in feature.content" :key="i">{{ content }}</li>
          </ol>
        </transition>
      </div>
      <div class="titles flex sp-only-f">
        <div class="tab mx-3" @mouseover="tabKey(i)" v-for="(title, i) in titles" :key="i">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titles: [
      'Front-End',
      'Back-End',
      'Infrastructure',
    ],
    tab: [true, false, false],
  }),
  watch: {
    accordion(oldValue, newValue) {
      const elements = this.$refs.accordion;
      elements.forEach((el) => {
        el.style.maxHeight = null;
      })
      elements[newValue].style.maxHeight = elements[newValue].style.scrollHeight + "px";
    }
  },
  methods: {
    tabKey(key) {
      this.tab = [false, false, false];
      this.$set(this.tab, key, true);
    },
  }
}
</script>

<style lang="scss">

.pc {
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse;

  .tab {
    color: #e0e4e4;
    position: relative;
    overflow: hidden;
    padding-bottom: 16px;
    font-family: Montserrat;
    font-weight: 100;
    line-height: 1;
    letter-spacing: 0;
    font-size: 4.5vw;
    margin-bottom: 30px;
    padding-left: 50px;
  }

  .tab-items {
    width: 50%;
    max-width: 450px;
    position: relative;

    .content-container {
      padding: 0;
    }
  }
}

.main-container {
  justify-content: space-around;
  flex-flow: row-reverse;
}

.titles {
  justify-content: space-around;
  flex-wrap: wrap
}
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