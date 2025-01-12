import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
