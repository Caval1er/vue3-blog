<template>
  <div class="article-detail-container">
    <a-layout :style="{ 'justify-content': 'center' }">
      <a-layout-content :style="{ 'max-width': '1200px' }">
        <a-card>
          <article class="markdown-body">
            <div v-dompurify-html="html"></div>
          </article>
        </a-card>
      </a-layout-content>
      <a-layout-sider class="article-detail-outline"
        ><Outline :outlines="headers"
      /></a-layout-sider>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import Outline from './components/OutlineItem.vue'
import { debounce } from 'lodash-es'
// 获取html和,headers
import { useContent } from './useContent'
const { html, headers } = useContent(1)
</script>

<style scoped lang="less">
.ant-card {
  font-size: 16px;
  :deep(.ant-card-body) {
    padding: 0;
  }
}
</style>
