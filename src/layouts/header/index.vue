<template>
  <div class="navbar-contianer">
    <a-space size="large">
      <switch-apperance />
      <div class="github-container">
        <a href="">
          <Icon icon="akar-icons:github-fill" :size="25" />
        </a>
      </div>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import SwitchApperance from './SwitchApperance.vue'
</script>
<script></script>

<style lang="less" scoped>
.navbar-contianer {
  line-height: 1;
  .ant-space {
    height: 64px;
    align-items: center;
    :deep(.switch-apperance-container) {
      margin-top: 2px;
    }
    .github-container a {
      display: flex;
      gap: 4px;
      align-items: center;
      color: var(--vp-c-text-1);
      transition: color 0.25s;
      &:hover {
        color: var(--vp-c-text-2);
      }
    }
  }
}
</style>
