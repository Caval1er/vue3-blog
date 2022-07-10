<template>
  <div class="tags-container">
    <a-space>
      <a-tag v-for="tag in props.tagList" :key="tag.name">{{ tag.name }}</a-tag>
    </a-space>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tagList: { name: string }[]
}
const props = defineProps<Props>()
</script>

<style lang="less" scoped>
.tags-container {
  padding-top: 5px;
  .ant-tag {
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
