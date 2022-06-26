<template>
  <div id="other-contents" class="rel">
    <section-wrapper :wrapper="wrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="06" title="OTHER CONTENTS" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <p class="message tra"><span>HAVE MADE UP</span><br class="pc-only">
              <span class="adjust">MY WORKS</span>
            </p>
          </transition>
        </template>
        <template #content>
          <div class="card-container">
            <a class="card sec_num" :href="app.url" target="_blank" v-for="(app, i) in apps" :key="i">
              <div>
                <img class="image" :src="app.image" alt="" :style="{backgroundColor: app.backgroundColor}">
              </div>
              <div class="card-title tra">
                {{ app.title }}
              </div>
              <div class="card-content">
                <div>
                  <p v-for="(content, j) in app.contents" :key="j"> {{ content }}</p>
                </div>
              </div>
              <div class="bottom-content">
                <a :href="app.github" target="_blank">GITHUB</a>
                <a :href="app.url" target="_blank">Go To Site→</a>
              </div>
            </a>
          </div>
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
        title: 'Tap Map',
        contents: ['マップを使って土地の特徴を調べる。'],
        position: 'right',
        image: require('~/assets/image/26.png'),
        backgroundColor: '#faebd7',
        github: 'https://github.com/lnoueryo/tap-map/',
        url: 'https://tap-map.jounetsism.biz',
      },
      {
        title: 'Reservierung',
        contents: ['美容室用の予約管理システム。'],
        position: 'left',
        image: require('~/assets/image/27.png'),
        backgroundColor: '#c7fdff',
        github: 'https://github.com/lnoueryo/reservierung/',
        url: 'https://booking.jounetsism.biz',
      },
      {
        title: 'My Memories',
        contents: ['Webアプリで写真を投稿できるSNS。'],
        position: 'left',
        image: require('~/assets/image/29.png'),
        backgroundColor: '#c7fdff',
        github: 'https://github.com/lnoueryo/mymemories/',
        url: 'https://mymemories.jounetsism.biz',
      },
    ],
    colorSwitch: true,
    colorValue: 0,
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
    brightnessValue() {
      return this.$store.getters.brightnessValue;
    },
    secWrapper() {
      return {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: `rgb(0 0 0 / ${this.brightnessValue}%)`,
        // backgroundColor: '#00000096',
        zIndex: -1
      }
    },
  },
}
</script>


<style lang="scss" scoped>
.title-container:hover .message, .title-container:hover .card {
  filter: brightness(1);
  transition: 2s;
}
.title-container .message, .title-container .card {
  filter: brightness(0);
  transition: 2s;
}

@media screen and (max-width: 1070px) {
  .title-container .message, .title-container .card {
    filter: brightness(1);
  }
}
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

.card-container {
  display: flex;
  align-items: strech;
  justify-content: space-between;
  flex-wrap: wrap;

  .card {
    max-width: 270px;
    background-color: #191919;
    border-radius: 8px;
    box-shadow: rgb(55 88 81) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    color: white;

    a {
      color: white;
    }
    .image {
      border-radius: 5px 5px 0 0;
    }

    .card-title {
      text-align: left;
      border-radius: 8px 8px 0 0;
      font-size: 18px;
      padding: 10px 15px;
    }

    .card-content {
      padding: 15px;
      padding-bottom: 0;
      p {
        font-size: 14px;
      }
    }

    .bottom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding: 10px 15px;
    }

    a.card {
        color: white;
      }
  }

  .card:hover {
    opacity: .6;
    transition: all .5s;
  }

  @media screen and (max-width: 768px) {
    .card {
      max-width: initial;
      width: 100%
    }
  }
}

.content-container {
  max-width: 550px;
}


</style>