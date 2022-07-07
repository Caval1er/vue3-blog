<template>
  <div class="switch-apperance-container">
    <switch-button v-model:checked="isDark" @click="toggle"
      ><span class="sun">sum</span>
      <span class="moon">moon</span>
    </switch-button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle, useStorage } from '@vueuse/core'
import { ThemeEnum } from '@/enums/cacheEnum'
import { onMounted, ref } from 'vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const userPreference = useStorage(ThemeEnum.APPERANCE_KEY, 'auto')
const query = ref<MediaQueryList>()

onMounted(() => {
  useApperance()
})
const useApperance = () => {
  query.value = window.matchMedia('(prefers-color-scheme: dark)')
  if (userPreference.value === 'auto') {
    toggleDark(query.value.matches)
  } else {
    toggleDark(userPreference.value === 'dark')
  }
  query.value.onchange = (e) => {
    if (userPreference.value === 'auto') {
      toggleDark(e.matches)
    }
  }
}

const toggle = (newDarkValue: boolean) => {
  toggleDark(newDarkValue)
  console.log(newDarkValue)

  userPreference.value = isDark.value
    ? query.value?.matches
      ? 'auto'
      : 'dark'
    : query.value?.matches
    ? 'light'
    : 'auto'
}
</script>

<style lang="less" scoped>
.switch-apperance-container {
  .sun {
    opacity: 1;
  }
  .moon {
    opacity: 0;
  }
}

.dark .sun {
  opacity: 0;
}
.dark .moon {
  opacity: 1;
}
</style>
