import * as $gtag from 'vue-gtag'
export const useGtag = () => {
  const config = useRuntimeConfig()
  const sendGtag = (event: string, data: {[key: string]: string | number}) => {
    if (config.public.isProduction) {
      $gtag.event(event, data)
    }
  }
  return {
    sendGtag
  }
}