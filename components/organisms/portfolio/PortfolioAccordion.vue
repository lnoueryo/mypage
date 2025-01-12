<template>
  <div class="accordion-container rel" v-for="(feature, i) in features" :key="i">
    <button class="accordion" :class="{'active': i === selectedPanel}" @click="openAccordion(i, feature.type)">
      {{ feature.type }}
    </button>
    <div ref="panelRefs" class="panel" :style="{maxHeight: i === selectedPanel ? openPanelHeight : ''}">
      <div class="panel-inner">
        <div class="acd-content">
          <p class="para" v-for="(content, j) in feature.contents" :key="j">{{ content }}</p>
        </div>
        <div class="system-image" :style="{backgroundImage: `url(${feature.image})`}" v-show="feature.image">
          <div class="filter"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Feature = {
  type: string
  image: string,
  contents: string[]
}
defineProps({
  features: {
    type: Array as () => Feature[]
  }
})
const { sendGtag } = useGtag()
const panelRefs = ref<HTMLDivElement[]>([])
const selectedPanel = ref(0)
const openPanelHeight = ref('')
const openAccordion = (i: number, name: string) => {
  if (selectedPanel.value === i) return // この条件をなくすと全部閉めることが可能になる
  selectedPanel.value = i
  const panel = panelRefs.value[i]
  openPanelHeight.value = panel.scrollHeight + "px"
  sendGtag('click_portfolio_accordion', {
    name,
    location: window.location.href,
  })
}
onMounted(() => {
  const panel = panelRefs.value[0]
  openPanelHeight.value = panel.scrollHeight + 'px'
})
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
  // padding: 20px 30px;
  // background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.panel-inner {
  padding: 30px 40px;
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

.system-image {
  height: 100%;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  background-size: 100%;
}

.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #2d3f4d42;
}

</style>