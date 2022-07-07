// 获取对应id文章的html
import { getHtmlWithHeader } from '@/api/sys/markdown'
import { ref, onMounted } from 'vue'
import type { Header } from '#/markdown'
interface contentOption {
  withHeader: boolean
}
export const useContent = (
  id: number,
  option: contentOption = { withHeader: true }
) => {
  const { withHeader } = option
  const html = ref('')
  if (withHeader) {
    const headers = ref<Header[]>([])
    onMounted(async () => {
      const ret = await getHtmlWithHeader({ id })
      html.value = ret.html
      headers.value = ret.headers
    })
    return {
      html,
      headers,
    }
  } else {
    // 调用不需要header的api
    const headers = ref<Header[]>([])
    return {
      html,
      headers,
    }
  }
}
