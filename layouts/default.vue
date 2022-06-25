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
        {list: 'TOP', href: '/'},
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
    this.startHue
  },
  methods: {
    startHue() {
      setInterval(() => {
        if (this.hueValue > 359) return this.hueValue = 0;
        this.hueValue = this.hueValue + 1;
      }, 100);
    },
  }
}
</script>
