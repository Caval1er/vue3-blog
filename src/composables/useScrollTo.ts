export const useScrollTo = (cancle?: () => void) => {
  if (cancle) {
    let timeout: NodeJS.Timeout
    const scrollToAnchor = (href: string) => {
      if (timeout) {
        clearTimeout(timeout)
      }
      window.removeEventListener('scroll', cancle)
      const anchorElement = document.querySelector(href) as HTMLElement
      anchorElement?.scrollIntoView({
        behavior: 'smooth',
      })
      const activeLink = document.querySelector(
        `a[href="${decodeURIComponent(href)}"].outline-link`
      ) as HTMLAnchorElement
      history.replaceState(null, document.title, href)
      const prevActiveLink = document.querySelector('.outline-link.active')
      if (prevActiveLink) {
        prevActiveLink.classList.remove('active')
      }
      const mark = document.querySelector('.outline-mark') as HTMLElement
      activeLink.classList.add('active')
      mark.style.top = activeLink.offsetTop + 4 + 'px'
      mark.style.opacity = '1'
      timeout = setTimeout(() => {
        window.addEventListener('scroll', cancle)
      }, 1000)
    }
    return {
      scrollToAnchor,
    }
  }
  return {}
}
