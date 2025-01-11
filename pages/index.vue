<template>
  <div>
    <div v-for="(section, i) in pageSections" :key="i">
      <component :id="section.href" :is="section.component" :section="section" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutMe from '~/components/organisms/AboutMe.vue'
import Skill from '~/components/organisms/Skill.vue'
import LanguagesTools from '~/components/organisms/LanguagesTools.vue'
import History from '~/components/organisms/History.vue'
import CurriculumVitae from '~/components/organisms/CurriculumVitae.vue'
import Portfolio from '~/components/organisms/Portfolio.vue'
import OtherContents from '~/components/organisms/OtherContents.vue'

const pageSections = shallowRef(
  [
    {
      number: '01',
      title: 'ABOUT ME',
      component: AboutMe,
      href: 'about-me'
    },
    {
      number: '02',
      title: 'SKILL',
      component: Skill,
      href: 'skill'
    },
    {
      number: '03',
      title: 'LANGUAGES TOOLS',
      component: LanguagesTools,
      href: 'languages-tools'
    },
    {
      number: '04',
      title: 'HISTORY',
      component: History,
      href: 'history'
    },
    {
      number: '05',
      title: 'CURRICULUM VITAE',
      component: CurriculumVitae,
      href: 'curriculum-vitae'
    },
    {
      number: '06',
      title: 'PORTFOLIO',
      component: Portfolio,
      href: 'portfolio'
    },
    {
      number: '07',
      title: 'OTHER CONTENTS',
      component: OtherContents,
      href: 'other-contents'
    },
  ]
)

const { loadPage, isArgCurrentHash, scrollToEnd } = useScrollToAnchorPoint()
onMounted(() => {
  nextTick(() => {
    loadPage([...pageSections.value.map(page => page.href)])
    if (isArgCurrentHash('follow-me')) {
      setTimeout(scrollToEnd, 300)
    }
  })
})

</script>

<style lang="scss">

</style>