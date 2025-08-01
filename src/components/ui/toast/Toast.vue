<script setup lang="ts">
import { toasts, removeToast, getToastClasses } from '.';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

const props = defineProps<{ class?: string }>()

</script>

<template>
    <div class="fixed bottom-4 right-4">
        <transition-group name="toast" tag="div">
            <div v-for="toast in toasts" :key="toast.id"
                :class="getToastClasses({ variant: toast.variant, size: toast.size }, props.class)">
                <Text>{{ toast.label }}</Text>
                <Text>{{ toast.message }}</Text>
                <Button variant="ghost" size="sm" class="absolute top-0 right-0"
                    @click="removeToast(toast.id)" aria-label="Dismiss notification">×</Button>
            </div>
        </transition-group>
    </div>
</template>

<style>
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.toast-enter-to,
.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
</style>
