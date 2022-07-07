import { Ref, onMounted, onUnmounted } from 'vue'
import { throttleAndDebounce } from '@/utils/index'
const PAGE_OFFSET = 56
export function userActiveAnchor(
  container: Ref<HTMLElement>,
  mark: Ref<HTMLElement>
) {
  let prevActiveLink: HTMLAnchorElement | null = null
  const onScroll = throttleAndDebounce(setActiveLink, 100)
  onMounted(() => {
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
  function setActiveLink() {
    const links = [].slice.call(
      container.value.querySelectorAll(
        '.outline-anchor-container .outline-link'
      )
    ) as HTMLAnchorElement[]

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
        history.replaceState(null, document.title, hash ? hash : '')
        activateLink(hash)
        return
      }
    }
  }
  function activateLink(hash: string | null) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active')
    }

    if (hash !== null) {
      prevActiveLink = container.value.querySelector(
        `a[href="${decodeURIComponent(hash)}"]`
      ) as HTMLAnchorElement
    } else {
      prevActiveLink = null
    }

    const activeLink = prevActiveLink
    console.log(activeLink)
    if (activeLink) {
      activeLink.classList.add('active')
      mark.value.style.top = activeLink.offsetTop + 4 + 'px'
      mark.value.style.opacity = '1'
    } else {
      mark.value.style.top = 32 + 'px'
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
    } else if (
      anchor.parentElement!.offsetTop + PAGE_OFFSET - 60 - scrollTop >
      0
    ) {
      return [false, null]
    } else if (
      !nextAnchor ||
      nextAnchor.parentElement!.offsetTop + PAGE_OFFSET - 60 - scrollTop > 0
    ) {
      return [true, anchor.hash]
    }
    return [false, null]
  }
}
