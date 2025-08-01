<script setup lang="ts">
import { computed } from 'vue';
import { getAvatarClasses, type AvatarVariants } from './index';

const props = defineProps<AvatarVariants & {
    src?: string;
    alt?: string;
    initials?: string;
    class?: string
}>();

const hasImage = computed(() => !!props.src);
</script>

<template>
    <div :class="getAvatarClasses({ variant: variant, size: size }, props.class)" role="img"
        :aria-label="alt ?? 'Avatar'">
        <img v-if="hasImage" :src="src" :alt="alt ?? 'Avatar'" class="w-full h-full object-cover rounded-full"
            draggable="false" />
        <span v-else>{{ initials?.toUpperCase() || '?' }}</span>
    </div>
</template>
