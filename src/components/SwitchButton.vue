<template>
  <button
    class="switch-button"
    type="button"
    role="switch"
    @click="changeChecked"
  >
    <span class="check">
      <span v-if="$slots.default" class="icon"><slot></slot></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
})
const isCheck = ref(props.checked)
const emit = defineEmits(['update:checked', 'click'])
watch(
  () => props.checked,
  () => (isCheck.value = props.checked)
)

const changeChecked = () => {
  isCheck.value = !isCheck.value
  emit('update:checked', isCheck.value)
  emit('click', isCheck.value)
}
</script>

<style lang="less" scoped></style>
