<template>
  <div id="skill">
    <section-wrapper>
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="02" title="SKILL" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>I'VE BEEN LEARNING<br class="pc-only"></div>
              <div class="adjust">SOFTWARE DEVELOPMENT</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="content-container">
            <div class="flex rel mb-8">
              <div class="front-end">
                <div class="sec_title mt-4">フロントエンド</div>
                <p class="para">主にAngularJSを使うことが多いが、システムの改修に伴い、Vue.jsを使うこともある。</p>
                <p class="para">Google Maps APIを使ったシステムに携わることが多く、主にMaps、Placesが多い。</p>
                <p class="para">個人開発ではNuxt.jsを主軸にVuetify、VueRouter、Vuexを使ったSPA開発をTypeScriptを用いて行っている。</p>
              </div>
              <div id="nuxt" class="image">
                <img src="~/assets/image/icons/vue.png" alt="">
              </div>
            </div>
            <div class="flex rel mb-8">
              <div class="back-end">
                <div>
                  <div class="sec_title mt-40">バックエンド</div>
                  <p class="para">Pythonのフレームワーク、Djangoを使用している。</p>
                  <p class="para">主にデータ連携の部分を担当しており、そのデータは200MBから最大4GB、レコード数にして80万〜800万件ほどの量である。</p>
                  <p class="para">個人開発ではGoを使用しており、SPAのAPIを作成。</p>
                </div>
              </div>
              <div class="image" id="go">
                <img src="~/assets/image/icons/django.png" alt="">
              </div>
            </div>
            <div class="flex rel mb-8">
              <div class="infrastructure">
                <div>
                  <div class="sec_title mt-40">インフラストラクチャ</div>
                  <p class="para">Googleのパートナー会社ということもあり、ほとんどのリソースがGCPである場合が多い。</p>
                  <p class="para">GAE、CloudRunなどのサーバーレスでシステムを構築することを得意としており、直近ではサーバーレスのIPを固定し、先方のサーバーにSFTPでファイルを取得しデータ連携を行った。</p>
                  <p class="para">個人開発ではFirebase、CloudRun、 CloudSQLを使った環境構築が多い。</p>
                </div>
              </div>
              <div class="image" id="gcp">
                <img src="~/assets/image/icons/gcp.png" alt="">
              </div>
            </div>
          </div>
          <p class="tra link rel z-1">
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
          </p>
        </template>
      </section-container>
      <div :style="wrapper"></div>
      <div :style="secWrapper"></div>
    </section-wrapper>
  </div>
</template>

<script>
export default {
  computed: {
    hueHalfValue() {
      return this.$store.getters.hueHalfValue;
    },
    wrapper() {
      const path = require('~/assets/image/02.jpg')
      const hue = `hue-rotate(${this.hueHalfValue}deg)`;
      return {
        backgroundImage: 'url("' + path + '")',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0.9,
        filter: hue,
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
        backgroundColor: 'rgba(0, 0, 0, 0.546)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.content-container {
  padding: 0 60px;
}

#go {
  left: 0;
  max-width: 300px;
  transform: rotate3d(100, 200, 20, 30deg) translateY(-50%);
}

#gcp {
  position: absolute;
  max-width: 300px;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;
}

#nuxt {
  right: 0;
  max-width: 300px;
}

.image {
  position: absolute;
  z-index: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  width: 100%;
  filter: grayscale(30%)  brightness(.7);
}

.front-end {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin-right: auto;
}

.back-end {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin-left: auto;
}

.infrastructure {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .content-container {
    padding: 0;
  }
}

</style>