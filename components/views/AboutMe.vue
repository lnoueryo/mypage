<template>
  <div id="about-me">
    <section-wrapper :wrapper="wrapper" :secWrapper="secWrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="01" title="ABOUT ME" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>A HOTEL RECEPTIONIST<br class="pc-only"></div>
              <div class="adjust">TO A WEB DEVELOPER</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="mb-2">
            <div class="pc-only abs z-0 img-container">
              <img class="img-filter" src="~/assets/image/10.jpg" alt="">
            </div>
            <div class="content-container rel">
              <div class="sec_title mt-4">略歴</div>
              <p class="para">福岡大学を卒業後、もともと趣味としてやっていた音楽活動を2年ほど行い、その後1年間のカナダ留学を経て、約3年ほどゲストハウスで勤務。</p>
              <p class="para">利用していたOTAサイトや予約管理システムに興味を持ったこと、また、そこで出会った人たちに影響を受けたことをきっかけに、IT業界へ転職。</p>
              <p class="para">ウェブ制作の会社にて、HTML、CSS、PHPを使ったランディングページの作成を6ヶ月ほど行い、アプリ開発の会社へ転職。主にGoogle Maps APIを使ったサービスに携わっており、PythonとJavascriptを使用している。</p>
            </div>
          </div>
          <transition name="bottom">
            <div class="content-container ml-a mb-4 pc-only rel z-1">
              <div class="sec_title">自己紹介</div>
              <p class="para">初めまして、井上領と申します。現在アプリ開発の会社にて、Pythonや、Javascriptでシステムの保守やスクラッチ開発を行っております。</p>
              <p class="para">フレームワークはバックエンドであればDjango、フロントエンドであれば、AngularまたはVue.jsを使用しており、プライベートではGoや、Laravel、Nuxt.jsを扱うことが多いです。</p>
              <p class="para">休日はプログラミングや外国語を勉強したり、作曲したりしてます。よろしくお願いします。</p>
            </div>
          </transition>
          <div class="content-container ml-a mb-4 sp-only rel z-1">
            <div class="sec_title">自己紹介</div>
            <p class="para">
              <img id="dog" src="~/assets/image/10.jpg" alt="">
              <span>初めまして、井上領と申します。現在アプリ開発の会社にて、Pythonや、Javascriptでシステムの保守やスクラッチ開発を行っております。<br><br></span>
              <span>フレームワークはバックエンドであればDjango、フロントエンドであれば、AngularまたはVue.jsを使用しており、プライベートではGoや、Laravel、Nuxt.jsを扱うことが多いです。<br><br></span>
              <span>休日はプログラミングや外国語を勉強したり、作曲したりしてます。よろしくお願いします。</span>
            </p>
          </div>
          <p class="tra link">
            <a target="_blank" href="https://docs.google.com/presentation/d/12T7tlSXZmJBru31kPOTb-dusfTJAtI-XTWv1qWhmwS4/edit?usp=sharing">PROFILE→</a>
          </p>
        </template>
      </section-container>
    </section-wrapper>
  </div>
</template>

<script>
export default {
  computed: {
    wrapper() {
      const path = require('~/assets/image/03.jpg')
      return {
        backgroundImage: 'url("' + path + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'right 75% bottom 50%',
        opacity: 0.9
      }
    },
    secWrapper() {
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.646)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  right: 0;
  width: 100%;
  max-width: 500px;
}
.img-filter {
  filter: grayscale(60%) brightness(.7);
}

.content-container {
  max-width: 550px;
}

#dog {
  float: right;
  filter: grayscale(60%) brightness(.7);
  max-width: 210px;
  margin-left: 25px;
}

@media screen and (max-width: 480px) {
  #dog {
    max-width: 0;
    margin-left: 0;
    float: initial;
    max-width: initial;
    width: 100%;
    margin-bottom: 20px;
  }
}

</style>