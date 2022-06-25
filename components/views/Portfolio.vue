<template>
  <div>
    <section>
      <div class="content-wrapper">
        <div class="sec-wrapper">
          <transition name="bottom">
            <div class="content-container2 w-50 sp-only">
              <section-title titleNum="05" title="PORTFOLIO" />
            </div>
          </transition>
          <div class="flex container1 rel">
            <p class="tra abs z-2 link">
              <a target="_blank" href="https://docs.google.com/presentation/d/1OWL1rnQQY9D_Vbecd7p7EayQgLnIkIvP15OC0xNNtpY/edit#slide=id.p1">DESCRIPTION→</a>
            </p>
            <img src="~/assets/image/14.png" class="rel z-0">
            <transition name="bottom">
              <div class="flex abs z-1 w-100 align-item-center">
                <div class="content-container1 w-50">
                  <section-title class="pc-only" titleNum="05" title="PORTFOLIO" />
                  <div class="main-content-container">
                    <p class="para">Nuxt.jsとGoを使ったタスク管理アプリ。</p>
                    <p class="para">業務でよく扱っているGCPでインフラを構成。</p>
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
        </div>
        <section-wrapper :wrapper="wrapper">
          <section-container>
            <!-- <template #title>
              <transition name="bottom">
                <section-title titleNum="05-1" title="SYSTEM CONFIGRATION" />
              </transition>
            </template> -->
            <template #sub-title>
              <transition name="bottom">
                <p class="message tra">
                  <span>PUZZLES</span><br class="pc-only">
                </p>
              </transition>
            </template>
            <template #content>
              <div class="d-flex mb-16 py-8">
                <div class="w50 pa-1 tra" style="display: flex;flex-direction: column;">
                  <h1 class="mb-4" style="font-size: 36px;">切り分けたタスクをつなげて、プロジェクトを完成</h1>
                  <p>Backlogはウェブ制作、ソフトウェア開発、大手広告代理店、全国版新聞社など様々な業種で使われているタスク・​プロジェクト管理ツールです。</p>
                  <div style="display: flex;align-items: center;margin-top: auto;">
                    <v-btn class="mr-4">GO TO THE SITE</v-btn>
                    <v-btn>GITHUB</v-btn>
                  </div>
                </div>
                <div class="w50 pa-1">
                  <img :src="mainImage" alt="">
                </div>
              </div>
              <PortfolioDescription :items="descriptionItems" />
              <PortfolioSystem :features="features"/>
              <p class="tra link rel z-1">
                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
              </p>
            </template>
          </section-container>
          <div :style="secWrapper"></div>
        </section-wrapper>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    descriptionItems: [
      {
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'right',
        image: require('~/assets/image/portfolio/01.png'),
      },
      {
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'left',
        image: require('~/assets/image/portfolio/03.png'),
      },
      {
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'right',
        image: require('~/assets/image/portfolio/05.png'),
      },
      {
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'left',
        image: require('~/assets/image/portfolio/02.png'),
      },
      {
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'right',
        image: require('~/assets/image/portfolio/04.png'),
      },
    ],
    features: [
      {
        type: 'FRONT-END',
        content: [
          'vuetifyを使ったUI設計',
          'レスポンシブ',
          'AJAX送信後のレスポンスによる非同期処理',
          'DOMが形成される前のAJAXによるデータの受取',
          '一部Vueのタイプスクリプト、Vue.extendを用いた開発',
          'Vuexを用いた状態管理',
          'パフォーマンスを意識し作成した関数型コンポーネント',
          'ライブラリVueCropperを用いた画像のクロッピング',
          'バイナリーデータ、base64やjson文字列などエンコード・デコード',
        ]
      },
      {
        type: 'BACK-END',
        content: [
          // 'AJAXを使ったREST APIの構築',
          // 'laravel標準のもの＋ログイン以外に利用するパスワードチェックのバリデーション作成',
          'laravel標準のもの＋Oauthの認証を実装',
          '会員登録時に送信するメールをキュージョブで非同期',
          'イベント、リスナー、キュージョブを使ってパスワードハッシュ化する前のデータをメール送信',
          'データベース正規化',
          'N+1問題を意識したテーブルの関連付け（関数作成）',
          'シーダーを使った各テーブルのレコード作成',
          'ストレージ、データベースに複数の画像を保存する機能を実装',
        ]
      },
      {
        type: 'INFRASTRUCTURE',
        content: [
          'EC2によるウェブサーバー（パブリックサブネット）の構築',
          'EC2によるデータベースサーバー（プライベートサブネット）の構築',
          'VPCを利用したネットワーク設定',
          'Route53にドメイン登録',
        ]
      },
    ],
  }),
  computed: {
    mainImage() {
      return require('~/assets/image/portfolio/00.jpg')
    }
  }
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
.content-wrapper {
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-image: black;
}

.main-content-container {
  margin: 15px;
  position: relative;
}

.container1{
  margin-bottom: 20px;
  align-items: center;
  overflow: hidden;
}

.content-container{
  position: relative;
  width: 100%;
  margin: auto;
}
.link {
  font-size: 2.5vw;
  right: 6.25vw;
  bottom: 5%;
}
.content-container1 {
  background-color: black;padding: 7.8125vw 6.25vw 6.953125vw;
}
.content-container2 {
  background-color: black;padding: 7.8125vw 0 0 6.25vw;
}
.message {
  margin-left: 40px;
  position: relative;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: .02em;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
}

.adjust {
  margin-left: 20vw;
}
.adjust2 {
  margin-left: 5vw;
}
</style>