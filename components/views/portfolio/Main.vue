<template>
  <div>
    <div class="pc-only">
      <div class="d-flex mb-16 py-8">
        <div class="w50 px-4 tra" style="display: flex;flex-direction: column;">
          <h1 class="mt-12 hide">切り分けたタスクを繋げて、<br>プロジェクトを完成</h1>
          <div class="bottom-content">
            <div>
              <p class="py-4">Puzzlesは組織、プロジェクト、ユーザー単位で分割できるタスク管理ツールです。</p>
              <div class="d-flex justify-end">
                <!-- 準備中 -->
                <v-btn href="https://puzzles.jounetsism.biz/login" target="_blank" class="mr-4 tooltip" @click.prevent.stop="onClickSite">
                <ToolChip>Sorry, Coming Soon</ToolChip>
                  GO TO SITE
                </v-btn>
                <v-btn href="https://github.com/lnoueryo/puzzles" target="_blank" @click="onClickGithub">GITHUB</v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="w50 d-flex">
          <img style="margin-top: auto" :src="mainImage" alt="">
        </div>
      </div>
    </div>
    <div class="sp-only">
      <div class="mb-16 py-8">
        <div class="w100">
          <img class="sp-image" :src="mainImage" alt="">
        </div>
        <div class="bottom-content">
          <div>
            <p class="py-4">Puzzlesは組織、プロジェクト、ユーザー単位で分割できるタスク管理ツールです。</p>
            <div class="d-flex justify-end">
              <!-- 準備中 -->
              <v-btn href="https://puzzles.jounetsism.biz/login" target="_blank" class="mr-4 tooltip" @click.prevent.stop="onClickSite">
              <ToolChip>Sorry, Coming Soon</ToolChip>
                GO TO SITE
              </v-btn>
              <v-btn href="https://github.com/lnoueryo/puzzles" target="_blank" @click="onClickGithub">GITHUB</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mainImage() {
      return '/portfolio/00.jpg'
    }
  },
  methods: {
    onClickSite(e) {
      e.preventDefault();
      
      this.$gtag('event', 'site', {
        event_category: 'ポートフォリオ',
        event_label: 'Puzzles',
      })
    },
    onClickGithub() {
      this.$gtag('event', 'github', {
        event_category: 'ポートフォリオ',
        event_label: 'Puzzles',
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.bottom-content {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.sp-image {
  max-height: 300px;
  object-fit: center;
}

.hide {
  font-size: 33px;
}

@media screen and (max-width: 1168px) {
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .content-container {
    height: 100%;
  }
}

@media screen and (max-width: 480px) {
  .content-container {
    padding: 50px 18px;
  }
  .para {
    padding: 0;
  }
  .puzzle-title {
    font-size: 5.2vw;
  }
  .adjust {
    margin-left: 0
  }
}
</style>