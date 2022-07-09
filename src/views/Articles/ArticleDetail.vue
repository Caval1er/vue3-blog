<template>
  <div class="article-detail-container">
    <a-layout :style="{ 'align-items': 'center' }">
      <a-layout-header ref="header"
        ><a-image
          :width="200"
          src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/mYb1fWj36xhm6z1hQnz5.jpg?auto=format"
          :preview="false"
      /></a-layout-header>
      <a-layout-content :style="{ 'max-width': '1200px' }">
        <div id="article-container" ref="articleContainerRef">
          <a-card :bordered="false">
            <a-page-header
              title="Title"
              sub-title="2022-07-08 17:00"
              :ghost="false"
              @back="() => $router.go(-1)"
            >
              <a-typography-paragraph
                :underline="true"
                :strong="true"
                :ellipsis="{ rows: 5 }"
                content="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
              />
              <template #tags>
                <a-tag color="blue">Vue</a-tag>
              </template>
            </a-page-header>
            <article v-dompurify-html="html" class="markdown-body"></article>
          </a-card>
        </div>
      </a-layout-content>
      <a-layout-sider class="article-detail-outline"
        ><Outline :outlines="headers"
      /></a-layout-sider>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import Outline from './components/OutlineItem.vue'
// 获取html和,headers
import { useContent } from './useContent'
import { useCodeCopy } from '@/composables/useCodeCopy'

const props = defineProps({
  id: {
    type: String,
    default: '0',
  },
})
const { html, headers } = useContent(Number(props.id))
useCodeCopy()
</script>

<style scoped lang="less">
.ant-card {
  font-size: 16px;
  :deep(.ant-card-body) {
    padding: 0;
  }
}

.article-detail-container {
  position: relative;
  .ant-layout {
    background-color: var(--vp-c-bg);
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start !important;
    .ant-layout-header {
      background-color: transparent;
      height: auto;
      width: 100%;
      margin-bottom: 50px;
      :deep(.ant-image) {
        display: flex;
        justify-content: center;
        width: 100% !important;
        .ant-image-img {
          max-width: 100rem;
          max-height: 35rem;
          object-fit: cover;
        }
      }
    }
    .ant-page-header {
      background-color: var(--vp-c-bg);

      :deep(.ant-page-header-heading-title) {
        font-size: 2.5em;
        color: var(--vp-c-text-1);
      }
      :deep(.ant-page-header-back-button) {
        color: var(--vp-c-text-1);
      }
      :deep(.ant-page-header-heading-sub-title) {
        align-self: flex-end;
        line-height: 1;
        color: var(--vp-c-text-2);
      }
      :deep(.ant-page-header-content) {
        padding-top: 50px;
        .ant-typography {
          color: var(--vp-c-text-1);
        }
      }
      :deep(.ant-page-header-heading-tags) {
        align-self: flex-end;
        .ant-tag {
          font-size: 18px;
          height: 20px;
          display: flex;
          align-items: center;
        }
      }
    }
    .ant-layout-content {
      max-width: 1200px;
      min-width: 650px;
      width: 50%;
      flex: none;
    }
  }
}
</style>
