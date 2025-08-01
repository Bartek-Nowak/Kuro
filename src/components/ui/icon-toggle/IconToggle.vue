<script setup lang="ts">
import { computed } from 'vue';
import { getIconToggleClasses, type IconToggleVariants } from '.';

const active = defineModel<boolean>({ default: false })

const props = defineProps<IconToggleVariants & {
  mode: 'click' | 'hover',
  class?: string;
}>();

const baseClass = computed(() =>
  getIconToggleClasses({ variant: props.variant }, props.class)
);

const toggle = () => {
  if(props.mode !== 'click') return
  active.value = !active.value
};

const hoverToggle = () => {
  if(props.mode !== 'hover') return
  active.value = !active.value
};
</script>

<template>
  <div
    class="group inline-block relative w-6 h-6 cursor-pointer"
    @click="toggle"
    @mouseover="hoverToggle"
    @mouseout="hoverToggle"
  >
    <div
      class="transition-opacity"
      :class="[active ? 'opacity-0 scale-75' : 'opacity-100 scale-100', baseClass]"
    >
      <slot />
    </div>
    <div
      class="transition-opacity"
      :class="[active ? 'opacity-100 scale-100' : 'opacity-0 scale-75', baseClass]"
    >
      <slot name="alt" />
    </div>
  </div>
</template>
