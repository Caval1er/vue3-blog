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
<style lang="less" scoped></style>
