<template>
  <div id="top">
    <header>
      <div class="header-wrapper">
        <video class="base-mv" src="~/assets/image/02.mp4" autoplay muted loop playsinline></video>
        <video class="mv" src="~/assets/image/01.mp4" autoplay muted loop playsinline :style="videoHueFilter"></video>
        <div class="video-cover"></div>
        <div class="container">
          <div class="content-container flex wrap">
            <div class="mb-3">
              <div class="item-container mb-4">
                <transition name="name">
                  <img id="name-logo" src="~/assets/image/08.png" alt="my portfolio" v-show="switches.name.status">
                </transition>
                <transition name="name">
                  <p class="md px-4 f-11" v-show="switches.name.status">I'm a Python and Javascript web developer and aiming to be a full-stack developer</p>
                </transition>
              </div>
            </div>
            <div class="header-right flex mb-3">
              <transition name="nav">
                <ul class="flex text-center nav" v-show="switches.nav.status">
                  <a v-scroll-to="'#' + item.href" v-for="(item, i) in navigationItems" :key="i" @click="onClickNav(item.title)">
                    <li>{{ item.title }}</li>
                  </a>
                </ul>
              </transition>
              <div class="hamburger-menu">
                <input type="checkbox" id="menu-btn-check">
                <label for="menu-btn-check" class="menu-btn"><span></span></label>
                <div class="menu-content">
                  <ul>
                    <li class="mx-2" v-for="(item, i) in navigationItems" :key="i">
                      <a v-scroll-to="'#' + item.href" @click="onClickNav(item.title)">{{ item.title }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav id="mainbar" class="px-3">
            <div class="mb-5 item-container">
              <transition name="main">
                <img src="~/assets/image/09.png" alt="my portfolio" v-show="switches.logo.status">
              </transition>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: Array
  },
  data: () => ({
    show: [
      { opacity: 1, transition: 'all 1s', transform: 'translateX(0px)', position: 'relative' },
      { opacity: 0, transition: 'all 1s', transform: 'translateX(0px)', position: 'absolute' },
      { opacity: 0, transition: 'all 1s', transform: 'translateX(0px)', position: 'absolute' }
    ],
    switches: {
      name: {status: false, time: 1500},
      nav: {status: false, time: 3000},
      logo: {status: false, time: 5000},
    },
  }),
  computed: {
    videoHueFilter() {
      const hue = `hue-rotate(${this.$store.getters.hueValue}deg)`;
      const filter = `filter: ${hue}`;
      return filter;
    },
  },
  mounted() {
    Object.keys(this.switches).forEach((key) => {
      setTimeout(() => {
        this.switches[key].status = true;
      }, this.switches[key].time)
    })
  },
  methods: {
    onClickNav(name) {
      this.$gtag('event', 'click', {
        event_category: 'ナビゲーション',
        event_label: name,
      })
    }
  }
}

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
    max-width: 800px;
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