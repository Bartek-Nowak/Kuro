<script setup lang="ts">
import { computed } from 'vue'
import { getProgressClasses, type ProgressVariants } from './index'

const props = defineProps<ProgressVariants & { value: number, class?: string }>()

const rootClasses = computed(() =>
    getProgressClasses({ variant: props.variant }, props.class)
)

const indicatorStyle = computed(() => `width: ${Math.min(props.value, 100)}%`)
</script>

<template>
    <div :class="rootClasses">
        <div :style="indicatorStyle"></div>
    </div>
</template>
