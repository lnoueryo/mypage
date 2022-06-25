<template>
  <div>
    <section-wrapper :wrapper="wrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="02" title="SKILL" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <p class="message tra"><span>WORK HARD ON</span><br class="pc-only">
              <span class="adjust">EVERYTHING ANYWAY</span><br>
              <span class="adjust2">EVEN THOUGH IT IS HOBBY</span>
            </p>
          </transition>
        </template>
        <template #content>
          <transition name="bottom">
            <div class="flex rel mb-2">
              <div class="front-end">
                <div class="content-container1">
                  <div class="sec_title mt-4">フロントエンド</div>
                  <p class="para">主にAngularJSを使うことが多いが、システムの改修に伴い、Vue.jsを使うこともある。</p>
                  <p class="para">Google Maps APIを使ったシステムに携わることが多く、主にMaps、Placesが多い。</p>
                  <p class="para">個人開発ではNuxt.jsを主軸にVuetify、VueRouter、Vuexを使ったSPA開発をTypeScriptを用いて行っている。</p>
                </div>
              </div>
              <div id="vue">
                <img style="filter: grayscale(80%)  brightness(.7);" src="~/assets/image/icons/nuxt.png" alt="">
              </div>
            </div>
          </transition>
          <transition name="bottom">
            <div class="flex" style="margin-bottom: 20px;position: relative;">
              <div class="back-end">
                <div class="content-container1">
                  <div class="sec_title mt-40">バックエンド</div>
                  <p class="para">Pythonのフレームワーク、Djangoを使用している。主にデータ連携の部分を担当しており、そのデータは200MBから最大4GB、レコード数にして80万〜800万件ほどの量である。</p>
                  <p class="para">個人開発ではGoを使用しており、SPAのAPIを作成。</p>
                </div>
              </div>
              <div class="abs z-0" id="lara">
                <img class="img-filter" src="~/assets/image/icons/go.png" alt="">
              </div>
            </div>
          </transition>
          <div class="content-container3 mb-4 rel z-1">
            <div class="sec_title mt-4">インフラストラクチャ</div>
            <p class="para">Googleのパートナー会社ということもあり、ほとんどのリソースがGCPである場合が多い。</p>
          </div>
          <div class="content-container2 mb-4 rel z-1">
            <div class="sec_title mt-4">プライベート</div>
            <p class="para">音楽をしていたという事もあり、作曲や弦楽器の演奏ができます。</p>
            <p class="para">海外留学を経験して以来外国語に興味が持ち、日常英会話と少しの中国語が話せます。</p>
          </div>
          <p class="tra link rel z-1">
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
          </p>
        </template>
      </section-container>
      <div :style="secWrapper"></div>
    </section-wrapper>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),
  computed: {
    wrapper() {
      const path = require('~/assets/image/02.jpg')
      return {
        backgroundColor: '#000000a6',
        backgroundImage: 'url("' + path + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'right 75% bottom 50%',
        opacity: 0.9,
      }
    },
    secWrapper() {
      const path = require('~/assets/image/01.png')
      return {
        backgroundImage: 'url("' + path + '")',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.646)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.content-container {
  max-width: 550px;
}

#lara {
  left: 2vw;
  width: 100%;
  max-width: 400px;
  transform: rotate3d(10, 20, 20, 30deg);
}

#vue {
  position: absolute;
  z-index: 0;
  bottom: -3vw;
  right: 7vw;
  width: 100%;
  max-width: 300px;
}

.front-end {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: auto;
  padding-right: 18.375vw;
}

.back-end {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: auto;
  padding-left: 30.375vw;
}
</style>