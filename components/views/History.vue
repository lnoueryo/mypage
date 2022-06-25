<template>
  <div style="position: relative">
    <section-wrapper :wrapper="wrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="04" title="HISTORY" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <p class="message tra"><span>LOOK BACK</span><br class="pc-only">
              <span class="adjust2">ON MY HISTORY</span>
            </p>
          </transition>
        </template>
        <template #content>
          <Timeline :items="timelineItems" />
          <p class="tra link rel z-1">
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
          </p>
        </template>
      </section-container>
      <!-- <Grain></Grain> -->
      <div :style="secWrapper"></div>
    </section-wrapper>
  </div>
</template>

<script>
import Timeline from '../Timeline.vue'
export default {
  components: { Timeline },
  data: () => ({
    timelineItems: [
      {
        date: '2013年 3月',
        title: '福岡大学工学部化学システム工学科卒業',
        contents: ['福岡大学を卒業後、高校から続けていたガソリンスタンドのバイトをしながら音楽活動を2年ほど行う。'],
        position: 'right',
        color: '#19534a',
        circleColor: '#19534a',
        circleIcon: 'mdi-start'
      },
      {
        date: '2015年 10月',
        title: 'カナダに語学留学',
        contents: ['語学留学のため、カナダに8か月ほど滞在。語学学校に通い、卒業後日本に帰国。'],
        position: 'left',
        color: '#19534a',
        circleColor: '#19534a',
        circleIcon: 'mdi-start'
      },
      {
        date: '2016年 6月',
        title: '有限会社ジェイホッパーズに入社',
        contents: [
          '帰国後、外国籍の方と関わる仕事をしたいという思いからゲストハウスに就職。',
          '仕事を覚えながらプライベートで英語を勉強し、日常会話レベルまで話せるようになる。',
          'マネージャー業務を半年ほど経験。',
        ],
        position: 'right',
        color: '#19534a',
        circleColor: '#19534a',
        circleIcon: 'mdi-start'
      },
      {
        date: '2020年 4月',
        title: 'プログラミングスクールTech Boostに入学',
        contents: [
          'ゲストハウスで使用していた予約管理システムに興味を持ち、自身でソフトウェアを作成できるようになりたいという思いから、WEB系エンジニアに転職を決意。',
          '有限会社ジェイホッパーズを退社し、プログラミングの学習を始める。',
        ],
        position: 'left',
        color: '#19534a',
        circleColor: '#19534a',
        circleIcon: 'mdi-start'
      },
      {
        date: '2021年 9月',
        title: '株式会社シフトキーに入社',
        contents: [
          'WEB制作会社に就職。HTML、CSS、Javascript(JQuery)、PHP(WordPress)を使い、レンタルサーバーで公開することが多かった。',
          'その間プライベートでVue.jsとLaravelを独学。言語の知識を生かし、業務に貢献。',
        ],
        position: 'right',
        color: '#242e66',
        circleColor: '#242e66',
        circleIcon: 'mdi-start'
      },
      {
        date: '2021年 4月',
        title: '株式会社ゴーガに入社',
        contents: [
          'Google Maps APIを使ったアプリ開発の会社に入社。主に店舗検索システム、販売店検索システムの画面、サーバー、インフラを担当。',
          'サーバーレスに移行する流れがあったため、入社後すぐにDockerとGCPのCloud Runを学習。その後に業務で使われているDjangoと個人的に興味があったGoを習得。',
          'データ連携に最適なリソースを探し、その方法を提案することで貢献。',
        ],
        position: 'left',
        color: '#242e66',
        circleColor: '#242e66',
        circleIcon: 'mdi-start'
      },
    ],
  }),
  computed: {
    wrapper() {
      const path = require('~/assets/image/25.jpg')
      return {
        position: 'relative',
        backgroundImage: 'url("' + path + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'right 75% bottom 50%',
        opacity: 0.9,
      }
    },
    secWrapper() {
      return {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#00000096',
        zIndex: -1
      }
    },
  },
}
</script>


<style lang="scss" scoped>
.stick-container {
  display: flex;
  width: 6%;
  justify-content: center;
  .stick {
    position: relative;
    background-color: rgba(255, 255, 255, 0.12);
    width: 2px;
    min-height: 100px;
    height: 100%;
  }
  .circle-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    .circle {
      border-radius: 50%;
      background-color: rgba(0,0,0);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
    }
  }
}

.card {
  max-width: 400px;
  margin: auto;
  background-color: #191919;
  border-radius: 8px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: rgb(55 88 81) 0px 7px 29px 0px;
}

.card-title {
  .sub {
    text-align: left;
    font-size: 11px;
    margin-left: 4px;
  }
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  padding: 15px 20px;
  background-color: #364d33;
  text-align: center;
}

.card-content {
  padding: 20px 20px;
  p {
    margin: 0 4px;
    font-size: 14px;
  }
}


.content-container {
  max-width: 550px;
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