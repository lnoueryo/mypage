
<template>
  <div id="follow-me">
    <footer>
      <div class="footer">
        <SectionWrapper>
          <SectionContainer>
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
              <FooterContent :contents="contents" />
              <ul class="flex pc-only responsive-wrap res_nav text-center align-center justify-around w100">
                <a v-scroll-to="item.href" href="" v-for="(item, i) in navigationItems" :key="i" @click="onClickNav(item.list)">
                  <li>{{ item.list }}</li>
                </a>
              </ul>
            </template>
          </SectionContainer>
        </SectionWrapper>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: Array
  },
  data: () => ({
    qiita: '',
    icons: [
      {href: 'https://www.facebook.com/profile.php?id=100049811055127', src: require('~/assets/image/18.png'), alt: 'facebook'},
      {href: 'https://github.com/lnoueryo', src: require('~/assets/image/21.png'), alt: 'github'},
      {href: 'https://twitter.com/aNp6KjSBlp02cs8', src: require('~/assets/image/19.png'), alt: 'twitter'},
    ],
    contents: [
      {
        title: 'Contact',
        items: [
          {content: '〒156-0043', href: ''},
          {content: '東京都世田谷区松原1-43-14', href: ''},
          {content: '070-8338-1624', href: ''},
          {content: 'popo62520908@gmail.com', href: ''},
        ]
      },
      // {
      //   title: 'Resume',
      //   items: [
      //     {content: '履歴書', href: 'https://docs.google.com/document/d/14bj2fv6hF8RhSgoRHrEDpfA1eTQt22MNNj3rENHOwvY/edit?usp=sharing'},
      //     {content: '職務経歴書', href: 'https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit?usp=sharing'},
      //   ]
      // },
      // {
      //   title: 'Github',
      //   items: [
      //     {content: 'Puzzles', href: 'https://github.com/lnoueryo/puzzles'},
      //     {content: 'Tap Map', href: 'https://github.com/lnoueryo/tap-map'},
      //     {content: 'Reservierung', href: 'https://github.com/lnoueryo/reservierung'},
      //     {content: 'My Memories', href: 'https://github.com/lnoueryo/Mymemories'},
      //   ]
      // },
      // {
      //   title: 'Github',
      //   items: [
      //     {content: 'Puzzles', href: 'https://github.com/lnoueryo/puzzles'},
      //     {content: 'Tap Map', href: 'https://github.com/lnoueryo/tap-map'},
      //     {content: 'Reservierung', href: 'https://github.com/lnoueryo/reservierung'},
      //     {content: 'My Memories', href: 'https://github.com/lnoueryo/Mymemories'},
      //   ]
      // },
    ]
  }),
  async created() {
    // const response = await this.$axios.get('https://qiita.com/api/v2/users/popo62520908/items')
    // this.qiita = response.data.slice(0, 4);
  },
  methods: {
    onClickSNS(name) {
      this.$gtag('event', 'click', {
        event_category: 'SNS',
        event_label: name,
      })
    },
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
footer {
  position: relative;
  z-index: 1;
}

.footer{
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

footer .title{
  display: block;
  font-weight: 500;
  font-family: proxima-nova,sans-serif;
  font-size: 14px;
  letter-spacing: .1em;
  line-height: 1;
}

footer .title_num {
  margin-right: 6%;
  font-weight: 400;
  font-family: trajan-pro-3,serif;
  font-style: italic;
  font-size: 20px;
  letter-spacing: .02em;
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