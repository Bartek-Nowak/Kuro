<script setup lang="ts">
import { defineProps } from 'vue'
import { getButtonClasses, type ButtonVariants } from '.'

const props = defineProps<ButtonVariants & { as?: string, class?: string }>()
</script>

<template>
  <component
    :is="props.as || 'button'"
    :class="getButtonClasses(props.class, { variant: props.variant, size: props.size })"
  >
    <slot />
  </component>
</template>
