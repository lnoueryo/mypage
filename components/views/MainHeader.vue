<template>
  <div id="top">
    <header>
      <div class="header-wrapper">
        <video class="base-mv" src="/images/02.mp4" autoplay muted loop playsinline></video>
        <video class="mv" src="/images/01.mp4" autoplay muted loop playsinline :style="videoHueFilter"></video>
        <div class="video-cover"></div>
        <div class="container">
          <div class="content-container flex wrap">
            <div class="mb-3">
              <div class="item-container mb-4">
                <Transition name="name">
                  <img id="name-logo" src="/images/08.png" alt="my portfolio" v-show="switches.name.status">
                </Transition>
                <Transition name="name">
                  <p class="md px-4 f-11" v-show="switches.name.status">I'm a Python and Javascript web developer and aiming to be a full-stack developer</p>
                </Transition>
              </div>
            </div>
            <div class="header-right flex mb-3">
              <Transition name="nav">
                <ul class="flex text-center nav" v-if="switches.nav.status">
                  <li v-for="(item, i) in navigationItems" :key="i">
                    <a :href="'#' + item.href" @click.prevent="onClickNav(item)">
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </Transition>
              <div class="hamburger-menu">
                <input type="checkbox" id="menu-btn-check">
                <label for="menu-btn-check" class="menu-btn"><span></span></label>
                <div class="menu-content">
                  <ul>
                    <li class="mx-2" v-for="(item, i) in navigationItems" :key="i">
                      <a :href="'#' + item.href" @click.prevent="onClickNav(item)">{{ item.title }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav id="mainbar" class="px-3">
            <div class="mb-5 item-container">
              <Transition name="main">
                <img src="/images/09.png" alt="my portfolio" v-show="switches.logo.status">
              </Transition>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps([
  'navigationItems'
])
type ShowItemSwitch = {
  status: boolean
  time: number
}
type Switches = {
  name: ShowItemSwitch
  nav: ShowItemSwitch
  logo: ShowItemSwitch
}
const { scrollToAnchorPoint } = useScrollToAnchorPoint()
const switches = ref<Switches>({
  name: {status: false, time: 1500},
  nav: {status: false, time: 3000},
  logo: {status: false, time: 5000},
})
const hueValue = ref(0)
const countHueValue = () => {
  if (hueValue.value > 359) return hueValue.value = 0
  hueValue.value++
}
const videoHueFilter = computed(() => {
  const hue = `hue-rotate(${hueValue.value}deg)`
  const filter = `filter: ${hue}`
  return filter
})
const onClickNav = (item: {name: string, href: string}) => {
  // this.$gtag('event', 'click', {
  //   event_category: 'ナビゲーション',
  //   event_label: name,
  // })
  scrollToAnchorPoint(item.href)
}
onMounted(() => {
  setInterval(() => {
    countHueValue()
  }, 100)
  const keys = getKeys(switches.value)
  keys.forEach((key) => {
    setTimeout(() => {
      switches.value[key].status = true;
    }, switches.value[key].time)
  })
})

</script>

<style lang="scss" scoped>
.mv {
  position: absolute;
  object-fit: cover;
  opacity: 0.4;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.video-cover {
  background-image: url("~/assets/image/01.png");
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
}
.base-mv {
  position: relative;
  width: 100%;
  object-fit: cover;
  height: 100vh;
  opacity: 0.9;
}

header {
  position: relative;
  z-index: 4;

  .content-container {
    width: 100%;
    max-width: 1400px;
    margin: auto;

    ul {
      margin-left: auto;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
  }

  .header-wrapper {
    width: 100%;
    position: relative;
    height: 100vh;
    background-size: cover;
    background-color: black;
    overflow: hidden;

    .container {
      max-width: 1500px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      margin: auto;
      padding: 0 20px;
      margin-bottom: 5%;
      height: 100vh;
    }

    .content-container {
      padding: 3% 0;
    }

    .item-container {
        max-width: 300px;
        width: 100%;

      p {
        max-width: 200px;
      }
    }
  }

  .header-right {
    max-width: 900px;
    width: 100%;
    margin-left: auto;
  }
}
/* ドロワー */
.menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    /* background-color: #3583bb42; */
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
    transition: all 1s;
}
.menu-btn span:before {
  bottom: 8px;
}
.menu-btn span:after {
  top: 8px;
}
#menu-btn-check:checked ~ .menu-btn span {
  background-color: #183c56c9;
}
#menu-btn-check:checked ~ .menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
  transition: all 1s;
}
#menu-btn-check:checked ~ .menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
  transition: all 1s;
}

.menu-content {
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -50%;
  z-index: 80;
  background-color: rgb(39 63 55 / 94%);
  transition: all 0.5s;/*アニメーション設定*/

  ul {
    padding: 70px 10px 0;

    li {
      border-bottom: solid 1px #ffffff;
      list-style: none;

      a {
        display: block;
        width: 100%;
        box-sizing: border-box;
        color:#ffffff;
        text-decoration: none;
        padding: 15px 15px 15px 0;
        position: relative;
      }
      a::before {
        content: "";
        width: 7px;
        height: 7px;
        border-top: solid 2px #ffffff;
        border-right: solid 2px #ffffff;
        transform: rotate(45deg);
        position: absolute;
        right: 11px;
        top: 16px;
      }
    }
  }
}

#menu-btn-check:checked ~ .menu-content {
    right: 0;/*メニューを画面内へ*/
}
.hamburger-menu {
  display: none;
}
.hamburger-menu input {
    display: none;
}

#mainbar {
  width: 100%;
  max-width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;

  .item-container{
    position: relative;
    margin: auto;
    max-width: 800px;
    width: 100%;
  }
}
#name-logo {
  width: 100%;
  max-width: 270px;
}
@media screen and (max-width: 1225px) {
  .nav {
    display: none;
  }
  .hamburger-menu {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  #name-logo {
    width: 40%;
  }
  .menu-content {
    width: 50%;
  }
  #menu-btn-check:checked ~ .menu-content {
    width: 70%;
  }
}
</style>