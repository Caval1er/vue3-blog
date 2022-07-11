<template>
  <div ref="container" class="outline-anchor-container">
    <span ref="mark" class="outline-mark"></span>
    <nav>
      <ul class="root">
        <li v-for="outlineH2 in outlines" :key="outlineH2.link">
          <a
            class="outline-link"
            :href="outlineH2.link"
            @click.prevent="scrollToAnchor!(outlineH2.link)"
            >{{ outlineH2.text }}</a
          >
          <ul v-if="outlineH2.children">
            <li v-for="outlineH3 in outlineH2.children" :key="outlineH3.link">
              <a
                class="outline-link nested"
                :href="outlineH3.link"
                @click.prevent="scrollToAnchor!(outlineH3.link)"
                >{{ outlineH3.text }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { Header } from '#/article'
import { userActiveAnchor } from '../useOutline'
import { useScrollTo } from '@/composables/useScrollTo'
import { ref, watch } from 'vue'
const props = defineProps<{
  outlines: Header[]
}>()
const container = ref()
const mark = ref()
watch(
  () => props.outlines,
  () => {
    outlines.value = props.outlines
  }
)
const onScroll = userActiveAnchor(container, mark)
const { scrollToAnchor } = useScrollTo(onScroll, 64)
const outlines = ref(props.outlines)
</script>

<style lang="less" scoped></style>
