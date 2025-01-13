<template>
  <Card class="para" color="rgba(25, 25, 25, 0.6588235294)">
    <Tabs
      v-model="companyTab"
      grow
      bg-color="#353535"
      active-color="#531945"
      slider-color="#531945"
      :items="items.map(item => { return {title: item.company, key: item.company, item}})"
      @click="onClickCompanyTab"
    >
      <template #content="{ item }: {item: CurriculumVitae}">
        <Tabs
          grow
          density="compact"
          bg-color="#464646"
          active-color="#411c55"
          slider-color="#361a5e"
          :items="item.projects.map(item => { return {title: item.title, key: item.title, item}})"
          @click="onClickProjectTab"
        >
          <template #content="{ item: project }: { item: Project}">
            <div class="pa-8 content-container text-white">
              <div class="mincho d-flex align-center">
                <h3 class="fw-bold">{{ project.title }}</h3>
                <div class="pc-only">
                  <div class="d-flex mx-4">
                    <div>
                      <span class="mx-2">{{ changeFormat(project.duration.start) }}</span>
                      <span>～</span>
                      <span class="mx-2">{{ changeFormat(project.duration.end)}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="summery">
                  <div class="mb-4">
                    <h5 class="mincho">【概要】</h5>
                    <p class="para px-4" v-for="(summery, i) in project.summaries" :key="i">
                      {{ summery }}
                    </p>
                  </div>
                  <div class="mb-4">
                    <h5 class="mincho">【担当業務】</h5>
                    <ul>
                      <li class="para px-4" v-for="(role, i) in project.roles" :key="i">
                        ・{{ role }}
                      </li>
                    </ul>
                  </div>
                  <div class="mb-4">
                    <h5 class="mincho">【業務実績】</h5>
                    <div class="para px-4" v-for="(achievement, i) in project.achievements" :key="i">
                      <div v-html="achievement"></div>
                    </div>
                  </div>
                </div>
                <div class="mx-4 pc-only w-33">
                  <h5 class="mincho">【開発環境】</h5>
                  <div class="px-4">
                    <ul>
                      <li v-for="(environment, i) in project.environments" :key="i">
                        <h5 class="mincho">{{ environment.type }}</h5>
                        <ul class="mb-4">
                          <li class="para d-flex align-center" v-for="(content, j) in environment.contents" :key="j">
                            <figure class="mr-2 d-flex align-center">
                              <img :src="content.image || '/30.png'">
                            </figure>
                            <figcaption>{{ content.name }}</figcaption>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Tabs>
      </template>
    </Tabs>
  </Card>
</template>

<script setup lang="ts">
type Project = {
  title: string
  summaries: string[]
  roles: string[]
  achievements: string[]
  duration: {
    start: string
    end: string
  }
  environments: {
    type: string
    contents: {
      name: string
      image: string
    }[]
  }[]
}
type CurriculumVitae = {
  company: string
  business: string
  capitalStock: string
  employees: number
  projects: Project[]
}
const props = defineProps({
  items: {
    type: Array as () => CurriculumVitae[],
    default: () => []
  }
})
const { sendGtag } = useGtag()
const companyTab = ref(props.items[0].company)

const changeFormat = (texts: string) => {
  if(!texts) return '現在'
  texts = texts.replace('-', '年' )
  texts += '日'
  return texts
}
const onClickCompanyTab = (item: CurriculumVitae) => {
  sendGtag('click_curriculum_vitae', {
    tab: item.company,
    location: window.location.href,
  })
}
const onClickProjectTab = (item: Project) => {
  sendGtag('click_curriculum_vitae', {
    tab: item.title,
    location: window.location.href,
  })
}
</script>

<style lang="scss" scoped>
ul li {
  padding-left: 1em;
}
figure {
  max-width: 20px;
}
.mincho {
  font-family: "\6E38\660E\671D\4F53",Yu Mincho,YuMincho,"\30D2\30E9\30AE\30CE\660E\671D Pro",Hiragino Mincho Pro,"Noto Serif JP",serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2em;
  line-height: 2;
}

.summery {
  width: 66%;
  overflow: scroll;
  max-height: 800px;
  min-height: 100vh;
}

@media screen and (max-width: 768px) {
  .summery {
    width: 100%;
  }
  .tab-content {
    padding: 20px 20px 0 0;
  }
}

@media screen and (max-width: 480px) {
  .mincho {
    font-size: 3.5vw;
    letter-spacing: .2em;
    line-height: 2;
  }
  .mincho h3 {
    font-size: 4vw;
    letter-spacing: .2em;
    line-height: 2;
  }
  a.btn-flat {
    padding: 2vw 4vw;
    font-size: 2vw;
  }
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

</style>