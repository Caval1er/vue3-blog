export const useScrollTo = (cancle?: () => void, offsetTop = 0) => {
  if (cancle) {
    let timeout: NodeJS.Timeout
    const scrollToAnchor = (href: string) => {
      if (timeout) {
        clearTimeout(timeout)
      }
      window.removeEventListener('scroll', cancle)
      const anchorElement = document.querySelector(
        decodeURIComponent(href)
      ) as HTMLElement
      // anchorElement?.scrollIntoView({
      //   behavior: 'smooth',
      // })
      const documentScrollTop = document.documentElement.scrollTop
      const elementTop = anchorElement.getBoundingClientRect().top
      window.scrollTo({
        top: documentScrollTop + elementTop - offsetTop,
        behavior: 'smooth',
      })
      const activeLink = document.querySelector(
        `a[href="${decodeURIComponent(href)}"].outline-link`
      ) as HTMLAnchorElement
      history.replaceState(history.state, document.title, href)
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
