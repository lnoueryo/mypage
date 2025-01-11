<template>
  <div id="wrapper">
    <header>
      <Header :navigationItems="navigationItems" />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <Footer :navigationItems="navigationItems" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
const navigationItems = computed(() => {
  return [
    {title: 'TOP'},
    {title: 'ABOUT ME', href: 'about-me'},
    {title: 'SKILL', href: 'skill'},
    {title: 'LANGUAGES TOOLS', href: 'languages-tools'},
    {title: 'HISTORY', href: 'history'},
    {title: 'CURRICULUM VITAE', href: 'curriculum-vitae'},
    {title: 'PORTFOLIO', href: 'portfolio'},
    {title: 'OTHER CONTENTS', href: 'other-contents'},
    {title: 'FOLLOW ME', href: 'follow-me'},
  ]
})
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 3;
}
footer {
  position: relative;
  z-index: 1;
}
</style>