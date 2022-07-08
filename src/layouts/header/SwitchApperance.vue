<template>
  <div class="switch-apperance-container">
    <switch-button v-model:checked="isDark" @click="toggle"
      ><Icon icon="bx:sun" class="sun" /><Icon
        icon="bytesize:moon"
        class="moon"
      />
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
    position: absolute;
    opacity: 1;
    top: 1px;
    left: 0px;
    color: var(--vp-c-text-2);
  }
  .moon {
    position: absolute;
    opacity: 0;
    top: 1px;
    left: 0px;
    color: var(--vp-c-text-2);
  }
}

.dark .sun {
  opacity: 0;
}
.dark .moon {
  opacity: 1;
  color: var(--vp-c-text-1);
}
</style>
