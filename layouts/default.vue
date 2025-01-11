<template>
  <div id="wrapper">
    <MainHeader :navigationItems="navigationItems" />
    <NuxtPage />
    <MainFooter :navigationItems="navigationItems" />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '~/components/views/MainHeader.vue'
import MainFooter from '~/components/views/MainFooter.vue'
const navigationItems = computed(() => {
  return [
    {title: 'TOP', href: 'top'},
    {title: 'ABOUT ME', name: 'ViewsAboutMe', href: 'about-me'},
    {title: 'SKILL', name: 'ViewsSkill', href: 'skill'},
    {title: 'LANGUAGES TOOLS', name: 'ViewsLanguagesTools', href: 'languages-tools'},
    {title: 'HISTORY', name: 'ViewsHistory', href: 'history'},
    {title: 'CURRICULUM VITAE', name: 'ViewsCurriculumVitae', href: 'curriculum-vitae'},
    {title: 'PORTFOLIO', name: 'ViewsPortfolio', href: 'portfolio'},
    {title: 'OTHER CONTENTS', name: 'ViewsOtherContents', href: 'other-contents'},
    {title: 'FOLLOW ME', href: 'follow-me'},
  ]
})
</script>