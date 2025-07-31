<script setup lang="ts">
import { ref } from 'vue';
import { getProgressiveImageClasses, type ProgressiveImageVariants } from './index';

const props = defineProps<ProgressiveImageVariants & {
    src: string;
    width: number;
    height: number;
    alt?: string;
    class?: string;
}>()

const loaded = ref(false);
const handleLoad = () => (loaded.value = true);
</script>

<template>
    <div class="relative overflow-hidden rounded-lg shadow-md"
        :style="`width: ${width}px; height: ${height}px;`">
        <div v-show="!loaded" :class="getProgressiveImageClasses({ variant: variant }, props.class)"></div>
        <img :src="src" :alt="alt || ''"
            class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
            :class="loaded ? 'opacity-100' : 'opacity-0'" @load="handleLoad" draggable="false" />
    </div>
</template>

<style scoped></style>
