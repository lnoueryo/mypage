<template>
  <div style="position: relative">
    <section-wrapper :wrapper="wrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="06" title="OTHER CONTENTS" />
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
          <div class="card-container" style="display: flex;align-items: strech;justify-content: space-between">
            <div class="card" v-for="(app, i) in apps" :key="i">
              <div>
                <img :src="app.image" alt="" :style="{backgroundColor: app.backgroundColor}">
              </div>
              <div class="card-title">
                {{ app.title }}
              </div>
              <div>
                <p v-for="(content, j) in app.contents" :key="j"> {{ content }}</p>
              </div>
              <div style="display: flex;align-items: center;justify-content: space-between;margin-top: auto;">
                <a href="">GITHUB</a>
                <a href="">Go To Site→</a>
              </div>
            </div>
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
import Timeline from '../Timeline.vue'
export default {
  components: { Timeline },
  data: () => ({
    apps: [
      {
        title: 'タップマップ',
        contents: ['マップを使って土地の特徴を調べる。'],
        position: 'right',
        image: require('~/assets/image/26.png'),
        backgroundColor: '#faebd7'
      },
      {
        title: 'Reservierung',
        contents: ['美容室用の予約管理システム。'],
        position: 'left',
        image: require('~/assets/image/27.png'),
        backgroundColor: '#c7fdff'
      },
      {
        title: 'My Memories',
        contents: ['Webアプリで写真を投稿できるSNS。'],
        position: 'left',
        image: require('~/assets/image/29.png'),
        backgroundColor: '#c7fdff'
      },
    ],
  }),
  computed: {
    wrapper() {
      const path = require('~/assets/image/22.jpg')
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
  max-width: 270px;
  background-color: #191919;
  border-radius: 8px;
  box-shadow: rgb(55 88 81) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
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