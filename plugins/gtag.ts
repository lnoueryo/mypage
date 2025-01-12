import VueGtag from "vue-gtag"
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  let userId = Cookies.get('user_id')
  if (!userId) {
    userId = uuidv4()
    Cookies.set('user_id', userId, { expires: 36500 })
  }
  const router = useRouter()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: '神経多様性エンジニア日常記録',
      pageTrackerScreenviewEnabled: true,
      config: {
        id: config.public.googleAnalyticsId,
        params: {
          user_id: userId
        }
      },
    },
    router
  )
})