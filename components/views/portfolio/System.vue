<template>
  <div>
    <!-- <div class="pc">
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
    </div> -->
    <!-- <div class="sp">
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
    </div> -->
    <div class="accordion-container rel" v-for="(feature, i) in features" :key="i">
      <button ref="button" class="accordion" @click="openAccordion">
        {{ feature.type }}
      </button>
      <div ref="panel" class="panel">
        <div class="acd-content">
          <p class="para" v-for="(content, j) in feature.content" :key="j">{{ content }}</p>
        </div>
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
  watch: {
    accordion(oldValue, newValue) {
      const elements = this.$refs.accordion;
      elements.forEach((el) => {
        el.style.maxHeight = null;
      })
      elements[newValue].style.maxHeight = elements[newValue].style.scrollHeight + "px";
    }
  },
  mounted() {
    const button = this.$refs.button[0]
    const panel = this.$refs.panel[0]
    button.classList.toggle("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
  },
  methods: {
    openAccordion(e) {
      const buttons = this.$refs.button;
      const panels = this.$refs.panel;
      /** activeを一度全て削除 */
      buttons.forEach((el) => {
        el.classList.remove('active');
      })
      /** activeだったアコーディオンを再度クリックした場合 */
      const panel = e.target.nextElementSibling;
      e.target.classList.toggle("active");
      if (panel.style.maxHeight) return;

      /** 開く */
      panels.forEach((el) => {
        el.style.maxHeight = null;
      })
      // e.target.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    },
    tabKey(key) {
      this.tab = [false, false, false];
      this.$set(this.tab, key, true);
    },
  }
}
</script>

<style lang="scss" scoped>
.accordion-container {
  max-width: 1500px;
}
.accordion {
  background-color: #20272d;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
  font-family: Montserrat;
  font-weight: 100;
  line-height: 1;
  letter-spacing: 0;
  font-size: 4.5vw;
}

.active, .accordion:hover {
  background-color: #3c4954;
}

.panel {
  border: 2px solid #20272d;
  padding: 0 18px;
  // background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

/*非表示をコメントアウトしています*/
/*
.acd-check{
    display: none;
}
*/
.ac-label{
    background: #454545;
    color: #fff;
    display: block;
    margin-bottom: 1px;
    padding: 10px;
}
.ac-content{
    border: 1px solid #454545;
    max-height: 0;
    opacity: 0;
    padding: 0 10px;
    transition: .5s;
    visibility: hidden;
}
.ac-check:checked + .ac-label + .ac-content{
    // height: 50px;
    opacity: 1;
    padding: 5px 10px;
    visibility: visible;
}

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