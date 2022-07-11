<template>
  <div class="article-list-container">
    <a-tabs v-model:activeKey="activeKey" animated type="card">
      <a-tab-pane key="1"
        ><template #tab>
          <span>
            <Icon icon="fa:list-ul" />
          </span> </template
        ><a-list
          item-layout="horizontal"
          :data-source="data"
          :pagination="pagination"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <template #actions>
                <router-link to=""
                  ><Icon icon="gg:enter" :size="20"
                /></router-link>
              </template>
              <a-list-item-meta>
                <template #description>
                  <a-typography-paragraph
                    :ellipsis="{ rows: 4 }"
                    content=" Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
                /></template>

                <template #title>
                  <a href="https://www.antdv.com/">{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
              </a-list-item-meta>
              <div class="article-list-tag-container">
                <TagsItem
                  :tag-list="[
                    { name: '#Vue', color: '#42b883' },
                    { name: '#Javascript', color: '#42b883' },
                  ]"
                  :gap="4"
                />
              </div>
            </a-list-item>
          </template> </a-list
      ></a-tab-pane>
      <a-tab-pane key="2"
        ><template #tab>
          <span>
            <Icon icon="bi:grid-fill" />
          </span> </template
        ><a-list
          :grid="{ gutter: 16, column: 4 }"
          :data-source="data"
          :pagination="pagination"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title">Card content</a-card>
            </a-list-item>
          </template>
        </a-list></a-tab-pane
      >
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeKey = ref('1')
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]
const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 3,
}
</script>

<style lang="less" scoped>
.article-list-container {
  max-width: 1200px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  .ant-list {
    .ant-list-item {
      // height: 125px;
    }
    .ant-list-item-meta {
      :deep(.ant-list-item-meta-title) {
        font-size: 1.5rem;
        align-items: center;
      }
      .ant-avatar {
        width: 100px;
        height: 100px;
      }
      .ant-list-item-meta-description {
        .ant-typography {
          padding-right: 50px;
        }
      }
    }
  }
}
</style>
