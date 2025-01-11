<template>
  <div>
    <div id="wrapper">
      <main>
        <div id="main-wrapper">
          <div v-for="(section, i) in pageSections" :key="i">
            <component :id="section.href" :is="section.component" :section="addNumber(section, i)" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutMe from '~/components/views/AboutMe.vue'
import Skill from '~/components/views/Skill.vue'
import LanguagesTools from '~/components/views/LanguagesTools.vue'
import History from '~/components/views/History.vue'
import CurriculumVitae from '~/components/views/CurriculumVitae.vue'
import Portfolio from '~/components/views/Portfolio.vue'
import OtherContents from '~/components/views/OtherContents.vue'
type Section = {
  title: string
  number?: string
}
const pageSections = shallowRef(
  [
    // {title: 'TOP', href: 'top'},
    {title: 'ABOUT ME', component: AboutMe, href: 'about-me'},
    {title: 'SKILL', component: Skill, href: 'skill'},
    {title: 'LANGUAGES TOOLS', component: LanguagesTools, href: 'languages-tools'},
    {title: 'HISTORY', component: History, href: 'history'},
    {title: 'CURRICULUM VITAE', component: CurriculumVitae, href: 'curriculum-vitae'},
    {title: 'PORTFOLIO', component: Portfolio, href: 'portfolio'},
    {title: 'OTHER CONTENTS', component: OtherContents, href: 'other-contents'},
    // {title: 'FOLLOW ME', href: 'follow-me'},
  ]
)
const addNumber = (section: Section, i: number) => {
  i += 1
  section['number'] = '0' + i
  return section
}

const { loadPage } = useScrollToAnchorPoint()
onMounted(() => {
  nextTick(() => {
    loadPage(pageSections.value.map(page => page.href))
  })
})

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