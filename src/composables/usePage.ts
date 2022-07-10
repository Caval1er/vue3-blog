import { useRouter } from 'vue-router'

export const useGo = (isReplaced = false) => {
  const router = useRouter()
  function go(href: string) {
    isReplaced ? router.replace(href) : router.push(href)
  }
  return {
    go,
  }
}
