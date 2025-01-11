<template>
  <div>
    <img class="name-logo" src="/public/images/08.png" alt="my portfolio">
    <p class="logo-text md px-4 f-11">I'm a Python and Javascript web developer and aiming to be a full-stack developer</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.name-logo {
  width: 100%;
  max-width: 270px;
}
.logo-text {
  max-width: 200px;
}

@media screen and (max-width: 480px) {
  .name-logo {
    width: 40%;
  }
}
</style>