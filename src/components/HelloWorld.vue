<script setup lang="ts">
import { useStore } from '@/store/modules/pinia'
const store = useStore()
const vhtml = `aaaaahello vue<img src="../qwe" onerror="alert(1)"/>`
</script>

<template>
  {{}}
  <a-button type="primary" @click="store.increment">+</a-button>
  <div v-dompurify-html="vhtml"></div>
</template>

<style scoped></style>
