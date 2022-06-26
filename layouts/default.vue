<template>
  <v-app dark>
    <ViewsMainHeader :navigationItems="navigationItems" />
    <Nuxt />
    <ViewsMainFooter :navigationItems="navigationItems" />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      navigationItems: [
        {list: 'TOP', href: '#top'},
        {list: 'ABOUT ME', href: '#about-me'},
        {list: 'SKILL', href: '#skill'},
        {list: 'LANGUAGES TOOLS', href: '#languages-tools'},
        {list: 'HISTORY', href: '#history'},
        {list: 'PORTFOLIO', href: '#portfolio'},
        {list: 'OTHER CONTENTS', href: '#other-contents'},
        {list: 'FOLLOW ME', href: '#follow-me'},
      ],
    }
  },
  created() {
    this.startHue()
    this.startHalfHue()
    this.startBrightness()
  },
  methods: {
    startHue() {
      setInterval(() => {
        this.$store.commit('countHueValue');
      }, 100);
    },
    startHalfHue() {
      setInterval(() => {
        this.$store.commit('countHueHalfValue');
      }, 200);
    },
    startBrightness() {
      setInterval(() => {
        this.$store.commit('changeBrightness')
      }, 150)
    },
  }
}
</script>
