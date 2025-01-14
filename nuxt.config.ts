import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  app: {
    head: {
      title: 'My Page',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'オンライントークアプリの開発を行っているWeb系エンジニア。作成したウェブアプリケーションを紹介いたします。' },
        { property: 'og:description', content: 'オンライントークアプリの開発を行っているWeb系エンジニア。作成したウェブアプリケーションを紹介いたします。' },
        { property: 'og:site_name', content: 'My Page' },
        { property: 'og:url', content: 'https://mypage.jounetsism.biz' },
        { property: 'og:title', content: 'My Page' },
        { property: 'og:image', content: '/10.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@rneurodivergent' },
        { name: 'twitter:description', content: 'オンライントークアプリの開発を行っているWeb系エンジニア。作成したウェブアプリケーションを紹介いたします。' },
        { name: 'twitter:image', content: 'https://neurodivergences.com/profile.jpg' },
        { name: 'google-site-verification', content: 'Dj609s-gP15Aocfed0WOgIm503sE9umTAAh32N-cf3c' },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/30.png" }
      ],
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
      isProduction: process.env.NODE_ENV === 'production',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/flame.css',
    '@/assets/css/layout.css',
    '@/assets/css/page.css',
  ],
})