<script setup lang="ts">
import { getCalloutClasses, type CalloutVariants } from '.';

const props = defineProps<CalloutVariants & { class?: string }>();
</script>

<template>
  <div :class="getCalloutClasses(props.class, { variant: variant })">
    <div v-if="$slots.icon" class="pt-0.5">
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
