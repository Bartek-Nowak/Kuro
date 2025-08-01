<script setup lang="ts">
import { Alert } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';
import { ProgressiveImage } from '@/components/ui/progressive-image';
import { Progress } from '@/components/ui/progress';
import { Stat } from './components/ui/stat';
import { Text } from '@/components/ui/text';
import { IconToggle } from '@/components/ui/icon-toggle'

const alertVariants = ['default', 'destructive', 'success', 'warning'] as const;
const buttonVariants = ['default', 'destructive', 'outline', 'ghost', 'link'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
const textVariants = ['default', 'primary', 'secondary', 'muted', 'destructive', 'success', 'warning', 'info'] as const;
</script>

<template>
  <div class="p-4 space-y-16">
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

     <div class="space-y-4">
    <div>
      <h3 class="mb-2 font-semibold">Variants</h3>
      <Badge variant="default">Default</Badge>
      <Badge variant="success" class="ml-2">Success</Badge>
      <Badge variant="warning" class="ml-2">Warning</Badge>
      <Badge variant="error" class="ml-2">Error</Badge>
      <Badge variant="info" class="ml-2">Info</Badge>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Sizes</h3>
      <Badge size="sm" variant="info">Small</Badge>
      <Badge size="md" variant="info" class="ml-2">Medium</Badge>
      <Badge size="lg" variant="info" class="ml-2">Large</Badge>
    </div>
  </div>

    <!-- Callout -->
    <div class="mt-10 space-y-6">
      <h3 class="text-lg font-semibold">Callout variants</h3>
      <div class="space-y-4">
        <Callout variant="info">
          <template #icon>
            <span>ℹ️</span>
          </template>
          <template #title>
            Info callout
          </template>
          This is an informative message for the user.
        </Callout>

        <Callout variant="success">
          <template #icon>
            <span>✅</span>
          </template>
          <template #title>
            Success callout
          </template>
          Everything went smoothly.
        </Callout>

        <Callout variant="warning">
          <template #icon>
            <span>⚠️</span>
          </template>
          <template #title>
            Warning callout
          </template>
          Something may require your attention.
        </Callout>

        <Callout variant="danger">
          <template #icon>
            <span>🛑</span>
          </template>
          <template #title>
            Danger callout
          </template>
          There was a problem processing your request.
        </Callout>
      </div>
    </div>

    <IconToggle mode="click">
      🙂
      <template #alt>
      😡
      </template>
    </IconToggle>

    <ProgressiveImage :width="256" :height="256" variant="bounce" src="x" alt="Random landscape" />
    <ProgressiveImage :width="256" :height="256" variant="flash" src="x" alt="Random landscape" />
    <ProgressiveImage :width="256" :height="256" variant="ping" src="x" alt="Random landscape" />
    <ProgressiveImage :width="256" :height="256" variant="shimmer_simple" src="x" alt="Random landscape" />
    <ProgressiveImage :width="256" :height="256" variant="spin" src="x" alt="Random landscape" />
    <ProgressiveImage :width="256" :height="256" src="x" alt="Random landscape" />

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

    <!-- Progress -->
    <div class="space-y-6 mt-10">
      <Progress :value="45" variant="determinate" />
      <Progress :value="25" variant="success" />
      <Progress :value="35" variant="warning" />
      <Progress :value="25" variant="error" />
      <Progress :value="85" variant="accent" />
      <Progress :value="95" variant="muted" />
    </div>

    <!-- Stat -->
    <div>
      <Stat trend="up">
        <template #icon>📈</template>
        <template #label>Revenue</template>
        <template #value>$12,345</template>
        <template #trendValue>+5%</template>
      </Stat>
      <Stat trend="down" class="mt-6">
        <template #icon>📉</template>
        <template #label>Revenue</template>
        <template #value>$12,345</template>
        <template #trendValue>-5%</template>
      </Stat>
    </div>

    <!-- Text -->
    <!-- Alerts -->
    <div class="space-y-6">
      <div v-for="variant in textVariants" :key="variant" class="space-y-4">
        <h3 class="font-semibold capitalize">{{ variant }} variant</h3>
        <div class="flex flex-wrap gap-4">
          <Text v-for="size in sizes" :key="variant + '-' + size" :variant="variant" :size="size">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nam ipsa error, architecto at dolorum
            consequatur distinctio velit labore ratione? Omnis dicta ad ipsum quis, molestias earum natus eius in.
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>
