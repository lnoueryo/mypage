<template>
  <div>
    <header>
      <Header :navigationItems />
    </header>
    <main>
      <div v-for="(section, i) in pageSections" :key="i">
        <component :id="section.href" :is="section.component" :section="section" />
      </div>
    </main>
    <footer>
      <Footer :navigationItems />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AboutMe from '~/components/organisms/AboutMe.vue'
import Skill from '~/components/organisms/Skill.vue'
import LanguagesTools from '~/components/organisms/LanguagesTools.vue'
import History from '~/components/organisms/History.vue'
import CurriculumVitae from '~/components/organisms/curriculum-vitae/CurriculumVitae.vue'
import Portfolio from '~/components/organisms/portfolio/Portfolio.vue'
import OtherContents from '~/components/organisms/OtherContents.vue'

const pageSections = computed(() => {
  return   [
    {
      title: 'ABOUT ME',
      component: AboutMe,
      href: 'about-me'
    },
    {
      title: 'SKILL',
      component: Skill,
      href: 'skill'
    },
    {
      title: 'LANGUAGES TOOLS',
      component: LanguagesTools,
      href: 'languages-tools'
    },
    {
      title: 'HISTORY',
      component: History,
      href: 'history'
    },
    {
      title: 'CURRICULUM VITAE',
      component: CurriculumVitae,
      href: 'curriculum-vitae'
    },
    // {
    //   title: 'PORTFOLIO',
    //   component: Portfolio,
    //   href: 'portfolio'
    // },
    {
      title: 'OTHER CONTENTS',
      component: OtherContents,
      href: 'other-contents'
    },
  ].map((item, i) => {
    return {
      ...item,
      number: i + 1,
    }
  })
})

const { loadPage, isArgCurrentHash, scrollToEnd } = useScrollToAnchorPoint()
onMounted(() => {
  nextTick(() => {
    loadPage([...pageSections.value.map(page => page.href)])
    if (isArgCurrentHash('follow-me')) {
      setTimeout(scrollToEnd, 300)
    }
  })
})
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
const navigationItems = computed(() => {
  return [
    {title: 'TOP'},
    ...pageSections.value,
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