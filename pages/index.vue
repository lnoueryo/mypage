<template>
  <div>
    <div id="wrapper">
      <main>
        <div id="main-wrapper">
          <div v-for="(component, i) in components" :key="i">
            <div :is="component.name" :section="addNumber(component, i)"></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    components: [
      {title: 'ABOUT ME', name: 'ViewsAboutMe'},
      {title: 'SKILL', name: 'ViewsSkill'},
      {title: 'LANGUAGES TOOLS', name: 'ViewsLanguagesTools'},
      {title: 'HISTORY', name: 'ViewsHistory'},
      {title: 'CURRICULUM VITAE', name: 'ViewsCurriculumVitae'},
      {title: 'PORTFOLIO', name: 'ViewsPortfolio'},
      {title: 'OTHER CONTENTS', name: 'ViewsOtherContents'},
    ]
  }),
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    addNumber(component, i) {
      i += 1;
      component['number'] = '0' + i
      return component;
    },
    getTargetWidth() {
      this.show[1].transform = `translateX(${this.$refs.carouselFlame.clientWidth}px)`;
      this.show[2].transform = `translateX(-${this.$refs.carouselFlame.clientWidth - 50}px)`;
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.getTargetWidth()
    },
  }
}
</script>

<style lang="scss">
#wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  overflow: hidden;
}

#header-wrapper {
  width: 100%;
  position: relative;
  background-size: cover;
  background-color: black;
}

#main-wrapper {
  width: 100%;
  position: relative;
  background-color: transparent;
  background-size: cover;
  padding-bottom: 130px;
}

</style>