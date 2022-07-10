import ClipboardJS from 'clipboard'
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'

export const useCodeCopy = () => {
  const clipboard = ref<ClipboardJS>()
  onMounted(() => {
    clipboard.value = new ClipboardJS('.copy', {
      target: function (trigger) {
        return trigger.nextElementSibling!
      },
    })
    clipboard.value?.on('success', function (e) {
      e.trigger.classList.add('copied')
      setTimeout(() => {
        e.trigger.classList.remove('copied')
      }, 1000)
      e.clearSelection()
    })
  })
  onUnmounted(() => {
    clipboard.value?.destroy()
  })
}
