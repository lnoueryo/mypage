export const useScrollToAnchorPoint = () => {
  const hash = computed(() => window.location.hash)
  const scrollToAnchorPoint = (refName: string) => {
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
  return {
    hash,
    scrollToAnchorPoint,
    loadPage
  }
}