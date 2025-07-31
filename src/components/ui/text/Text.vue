<script setup lang="ts">
import { getTextClasses, type TextVariants } from '.'

const props = defineProps<TextVariants & { as?: string, class?: string }>()
</script>

<template>
  <component
    :is="as || 'p'"
    :class="getTextClasses({ variant: variant, size: size }, props.class)"
  >
    <slot />
  </component>
</template>
