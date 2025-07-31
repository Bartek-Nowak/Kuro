<script setup lang="ts">
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';
import { Stat } from './components/ui/state';

const alertVariants = ['default', 'destructive', 'success', 'warning'] as const;
const buttonVariants = ['default', 'destructive', 'outline', 'ghost', 'link'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
</script>

<template>
  <div class="p-4">
    <!-- Alerts -->
    <div class="space-y-6">
      <div v-for="variant in alertVariants" :key="variant" class="space-y-4">
        <h3 class="font-semibold capitalize">{{ variant }} variant</h3>
        <div class="flex flex-wrap gap-4">
          <Alert v-for="size in sizes" :key="variant + '-' + size" :variant="variant" :size="size">
            <template #title>
              {{ variant }} alert
            </template>
            <template #description>
              This is a {{ variant }} alert with size {{ size }}.
            </template>
          </Alert>
        </div>
      </div>
    </div>

    <!-- Callout -->
    <div class="mt-10 space-y-6">
      <h3 class="text-lg font-semibold">Callout variants</h3>
      <div class="space-y-4">
        <Callout variant="info">
          <template #icon>
            <span class="text-blue-500">ℹ️</span>
          </template>
          <template #title>
            Info callout
          </template>
          This is an informative message for the user.
        </Callout>

        <Callout variant="success">
          <template #icon>
            <span class="text-green-500">✅</span>
          </template>
          <template #title>
            Success callout
          </template>
          Everything went smoothly.
        </Callout>

        <Callout variant="warning">
          <template #icon>
            <span class="text-yellow-500">⚠️</span>
          </template>
          <template #title>
            Warning callout
          </template>
          Something may require your attention.
        </Callout>

        <Callout variant="danger">
          <template #icon>
            <span class="text-red-500">🛑</span>
          </template>
          <template #title>
            Danger callout
          </template>
          There was a problem processing your request.
        </Callout>
      </div>
    </div>

    <!-- Buttons -->
    <div class="space-y-6 mt-10">
      <div v-for="variant in buttonVariants" :key="variant" class="space-y-4">
        <h3 class="font-semibold capitalize">{{ variant }} variant</h3>
        <div class="flex flex-wrap gap-4">
          <Button v-for="size in sizes" :key="variant + '-' + size" :variant="variant" :size="size">
            {{ variant }} - {{ size }}
          </Button>
        </div>
      </div>
    </div>
  </div>

  <!-- Stat -->
  <Stat trend="up">
    <template #icon>📈</template>
    <template #label>Revenue</template>
    <template #value>$12,345</template>
    <template #trendValue>+5%</template>
  </Stat>
  <Stat trend="down">
    <template #icon>📉</template>
    <template #label>Revenue</template>
    <template #value>$12,345</template>
    <template #trendValue>-5%</template>
  </Stat>
</template>
