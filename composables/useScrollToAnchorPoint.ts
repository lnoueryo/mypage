export const useScrollToAnchorPoint = () => {
  const hash = computed(() => window.location.hash)
  const scrollToAnchorPoint = (refName: string) => {
    if (!refName) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const url = new URL(window.location.href)
      url.hash = ''
      history.replaceState(null, document.title, url.toString())
      return
    }
    history.pushState(null, '', `#${refName}`)
    let timer = setInterval(() => {
      const el = document.getElementById(refName)
      if(el) {
        clearInterval(timer)
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
  const loadPage = (hashs: string[]) => {
    if (hash.value) {
      const refName = hash.value.replace('#', '');
      const isRef = hashs.some((hash) => {
        return hash === refName;
      });
      if (!isRef) return;
      scrollToAnchorPoint(refName);
    }
  }
  const isArgCurrentHash = (arg: string) => arg === hash.value.replace('#', '')
  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // スムーズなスクロール
    });
  }
  return {
    hash,
    scrollToAnchorPoint,
    loadPage,
    isArgCurrentHash,
    scrollToEnd,
  }
}