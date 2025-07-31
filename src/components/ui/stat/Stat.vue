<script setup lang="ts">
import { getStatTrendClasses, type StatVariants } from '.';

const props = defineProps<StatVariants & { class?: string; trend?: 'up' | 'down' | 'neutral' }>();

const trendClasses = getStatTrendClasses(props.class, { trend: props.trend });
</script>

<template>
  <div class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
    <div v-if="$slots.icon" class="text-3xl">
      <slot name="icon" />
    </div>
    <div>
      <p class="text-sm font-medium text-gray-500">
        <slot name="label" />
      </p>
      <p class="text-2xl font-semibold text-gray-900">
        <slot name="value" />
      </p>
      <p v-if="trend && $slots.trendValue" :class="trendClasses"
        class="text-sm font-medium flex items-center space-x-1">
        <span>
          <template v-if="trend === 'up'">▲</template>
          <template v-else-if="trend === 'down'">▼</template>
          <template v-else>—</template>
        </span>
        <span>
          <slot name="trendValue" />
        </span>
      </p>
    </div>
  </div>
</template>
