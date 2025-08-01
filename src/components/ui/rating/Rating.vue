<script setup lang="ts">
import { ref } from 'vue';
import { Star } from 'lucide-vue-next';
import { getRatingClasses, type RatingVariants } from '.'

const model = defineModel<number>({ default: 0 })

const props = withDefaults(defineProps<RatingVariants & {
    max?: number;
    readonly?: boolean;
    class?: string;
}>(), {
    max: 5,
    readonly: false,
})

const hoverValue = ref<number | null>(null);

const handleClick = (index: number) => {
    if (!props.readonly) model.value = index;
};

const handleHover = (index: number | null) => {
    if (!props.readonly) hoverValue.value = index;
};
</script>

<template>
    <div class="inline-flex items-center gap-1" :class="props.class">
        <button v-for="index in max" :key="index" :aria-label="`Rate ${index} star`" type="button" :class="[getRatingClasses({ variant: variant, size: size }, props.class),
        readonly ? 'opacity-60 cursor-default' : 'cursor-pointer',
        ]" :disabled="readonly" @click="() => handleClick(index)" @mouseenter="() => handleHover(index)"
            @mouseleave="() => handleHover(null)">
            <Star :class="[
                (hoverValue ?? model) < index && 'fill-transparent dark:fill-transparent stroke-gray-400 dark:stroke-gray-500',
            ]" />
        </button>
    </div>
</template>
