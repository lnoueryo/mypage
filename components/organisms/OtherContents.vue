<template>
  <StandardSection :wrapper :section :subTitle>
    <template #content>
      <div class="card-container">
        <div class="d-flex align-strech" v-for="item in otherContents" :key="item.title" @click.prevent.stop="onClickSite(item.title, item.url)">
          <CardImage class="d-flex align-strech" :item="item">
            <template #bottom>
              <a :href="item.github" target="_blank" @click="onClickGithub(item.title, item.github)">
                GITHUB
              </a>
              <a :href="item.url" target="_blank" @click.prevent.stop="onClickSite(item.title, item.url)">
                Go To Site→
              </a>
              <ToolChip v-if="!item.url">Sorry, Only GITHUB</ToolChip>
            </template>
          </CardImage>
        </div>
        <CardImage class="d-flex align-strech" style="opacity: 0;cursor: default;" :item="otherContents[2]" @click.prevent.stop="" />
      </div>
    </template>
    <template #thd-wrapper>
      <div :style="secWrapper" />
    </template>
  </StandardSection>
</template>
<script setup lang="ts">
import otherContents from '~/assets/json/other-contents.json'
import StandardSection from '~/components/layouts/StandardSection.vue'
import CardImage from '~/components/molecules/CardImage.vue'
import ToolChip from '~/components/atoms/ToolChip.vue'
import { defineProps } from 'vue'
defineProps([
  'section'
])
const brightnessSwitch = ref(false)
const brightnessValue = ref(70)
const wrapper = computed(() => {
  return {
    backgroundImage: 'url("/images/22.jpg")',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'right 75% bottom 50%',
    opacity: 0.95,
  } as const
})
const secWrapper = computed(() => {
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: `rgb(0 0 0 / ${brightnessValue.value}%)`,
    zIndex: -1
  } as const
})
const subTitle = computed(() => {
  return [
    `HAVE MADE UP`,
    `MY WORKS`
  ]
})
const onClickSite = (name: string, url: string) => {
  // this.$gtag('event', 'site', {
  //       event_category: 'ポートフォリオ',
  //       event_label: name,
  //     })
  if(!url) return;
  window.open(url, '_blank')
}
const onClickGithub = (name: string, url: string) => {
  // this.$gtag('event', 'github', {
  //       event_category: 'ポートフォリオ',
  //       event_label: name,
  //     })
  window.open(url, '_blank')
}

const changeBrightness = () => {
  if(brightnessSwitch.value) brightnessValue.value += 1;
  if(!brightnessSwitch.value) brightnessValue.value -= 1;
  if(brightnessValue.value == 0 || brightnessValue.value == 70) return brightnessSwitch.value = !brightnessSwitch.value;
}
onBeforeMount(() => setInterval(changeBrightness, 150))
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
    margin-bottom: 35px;
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