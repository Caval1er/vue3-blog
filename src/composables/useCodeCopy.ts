import ClipboardJS from 'clipboard'
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'

import { useMessage } from '@/hooks/web/useMessage'
const message = useMessage().createMessage

export const useCodeCopy = () => {
  const clipboard = ref<ClipboardJS>()
  onMounted(() => {
    clipboard.value = new ClipboardJS('.copy', {
      target: function (trigger) {
        return trigger.nextElementSibling!
      },
    })
    clipboard.value?.on('success', function (e) {
      message.success('复制成功', 1)
      e.clearSelection()
    })
  })
  onUnmounted(() => {
    clipboard.value?.destroy()
  })
}
