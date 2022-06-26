<template>
  <div>
    <div class="accordion-container rel" v-for="(feature, i) in features" :key="i">
      <button ref="button" class="accordion" @click="openAccordion($event, feature.type)">
        {{ feature.type }}
      </button>
      <div ref="panel" class="panel">
        <div class="acd-content">
          <p class="para" v-for="(content, j) in feature.contents" :key="j">{{ content }}</p>
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
  mounted() {
    const button = this.$refs.button[0]
    const panel = this.$refs.panel[0]
    button.classList.toggle("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
  },
  methods: {
    openAccordion(e, name) {
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

      panel.style.maxHeight = panel.scrollHeight + "px";
      this.$gtag('event', 'github', {
        event_category: 'アコーディオン',
        event_label: name,
      })
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

</style>