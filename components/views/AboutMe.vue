<template>
  <div>
    <SectionWrapper :wrapper="wrapper" :secWrapper="secWrapper">
      <SectionContainer>
        <template #title>
          <transition name="bottom">
            <section-title :titleNum="section.number" :title="section.title" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>A HOTEL RECEPTIONIST<br class="pc-only"></div>
              <div class="adjust">TO A WEB DEVELOPER</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="mb-2">
            <div class="pc-only abs z-0 img-container">
              <img class="img-filter" src="~/assets/image/10.jpg" alt="">
            </div>
            <div class="content-container rel">
              <div class="sec_title mt-4">{{ aboutMe.personalHistory.title }}</div>
              <p class="para" v-for="(content, i) in aboutMe.personalHistory.contents" :key="i">{{ content }}</p>
            </div>
          </div>
          <transition name="bottom">
            <div class="content-container ml-a mb-4 pc-only rel z-1">
              <div class="sec_title">{{ aboutMe.profile.title }}</div>
              <p class="para" v-for="(content, i) in aboutMe.profile.contents" :key="i">{{ content }}</p>
            </div>
          </transition>
          <div class="content-container ml-a mb-4 sp-only rel z-1">
            <div class="sec_title">{{ aboutMe.profile.title }}</div>
            <p class="para">
              <img id="dog" src="~/assets/image/10.jpg" alt="">
              <span v-for="(content, i) in aboutMe.profile.contents" :key="i">{{ content }}<br><br></span>
            </p>
          </div>
          <p class="tra link">
            <a @click="onClickProfile" target="_blank" :href="profileURL">PROFILE→</a>
          </p>
        </template>
      </SectionContainer>
    </SectionWrapper>
  </div>
</template>

<script>
import aboutMe from '~/assets/json/about-me.json'

export default {
  props: {
    section: Object
  },
  data: () => ({
    aboutMe: aboutMe
  }),
  computed: {
    wrapper() {
      const path = require('~/assets/image/03.jpg')
      return {
        backgroundImage: 'url("' + path + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'right 75% bottom 50%',
        opacity: 0.9
      }
    },
    secWrapper() {
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.646)'
      }
    },
    profileURL() {
      return 'https://docs.google.com/presentation/d/12T7tlSXZmJBru31kPOTb-dusfTJAtI-XTWv1qWhmwS4/edit?usp=sharing';
    }
  },
  methods: {
    onClickProfile() {
      this.$gtag('event', 'click', {
        event_category: '経歴',
        event_label: 'profile',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  right: 0;
  width: 100%;
  max-width: 500px;
}
.img-filter {
  filter: grayscale(60%) brightness(.7);
}

.content-container {
  max-width: 550px;
}

#dog {
  float: right;
  filter: grayscale(60%) brightness(.7);
  max-width: 210px;
  margin-left: 25px;
}

@media screen and (max-width: 480px) {
  #dog {
    max-width: 0;
    margin-left: 0;
    float: initial;
    max-width: initial;
    width: 100%;
    margin-bottom: 20px;
  }
}

</style>