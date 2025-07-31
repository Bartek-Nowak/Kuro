<script setup lang="ts">
import { getAlertClasses, type AlertVariants } from '.';

const props = defineProps<
  AlertVariants & {
    titleTag?: string;
    descriptionTag?: string;
    class?: string;
  }
>();

const titleTag = props.titleTag ?? 'p';
const descriptionTag = props.descriptionTag ?? 'p';
</script>

<template>
  <div :class="getAlertClasses({ variant: props.variant, size: props.size }, props.class)">
    <div class="space-y-1" v-if="$slots.title || $slots.description">
      <component :is="titleTag" v-if="$slots.title" class="font-semibold">
        <slot name="title" />
      </component>
      <component :is="descriptionTag" v-if="$slots.description" class="text-sm opacity-80">
        <slot name="description" />
      </component>
    </div>
    <slot />
  </div>
</template>
