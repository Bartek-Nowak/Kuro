<script setup lang="ts">
import { computed } from 'vue';
import { getIconToggleClasses, type IconToggleVariants } from '.';

const props = defineProps<IconToggleVariants & { active?: boolean, class?: string }>();

const baseClass = computed(() =>
    getIconToggleClasses({ variant: props.variant }, props.class)
);

</script>

<template>
    <div class="group inline-block relative w-6 h-6 cursor-pointer">
        <div class="group-hover:opacity-0 group-hover:scale-75"
            :class="[active ? 'opacity-0 scale-75' : 'opacity-100 scale-100', baseClass]">
            <slot />
        </div>
        <div class="group-hover:opacity-100 group-hover:scale-100"
            :class="[active ? 'opacity-100 scale-100' : 'opacity-0 scale-75', baseClass]">
            <slot name="alt" />
        </div>
    </div>
</template>
