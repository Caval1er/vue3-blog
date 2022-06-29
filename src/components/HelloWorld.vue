<script setup lang="ts">
import { useStore } from '@/store/modules/pinia'
const store = useStore()
</script>

<template>
  {{ store.couter }}
  <button @click="store.increment">+</button>
</template>

<style scoped></style>
