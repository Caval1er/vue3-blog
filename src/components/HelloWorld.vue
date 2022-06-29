<script setup lang="ts">
import { useStore } from '@/store/modules/pinia'
const store = useStore()
</script>

<template>
  {{ store.couter }}
  <a-button type="primary" @click="store.increment">+</a-button>
</template>

<style scoped></style>
