<script setup lang="ts">
import { getBreadcrumbClasses, type BreadcrumbVariants } from './index';

interface BreadcrumbItem {
    label: string;
    href?: string;
    disabled?: boolean;
}

const props = defineProps<BreadcrumbVariants & {
    items: BreadcrumbItem[];
    class?: string
}>();
</script>

<template>
    <nav aria-label="Breadcrumb">
        <ol :class="getBreadcrumbClasses({ variant: variant, size: size }, props.class)">
            <li v-for="(item, index) in items" :key="index">
                <template v-if="item.href && !item.disabled">
                    <a :href="item.href" class="hover:opacity-50">
                        {{ item.label }}
                    </a>
                </template>
                <template v-else>
                    <span aria-current="page">
                        {{ item.label }}
                    </span>
                </template>

                <span v-if="index < items.length - 1">
                    <slot name="separator">
                        >
                    </slot>
                </span>
            </li>
        </ol>
    </nav>
</template>
