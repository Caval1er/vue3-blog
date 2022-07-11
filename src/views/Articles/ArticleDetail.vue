<template>
  <div class="article-detail-container">
    <a-layout :has-sider="false">
      <a-layout-header ref="header"
        ><a-image
          :width="200"
          src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/mYb1fWj36xhm6z1hQnz5.jpg?auto=format"
          :preview="false"
      /></a-layout-header>
      <a-layout-content>
        <div id="article-container" ref="articleContainerRef">
          <a-card :bordered="false">
            <a-page-header title="Title" :ghost="false" @back="handleBack">
              <div class="date-container">
                <a-space><span>2022-07-10 13:23</span></a-space>
              </div>
              <TagsItem
                :tag-list="[{ name: '#Vue' }, { name: '#Javascript' }]"
              />
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
            </a-page-header>
            <article v-dompurify-html="html" class="markdown-body"></article>
          </a-card>
        </div>
      </a-layout-content>
      <a-layout-sider
        class="article-detail-outline"
        collapsible
        :collapsed-width="0"
        :zero-width-trigger-style="{
          top: '-70px',
        }"
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
import { useGo } from '@/composables/usePage'
const props = defineProps({
  id: {
    type: String,
    default: '0',
  },
})
const { html, headers } = useContent(Number(props.id))
useCodeCopy()
const { go } = useGo()
const handleBack = () => {
  go('/article')
}
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
    // justify-content: center;
    // flex-wrap: wrap;
    // align-items: flex-start !important;
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
      :deep(.ant-page-header-heading-left) {
        overflow: visible;
        position: relative;
        .ant-page-header-back {
          position: absolute;
          left: -25px;
        }
        .ant-page-header-heading-title {
          font-size: 2.5em;
          color: var(--vp-c-text-1);
        }
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
        padding-top: 0px;
        .ant-typography {
          font-size: 1rem;
          margin: 20px 0 0 0;
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
      .date-container {
        color: var(--vp-c-text-2);
        font-size: 1rem;
        font-weight: 600;
      }
    }
    .ant-layout-content {
      // max-width: 1200px;
      // min-width: 650px;
      // width: 50%;
      display: flex;
      justify-content: center;
      width: auto;
      margin-left: 14rem;
      padding-right: 14rem;
      flex: none;
      #article-container {
        max-width: 860px;
      }
    }
  }
}
</style>
