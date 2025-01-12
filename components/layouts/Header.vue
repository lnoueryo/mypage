<template>
  <div class="wrapper">
    <video class="base-mv" src="/public/images/02.mp4" autoplay muted loop playsinline />
    <video class="mv" src="/public/images/01.mp4" autoplay muted loop playsinline :style="videoHueFilter" />
    <div class="video-cover" />
    <div class="content-container">
      <div class="header d-flex wrap">
        <Transition name="name">
          <Logo v-show="switches.name.status" />
        </Transition>
        <div class="header-right d-flex align-center">
          <Transition name="nav">
            <HorizontalTextNavigation class="nav" :items="navigationItems" @click:item="onClickNav" v-if="switches.nav.status" />
          </Transition>
          <HumburgerMenu :items="navigationItems" @click:item="onClickNav" />
        </div>
      </div>
      <div id="mainbar" class="px-3">
        <div class="mb-5 item-container">
          <Transition name="main">
            <img src="/images/09.png" alt="my portfolio" v-show="switches.logo.status">
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
const { sendGtag} = useGtag()
const { scrollToAnchorPoint, isArgCurrentHash, scrollToEnd } = useScrollToAnchorPoint()
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
  sendGtag('click_header_navigation', {
    name: item.name,
    href: item.href,
    location: window.location.href,
  })
  scrollToAnchorPoint(item.href)
  if (isArgCurrentHash('follow-me')) {
    setTimeout(scrollToEnd, 100)
  }
}
onMounted(() => {
  setInterval(countHueValue, 100)
  const keys = getKeys(switches.value)
  keys.forEach((key) => {
    setTimeout(() => {
      switches.value[key].status = true;
    }, switches.value[key].time)
  })
})

</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
  height: 100vh;
  background-size: cover;
  background-color: black;
  overflow: hidden;
}

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
  background-image: url("/images/01.png");
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

.header {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 3% 0;
}

.content-container {
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

.header-right {
  max-width: 900px;
  width: 100%;
  margin-left: auto;
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

@media screen and (max-width: 1225px) {
  .nav {
    display: none;
  }
}

</style>