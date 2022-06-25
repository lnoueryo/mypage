<template>
  <div class="main-container">
    <slot name="title"></slot>
    <div class="title-container">
      <slot class="rel z-1" name="sub-title"></slot>
      <div class="main-content-container">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.main-container {
  padding: 50px 6.25vw 0 6.25vw;
  flex-direction: row-reverse;
  position: relative;
  z-index: 1;
}

.title-container {
  padding: 30px 20px;
}

.main-content-container {
  margin: 15px;
  position: relative;
}
</style>