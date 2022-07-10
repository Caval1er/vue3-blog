import { Ref, onMounted, onUnmounted } from 'vue'
import { throttleAndDebounce } from '@/utils/index'
let pageOffset = 56
export function userActiveAnchor(
  container: Ref<HTMLElement>,
  mark: Ref<HTMLElement>
) {
  // pageOffset = header.value.offsetHeight + 50
  const onScroll = throttleAndDebounce(setActiveLink, 100)
  const onShow = throttleAndDebounce(setOutlineShow, 100)
  onMounted(() => {
    // requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('scroll', onShow)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('scroll', onShow)
  })
  function setActiveLink() {
    const links = [].slice.call(
      container.value.querySelectorAll(
        '.outline-anchor-container .outline-link'
      )
    ) as HTMLAnchorElement[]
    const header = document.querySelector(
      '.article-detail-container .ant-layout-header'
    ) as HTMLElement
    pageOffset = header.offsetHeight + 204
    const anchors = [].slice
      .call(document.querySelectorAll('.markdown-body .header-anchor'))
      .filter((anchor: HTMLAnchorElement) => {
        return links.some((link) => {
          return link.hash === anchor.hash && anchor.offsetParent !== null
        })
      }) as HTMLAnchorElement[]

    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    const offsetHeight = document.body.offsetHeight
    const isBottom = scrollY + innerHeight === offsetHeight

    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash)
      return
    }

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
      if (isActive) {
        history.replaceState(history.state, document.title, hash ? hash : '')
        activateLink(hash)
        return
      }
    }
    activateLink(null)
  }
  function activateLink(hash: string | null) {
    const prevActiveLink = document.querySelector('.outline-link.active')
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active')
    }
    let activeLink
    if (hash !== null) {
      activeLink = container.value.querySelector(
        `a[href="${decodeURIComponent(hash)}"]`
      ) as HTMLAnchorElement
    } else {
      activeLink = null
    }
    if (activeLink) {
      activeLink.classList.add('active')
      mark.value.style.top = activeLink.offsetTop + 4 + 'px'
      mark.value.style.opacity = '1'
    } else {
      // mark.value.style.top = 32 + 'px'
      mark.value.style.opacity = '0'
    }
  }

  function isAnchorActive(
    index: number,
    anchor: HTMLAnchorElement,
    nextAnchor: HTMLAnchorElement | undefined
  ): [boolean, string | null] {
    const scrollTop = window.scrollY
    if (scrollTop === 0 && index === 0) {
      return [true, null]
    } else if (anchor.parentElement!.offsetTop + pageOffset - scrollTop > 0) {
      return [false, null]
    } else if (
      !nextAnchor ||
      nextAnchor.parentElement!.offsetTop + pageOffset - scrollTop > 0
    ) {
      return [true, anchor.hash]
    }
    return [false, null]
  }
  return onScroll
}

function setOutlineShow() {
  const articleDom = document.querySelector('#article-container') as HTMLElement
  const outlineDom = document.querySelector(
    '.article-detail-outline'
  ) as HTMLElement
  const offToView = articleDom.getBoundingClientRect().top
  if (offToView <= 180) {
    outlineDom.style.opacity = '1'
  } else {
    outlineDom.style.opacity = '0'
  }
}
