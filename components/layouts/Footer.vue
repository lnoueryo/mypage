
<template>
  <div id="follow-me" class="footer">
    <StandardSection>
      <template #content>
        <div class="footer-main-container">
          <div class="flex mb-6">
            <div class="message text-center">FOLLOW ME</div>
          </div>
          <hr class="bar">
          <div class="text-center">
            <a :href="icon.href" target="_blank" v-for="(icon, i) in icons" :key="i" @click="onClickSNS(icon.alt)">
              <img class="mx-3 icon" :src="icon.src" :alt="icon.alt">
            </a>
          </div>
        </div>
        <Address :contents="contents" />
        <ul class="flex pc-only responsive-wrap res_nav text-center align-center justify-around w100">
          <a :href="'#' + item.href" v-for="(item, i) in navigationItems" :key="i" @click.prevent="onClickNav(item)">
            <li>{{ item.title }}</li>
          </a>
        </ul>
      </template>
    </StandardSection>
  </div>
</template>

<script setup lang="ts">
defineProps([
  'navigationItems'
])
const { scrollToAnchorPoint, isArgCurrentHash, scrollToEnd } = useScrollToAnchorPoint()
const icons = computed(() => {
  return [
      {href: 'https://www.facebook.com/profile.php?id=100049811055127', src: '/images/18.png', alt: 'facebook'},
      {href: 'https://github.com/lnoueryo', src: '/images/21.png', alt: 'github'},
      {href: 'https://twitter.com/aNp6KjSBlp02cs8', src: '/images/19.png', alt: 'twitter'},
    ]
})
const contents = computed(() => {
  return [
    {
      title: 'Contact',
      items: [
        {content: '〒156-0043', href: ''},
        {content: '東京都世田谷区松原1-43-14', href: ''},
        {content: '070-8338-1624', href: ''},
        {content: 'popo62520908@gmail.com', href: ''},
      ]
    }
  ]
})
const onClickSNS = (name: string) => {
  // this.$gtag('event', 'click', {
  //   event_category: 'SNS',
  //   event_label: name,
  // })
}
const onClickNav = (item: {name: string, href: string}) => {
  // this.$gtag('event', 'click', {
  //   event_category: 'ナビゲーション',
  //   event_label: name,
  // })
  scrollToAnchorPoint(item.href)
  if (isArgCurrentHash('follow-me')) {
    setTimeout(scrollToEnd, 100)
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

  .footer-main-container {
    margin-bottom: 45px;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .footer-main-container {
      margin-bottom: 20px;
    }
  }
}

footer .container {
  flex-direction: row-reverse;
  position: relative;
}

footer .title {
  display: block;
  font-weight: 500;
  font-family: proxima-nova,sans-serif;
  font-size: 14px;
  letter-spacing: .1em;
  line-height: 1;
}

footer .message {
  width: 100%;
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

.icon {
  max-width: 64px;
  max-height: 64px;
}

.bar {
  color: white;
  width: 50%;
  margin: auto;
  margin-bottom: 2%;
}

</style>