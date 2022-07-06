<template>
  <div class="article-detail-container">
    <a-layout :style="{ 'justify-content': 'center' }">
      <a-layout-content :style="{ 'max-width': '1200px' }">
        <a-card :style="{ padding: '40px' }">
          <article class="markdown-body">
            <div v-dompurify-html="html"></div>
          </article>
        </a-card>
      </a-layout-content>
      <a-layout-sider :style="{ position: 'fixed', right: 0 }"
        >a</a-layout-sider
      >
    </a-layout>
  </div>
</template>

<script setup lang="ts">
// 获取html和,headers
import { useContent } from './useContent'
const { html, headers } = useContent(1)
</script>

<style scoped lang="less">
.ant-card {
  font-size: 16px;
}
</style>
