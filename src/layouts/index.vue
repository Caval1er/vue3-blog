<template>
  <div class="layout-container">
    <a-layout>
      <a-layout-header>
        <layout-header />
      </a-layout-header>
      <a-layout-content>
        <layout-page />
      </a-layout-content>
      <a-layout-footer>
        <layout-footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import LayoutPage from './page.vue'
import LayoutHeader from './header/index.vue'
import LayoutFooter from './footer.vue'
</script>
<style lang="less" scoped>
.layout-container {
  .ant-layout {
    .ant-layout-header {
      background-color: var(--navbar-bg);
      box-shadow: var(--box-shadow);
      z-index: 20;
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }
    .ant-layout-content {
      margin-top: 64px;
      background-color: var(--vp-c-bg);
    }
  }
}
</style>
