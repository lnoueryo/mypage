<template>
  <div>
    <div id="wrapper">
      <main>
        <div id="main-wrapper">
          <div>
            <ViewsAboutMe />
          </div>
          <div>
            <ViewsSkill />
          </div>
          <div>
            <ViewsLanguagesTools />
          </div>
          <div>
            <ViewsHistory />
          </div>
          <div>
            <ViewsPortfolio />
          </div>
          <div>
            <ViewsOtherContents />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
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