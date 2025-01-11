<template>
  <div class="tabs">
    <div>
      <div class="company w100 d-flex">
        <label :for="item.company" class="company-item" :class="{'active': companyTab == item.company}" v-for="item in items" :key="item.company" :style="{width: `calc(100% / ${items.length})`}" @click="onClickTab">
          <input :id="item.company" name="company" type="radio" v-model="companyTab" :value="item.company" class="none">
          <span class="pc-only">{{ item.company }}</span>
          <span class="sp-only" v-html="divideText(item.company)"></span>
        </label>
      </div>
      <div class="tab-wrapper">
        <div class="sp-only">
          <div class="d-flex tra justify-between pa-4">
            <a class="btn btn-flat left" @click="onClickChangeChange(-1)">
              <i class="fas fa-angle-left fa-position-left"></i>
              <span>BACK</span>
            </a>
            <a class="btn btn-flat right" @click="onClickChangeChange(1)">
              <span>NEXT</span>
              <i class="fas fa-angle-right fa-position-right"></i>
            </a>
          </div>
        </div>
        <transition name="main">
          <div class="tab-content d-flex" v-if="content">
            <div class="tab-container pr-4 pc-only">
              <label :for="project.title" class="tab-item" v-for="project in selectedCompany.projects" :key="project.title" :class="{'active': tab == project.title}">
                <input :id="project.title" :name="selectedCompany.company" type="radio" v-model="tab" :value="project.title" class="none">
                {{ project.title }}
              </label>
            </div>
            <transition name="main">
              <div>
                <div class="content-container" v-if="container">
                  <div class="mincho d-flex align-center">
                    <h3 class="fw-bold">{{ selectedTab.title }}</h3>
                    <div class="pc-only">
                      <div class="d-flex mx-4">
                        <div>
                          <span class="mx-2">{{ changeFormat(selectedTab.duration.start) }}</span>
                          <span>～</span>
                          <span class="mx-2">{{ changeFormat(selectedTab.duration.end)}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="summery">
                      <div class="mb-4">
                        <h5 class="mincho">【概要】</h5>
                        <div class="para px-4" v-for="(summery, i) in selectedTab.summaries" :key="i">
                          {{ summery }}
                        </div>
                      </div>
                      <div class="mb-4">
                        <h5 class="mincho">【担当業務】</h5>
                        <div class="para px-4" v-for="(role, i) in selectedTab.roles" :key="i">
                          ・{{ role }}
                        </div>
                      </div>
                      <div class="mb-4">
                        <h5 class="mincho">【業務実績】</h5>
                        <div class="para px-4" v-for="(achievement, i) in selectedTab.achievements" :key="i">
                          <div v-html="achievement"></div>
                        </div>
                      </div>
                    </div>
                    <div class="mx-4 pc-only" style="width: 30%">
                      <h5 class="mincho">【開発環境】</h5>
                      <div class="px-4">
                        <div class="mb-4" v-for="(environment, i) in selectedTab.environments" :key="i">
                          <h5 class="mincho" style="font-size: 18px">{{ environment.type }}</h5>
                          <div class="para d-flex align-center" v-for="(content, j) in environment.contents" :key="j">
                            <div class="mr-2 d-flex align-center" style="max-width: 18px"><img :src="content.image || '/30.png'"></div>
                            <div v-html="content.name"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data: () => ({
    companyTab: '',
    tab: '',
    content: true,
    container: false,
    timeout: 250,
  }),
  computed: {
    selectedCompany() {
      return this.items.find((item) => item.company == this.companyTab) || {}
    },
    selectedTab() {
      return this.selectedCompany.projects.find((project) => project.title == this.tab) || {}
    },
  },
  watch: {
    companyTab: {
      handler() {
        this.content = false
        this.tab = this.selectedCompany.projects[0].title;
        setTimeout(() => {
          this.content = true;
        }, this.timeout)
      }
    },
    tab: {
      handler() {
        this.container = false
        setTimeout(() => {
          this.container = true;
        }, this.timeout);
      }
    },
  },
  created() {
    this.companyTab = this.items[0].company;
    this.tab = this.selectedCompany.projects[0].title;
  },
  methods: {
    divideText(texts) {
      const html = texts.replace( /(株式会社)/g, '$1<br>' );
      return html;
    },
    changeFormat(texts) {
      if(!texts) return '現在';
      texts = texts.replace('-', '年' );
      texts += '日';
      return texts;
    },
    onClickTab() {
      this.$gtag("event", this.tab, {
        event_category: "職務経歴",
        event_label: this.companyTab,
      });
    },
    onClickChangeChange(num) {
      const index = this.selectedCompany.projects.findIndex((project) => project.title == this.tab);
      let nextIndex = index + num;
      if(nextIndex == -1) nextIndex = this.selectedCompany.projects.length - 1;
      if(nextIndex > this.selectedCompany.projects.length - 1) nextIndex = 0;
      this.tab = this.selectedCompany.projects[nextIndex].title;
    },
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-top: 50px;
  padding-bottom: 40px;
  // background-color: #fff;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  .company {
    background-color: #353535;
    // background-color: rgb(25, 83, 74);
    border-radius: 3px 3px 0 0;
    text-align: center;
    border-bottom: 3px solid #531945;

    .company-item {
      padding: 10px 20px;
      transition: all .5s ease;
      cursor: pointer;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .company-item:hover {
      opacity: .75;
      transition: all .5s ease;
    }

    @media screen and (max-width: 480px) {
      .company-item {
        padding: 5px 10px;
        transition: all .5s ease;
        cursor: pointer;
        font-size: 1.8vw;
      }
    }
  }

  /*タブ切り替えの中身のスタイル*/
  .tab-wrapper {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #191919;
    background-color: #191919a8;
    // background-color: #d9d9d9;
    height: 900px;
    transition: 1s;

    /*タブ切り替えの中身のスタイル*/
    .tab-content {
      padding: 0 40px 0 0;
      clear: both;
      overflow: hidden;

      .tab-container {
        // background-color: #d9d9d900;
        writing-mode: vertical-rl;
        text-orientation: upright;
        min-height: 900px;

        /*タブのスタイル*/
        .tab-item {
          border-bottom: 3px solid #531945;
          // border-bottom: 3px solid #5ab4bd;
          background-color: #353535;
          // background-color: #d9d9d9;
          line-height: 20px;
          font-size: 13px;
          // color: #565656;
          display: block;
          float: left;
          font-weight: bold;
          transition: all .5s ease;
          padding: 10px 5px;
          cursor: pointer;
        }

        .tab-item:hover {
          opacity: 0.75;
          transition: all .5s ease;
        }


        /*選択されているタブのスタイル を変える*/
        .active {
          background-color: #531945;
          color: #fff;
        }
      }
      @media screen and (max-width: 768px) {
        .tab-container {
          max-height: 400px;
        }
      }
    }

    .content-container {
      max-height: 900px;
      overflow-y: scroll;
      scrollbar-width: none;
      padding: 20px;
    }
    .content-container::-webkit-scrollbar{
      display: none;
    }
    @media screen and (max-width: 768px) {
      .tab-content {
        padding: 0;
      }
      .content-container {
        max-height: 400px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .tab-wrapper {
      height: 500px;
    }
  }
}

/*選択されているタブのスタイル を変える*/
.active {
  background-color: #531945;
  color: #fff;
}

.mincho {
  font-family: "\6E38\660E\671D\4F53",Yu Mincho,YuMincho,"\30D2\30E9\30AE\30CE\660E\671D Pro",Hiragino Mincho Pro,"Noto Serif JP",serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2em;
  line-height: 2;
}

.summery {
  width: 70%;
}

@media screen and (max-width: 768px) {
  .summery {
    width: 100%;
  }
  .tab-content {
    padding: 20px 20px 0 0;
  }
}

.main-enter-active, .main-leave-active {
    transition: opacity .5s;
}
.main-enter, .main-leave-to {
    opacity: 0;
}
.name-enter-active, .name-leave-active {
    transition: all .5s;
}
.name-enter, .name-leave-to {
    opacity: 0;
    // transform: translateX(0px);
}

/*その他と主な共通部分は省略*/

a.btn-flat {
  overflow: hidden;
  padding: 10px 20px;
  color: #fff;
  border-radius: 0;
  background: #35353545;
  display: inline-block;
  position: relative;
  font-weight: bold;
}

a.btn-flat span {
  position: relative;
}

a.btn-flat:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}

a.btn-flat.left:before {
  -webkit-transform: translateX(96%);
  transform: translateX(96%);
  background: #531945;
}

a.btn-flat.right:before {
  -webkit-transform: translateX(-96%);
  transform: translateX(-96%);
  background: #531945;
}

a.btn-flat:hover:before {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
}

a.btn-flat.right:after {
  -webkit-transform: translateX(96%);
  transform: translateX(96%);
  background: #531945;
}

a.btn-flat.left:after {
  -webkit-transform: translateX(-96%);
  transform: translateX(-96%);
  background: #531945;
}

a.btn-flat i {
  position: relative;
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


</style>