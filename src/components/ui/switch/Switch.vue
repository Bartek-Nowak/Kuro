<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue';
import { getSwitchClasses, switchVariants, type SwitchVariants } from '.'

const model = defineModel<boolean>({ default: false })

const props = defineProps<SwitchVariants & {
    disabled?: boolean;
    class?: string;
}>()

const toggle = () => {
    if (props.disabled) return;
    model.value = !model.value
};

const knobClass = computed(() => {
    const transformX = switchVariants.knobTransform[props.size ?? 'md']
    return model.value ? transformX : 'translate-x-1'
})
</script>

<template>
    <button type="button"
        :class="[getSwitchClasses({ variant: variant, size: size }, props.class), !model && 'grayscale-80', disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
        role="switch" :disabled="disabled" @click="toggle">
        <span :class="knobClass"></span>
    </button>
</template>
