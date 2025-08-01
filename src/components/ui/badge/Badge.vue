<script setup lang="ts">
import { getBadgeClasses, type BadgeVariants } from './index';

const props = defineProps<BadgeVariants & { class?: string }>();
</script>

<template>
  <span :class="getBadgeClasses({ variant: variant, size: size }, props.class)">
    <slot />
  </span>
</template>
