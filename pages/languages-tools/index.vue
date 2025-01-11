<template>
  <div id="languages-tools" class="rel">
    <SectionWrapper :wrapper="wrapper">
      <SectionContainer>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="03" title="LANGUAGES TOOLS" />
          </transition>
        </template>
        <template #content>
          <div>
            <div>
              <v-row align="center">
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="3"
                >
                  <v-select
                    :items="tools"
                    outlined
                    v-model="tool"
                    menu-props="auto"
                    label="種類"
                  ></v-select>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="3"
                >
                  <v-select
                    :items="experienceItems"
                    outlined
                    v-model="experience"
                    menu-props="auto"
                    label="使用経験"
                  ></v-select>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="3"
                >
                  <v-select
                    :items="recentItems"
                    outlined
                    v-model="recent"
                    menu-props="auto"
                    label="直近の技術"
                  ></v-select>
                </v-col>
              </v-row>
            </div>
            <div class="w100 rel pc-only d-flex justify-end">
              <v-btn text color="red darken-1" class="tra" to="/#languages-tools">
                BACK→
              </v-btn>
            </div>
            <div class="mb-8 carousel-container">
          <div class="card-container d-flex flex-wrap">
            <!-- 準備中 -->
            <div class="d-flex align-strech" v-for="(item, i) in sortedTools" :key="i" @click.prevent.stop="onClickTool(item.title)">
              <CardImage class="d-flex align-strech" :item="item" max-width="270" img-width="150" img-height="150">
                <template #sub>
                  <ToolRate class="ml-4" :rate="item.rate" />
                </template>
                <template #bottom>
                  <div>
                    {{ displayDate(item.total) }}
                  </div>
                </template>
              </CardImage>
            </div>
          </div>
            </div>
          </div>
        </template>
      </SectionContainer>
      <!-- <Grain></Grain> -->
      <div :style="secWrapper"></div>
    </SectionWrapper>
  </div>
</template>

<script>
import languagesTools from "~/assets/json/languages-tools";
export default {
  layout: 'detail',
  data: () => ({
    languagesTools: [],
    tools: [
      '全て',
      '言語・フレームワーク',
      'OS・ミドルウェア',
      'インフラ',
    ],
    tool: '全て',
    experienceItems: [
      '全て',
      '業務',
      '個人開発',
    ],
    experience: '全て',
    recentItems: [
      '全て',
      '1年',
      '2年',
    ],
    recent: '全て',
  }),
  computed: {
    wrapper() {
      const path = require("~/assets/image/24.jpg");
      return {
        position: "relative",
        backgroundImage: 'url("' + path + '")',
        backgroundSize: "cover",
        backgroundPosition: "right 75% bottom 50%",
        opacity: 0.9,
      };
    },
    secWrapper() {
      return {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#00000096",
        zIndex: -1,
      };
    },
    skillURL() {
      return "https://docs.google.com/document/d/1Qy3eKSjlN9-Xywc7m06J4Ba5TjqxxA7YqVuXPbtjtLQ/edit#heading=h.de3jguofxwzy";
    },
    filterToolCategories() {
      if(this.tool == '全て') {
        return this.languagesTools.map((tool) => tool.items).flat();
      }
      if (this.tool == '言語・フレームワーク') {
        return this.languagesTools.find((tool) => tool.name == 'languages').items;
      }
      if (this.tool == 'OS・ミドルウェア') {
        return this.languagesTools.find((tool) => tool.name == 'environments').items;
      }
      if (this.tool == 'インフラ') {
        return this.languagesTools.find((tool) => tool.name == 'infrastructures').items;
      }
      return []
    },
    filteredTools() {
      return this.filterToolCategories.filter((tool) => {
        const handson = this.experience == '全て' || (this.experience == '業務' ? tool.handson == 1 : tool.handson == 0);
        const recent = this.recent == '全て' || this.filterTerm(tool.durations);
        return handson && recent;
      })
    },
    sortedTools() {
      return this.sortTools(this.filteredTools);
    }
  },
  created() {
    this.languagesTools = this.preprocessTools(languagesTools)
  },
  methods: {
    onClickTool(name) {
      this.$gtag('event', 'click', {
        event_category: 'ツール',
        event_label: name,
      })
    },
    preprocessTools(languagesTools) {
      languagesTools.forEach((tools) => {
        tools['items'] = tools.items.map((tool) => {
          let total = 0;
          tool.durations.forEach((duration) => {
            const start = new Date(duration.start);
            const end = duration.end ? new Date(duration.end) : new Date();
            total += this.diffMonth(start, end);
          });
          tool['total'] = total;
          return tool;
        })
        return tools;
      });
      return languagesTools;
    },
    diffMonth(d1, d2) {
      let d1Month, d2Month;
      d1Month = d1.getFullYear() * 12 + d1.getMonth();
      d2Month = d2.getFullYear() * 12 + d2.getMonth();
      return d2Month - d1Month;
    },
    displayDate(num) {
      const year = Math.floor(num / 12);
      const underOneYear = year == 0;
      const justYear = num % 12 == 0;
      if(underOneYear) return num + 'か月';
      if(justYear) return year + '年'
      const month = num % 12;
      return year + '年' + month + 'か月';
    },
    filterTerm(durations) {
      return durations.some((duration) => {
        const durationStart = new Date(duration.start);
        const durationEnd = duration.end ? new Date(duration.end) : new Date();
        const start = new Date();
        const end = new Date();
        let durationNum;
        if(this.recent == '1年') durationNum = -1;
        if(this.recent == '2年') durationNum = -2;
        start.setFullYear(start.getFullYear() + durationNum);
        end.setFullYear(start.getFullYear() + 1);
        const firstCondition = start.valueOf() < durationStart.valueOf() || start.valueOf() < durationEnd.valueOf()
        const secondCondition = durationStart.valueOf() <= end.valueOf()
        return firstCondition && secondCondition;
      });
    },
    sortTools(tools) {
      const isInvalidDate = (date) => Number.isNaN(date.getTime());
      let sortedTools;
      if(this.recent != '全て') {
        sortedTools = tools.sort((a, b) => {
          let aDate = new Date(a.durations[a.durations.length - 1].end)
          if(isInvalidDate(aDate)) aDate = new Date()
          let bDate = new Date(b.durations[b.durations.length - 1].end)
          if(isInvalidDate(bDate)) bDate = new Date()
          return aDate.valueOf() - bDate.valueOf();
        })
      } else {
        sortedTools = tools.sort((a, b) => {
          return a.id - b.id;
        })
      }

      return sortedTools;
    }
  },
};
</script>


<style lang="scss" scoped>
.carousel-container {
  overflow: hidden;
  opacity: 1
}
.sp-only {
  display: none;
}
@media screen and (max-width: 480px) {
  .pc-only {
    display: none;
  }
  .sp-only {
    display: block;
  }
}
</style>