<script setup lang="ts">
import { getButtonClasses, type ButtonVariants } from '.'

const props = defineProps<ButtonVariants & { as?: string, class?: string }>()
</script>

<template>
  <component
    :is="as || 'button'"
    :class="getButtonClasses(props.class, { variant: variant, size: size })"
  >
    <slot />
  </component>
</template>
