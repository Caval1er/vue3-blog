<template>
  <span
    class="iconify"
    :data-icon="props.icon"
    data-inline="false"
    :style="getStyle"
  ></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  size: {
    type: Number,
    default: 16,
  },
})

const getStyle = computed(() => {
  const { size, color } = props
  return color === 'currentColor'
    ? { fontSize: `${size}px`, display: 'inline-flex' }
    : {
        fontSize: `${size}px`,
        color: color,
        display: 'inline-flex',
      }
})
</script>

<style lang="less" scoped></style>
