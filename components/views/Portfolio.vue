<template>
  <div id="portfolio">
    <section>
      <div class="wrapper">
        <div class="sec-wrapper flex rel">
          <p class="tra abs z-2 link">
            <a target="_blank" href="https://docs.google.com/presentation/d/1OWL1rnQQY9D_Vbecd7p7EayQgLnIkIvP15OC0xNNtpY/edit#slide=id.p1">DESCRIPTION→</a>
          </p>
          <img src="~/assets/image/14.png" class="rel z-0">
          <transition name="bottom">
            <div class="abs z-1 w-100 content-wrapper">
              <div class="content-container w-50">
                <div>
                  <section-title titleNum="05" title="PORTFOLIO" />
                  <div class="main-content-container">
                    <p class="para">Nuxt.jsとGoを使ったタスク管理アプリ。</p>
                    <p class="para">業務であまり利用していないGCPのリソースでインフラを構成。</p>
                  </div>
                </div>
              </div>
              <div id="special" class="message w-50 text-center tra px-4">
                <p><span>REACH OUT FOR</span><br>
                  <span>MODERN</span><br>
                  <span>TECHNOLOGY</span><br>
                </p>
              </div>
            </div>
          </transition>
        </div>
        <section-wrapper>
          <section-container>
            <template #sub-title>
              <transition name="bottom">
                <div class="message tra">
                  <div class="mb-8">PUZZLES<br class="pc-only"></div>
                  <div class="puzzle-title show">切り分けたタスクを繋げて、</div>
                  <div class="puzzle-title adjust show">プロジェクトを完成</div>
                </div>
              </transition>
            </template>
            <template #content>
              <div class="mb-8">
                <ViewsPortfolioMain />
                <ViewsPortfolioDescription :items="portfolio.descriptions" />
                <ViewsPortfolioSystem :features="portfolio.features"/>
              </div>
              <p class="tra link rel z-1">
                <a target="_blank" :href="specificationURL">CURRICULUMVITAE→</a>
              </p>
            </template>
          </section-container>
          <div></div>
        </section-wrapper>
      </div>
    </section>
  </div>
</template>

<script>
import portfolio from '~/assets/json/portfolio.json'
export default {
  data: () => ({
    portfolio: portfolio,
  }),
  computed: {
    specificationURL() {
      return 'https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0';
    }
  },
}
</script>

<style lang="scss" scoped>
#special.message {
  width: 50%;
  margin-left: 0;
  margin-bottom: 0;
  z-index: 1;
  position: relative;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-size: 3.75vw;
  letter-spacing: .02em;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
}

.wrapper {
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-image: black;
}

.sec-wrapper {
  max-width: 2000px;
  margin: auto;
}

.content-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}

.main-content-container {
  margin: 15px;
  position: relative;
}

.link {
  font-size: 2.5vw;
  right: 6.25vw;
  bottom: 5%;
}

.content-container {
  background-color: black;
  padding: 150px 50px;
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
}

.show {
  display: none;
}

.puzzle-title {
  font-size: 31px;
}

.adjust {
  margin-left: 30vw
}

@media screen and (max-width: 1168px) {
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .content-container {
    height: 100%;
  }
  .link {
    font-size: 4vw;
  }
}

@media screen and (max-width: 480px) {
  .content-container {
    padding: 50px 18px;
  }
  .para {
    padding: 0;
  }
  .puzzle-title {
    font-size: 5.2vw;
  }
  .adjust {
    margin-left: 0
  }
}

</style>