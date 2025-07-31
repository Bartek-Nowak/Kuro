<script setup lang="ts">
import { getCalloutClasses, type CalloutVariants } from '.';

const props = defineProps<CalloutVariants & { class?: string }>();
</script>

<template>
  <div :class="getCalloutClasses({ variant: variant }, props.class)">
    <div v-if="$slots.icon" class="flex items-center p-1">
      <slot name="icon" />
    </div>
    <div class="space-y-1">
      <div v-if="$slots.title" class="font-semibold leading-tight">
        <slot name="title" />
      </div>
      <div class="text-sm leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>
