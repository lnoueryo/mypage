<template>
  <div class="main-container" :style="mainContainer">
    <slot name="title" />
    <div class="title-container">
      <slot class="rel z-1" name="sub-title" />
      <div class="main-content-container">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainContainer: Object
  }
}
</script>

<style lang="scss" scoped>

.main-container {
  padding: 50px 80px 0 80px;
  flex-direction: row-reverse;
  position: relative;
  z-index: 1;
}

.title-container {
  padding: 30px 20px;
}

.main-content-container {
  margin: 30px 15px;
  position: relative;
}

@media screen and (max-width: 480px) {
  .title-container {
    padding: 30px 0;
  }
  .main-content-container {
    margin: 0 15px;
    position: relative;
  }
.main-container {
  padding: 50px 20px 0 20px;
  flex-direction: row-reverse;
  position: relative;
  z-index: 1;
  }
}
</style>