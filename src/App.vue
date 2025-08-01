<script setup lang="ts">
import { Avatar, avatarVariants } from '@/components/ui/avatar';
import { Alert, alertVariants } from '@/components/ui/alert';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { Breadcrumb, breadcrumbVariants } from '@/components/ui/breadcrumb';
import { Button, buttonVariants } from '@/components/ui/button';
import { Callout, calloutVariants } from '@/components/ui/callout';
import { IconToggle } from '@/components/ui/icon-toggle';
import { ProgressiveImage, progressiveImageVariants } from '@/components/ui/progressive-image';
import { Progress, progressVariants } from '@/components/ui/progress';
import { Rating, ratingVariants } from '@/components/ui/rating';
import { Stat } from '@/components/ui/stat';
import { Switch, switchVariants } from '@/components/ui/switch';
import { Text, textVariants } from '@/components/ui/text';
import { Toast, addToast, toastVariants } from '@/components/ui/toast';

</script>

<template>
  <div class="p-6 max-w-7xl mx-auto space-y-20">

    <!-- Avatars -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Avatars</h2>
      <div class="flex items-center gap-4">
        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User photo" />
        <Avatar />
        <template v-for="(_, variant) in avatarVariants.variant">
          <Avatar v-for="(_, size) in avatarVariants.size" :size="size" :variant="variant"
            :initials="variant[0] + size[0]" />
        </template>
      </div>
    </section>

    <!-- Alerts -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Alerts</h2>
      <div class="space-y-8">
        <div v-for="(_, variant) in alertVariants.variant" :key="variant">
          <h3 class="mb-3 font-semibold capitalize dark:text-white">{{ variant }} variant</h3>
          <div class="flex flex-wrap gap-4">
            <Alert v-for="(_, size) in alertVariants.size" :key="variant + '-' + size" :variant="variant" :size="size">
              <template #title>{{ variant }} alert</template>
              <template #description>This is a {{ variant }} alert with size {{ size }}.</template>
            </Alert>
          </div>
        </div>
      </div>
    </section>

    <!-- Badges -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Badges</h2>
      <div class="flex flex-wrap items-center gap-4">
        <template v-for="(_, variant) in badgeVariants.variant">
          <Badge v-for="(_, size) in badgeVariants.size" :size="size" :variant="variant">{{ variant + " " + size }}
          </Badge>
        </template>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Breadcrumb</h2>
      <div class="space-y-8">
        <template v-for="(_, variant) in breadcrumbVariants.variant">
          <Breadcrumb v-for="(_, size) in breadcrumbVariants.size" :items="[
            { label: 'Home', href: '/' },
            { label: 'Library', href: '/library' },
            { label: 'Data', disabled: true }
          ]" :variant="variant" :size="size">
          </Breadcrumb>
        </template>
      </div>
    </section>

    <!-- Buttons -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Buttons</h2>
      <div class="space-y-8">
        <div v-for="(_, variant) in buttonVariants.variant" :key="variant">
          <h3 class="mb-3 font-semibold capitalize dark:text-white">{{ variant }} variant</h3>
          <div class="flex flex-wrap gap-4">
            <Button v-for="(_, size) in buttonVariants.size" :key="variant + '-' + size" :variant="variant"
              :size="size">
              {{ variant }} - {{ size }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Callouts -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Callouts</h2>
      <div class="space-y-6 max-w-xl">
        <Callout v-for="(_, variant) in calloutVariants.variant" :variant="variant">
          <template #icon>ℹ️</template>
          <template #title>{{ variant }}</template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugit.
        </Callout>
      </div>
    </section>

    <!-- Icon Toggle -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Icon Toggle</h2>
      <div class="flex flex-col flex-wrap gap-4">
        <p class="mb-3 font-semibold capitalize dark:text-white">click</p>
        <IconToggle mode="click">
          🙂
          <template #alt>😡</template>
        </IconToggle>
        <p class="mb-3 font-semibold capitalize dark:text-white">hover</p>
        <IconToggle mode="hover">
          🙂
          <template #alt>😡</template>
        </IconToggle>
      </div>
    </section>

    <!-- Progressive Images -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Progressive Images</h2>
      <div class="flex flex-wrap gap-6">
        <div v-for="(_, variant) in progressiveImageVariants.variant">
          <p class="mb-3 font-semibold capitalize dark:text-white">{{ variant }}</p>
          <ProgressiveImage :width="256" :height="256" :variant="variant" src="x" alt="Random landscape" />
        </div>
      </div>
    </section>

    <!-- Progress Bars -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Progress Bars</h2>
      <div class="space-y-4 max-w-xs">
        <template v-for="(_, variant) in progressVariants.variant">
          <p class="mb-3 font-semibold capitalize dark:text-white">{{ variant }}</p>
          <Progress :value="Math.floor(Math.random() * (90 - 10 + 1)) + 10" :variant="variant" />
        </template>
      </div>
    </section>

    <!-- Rating -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Rating</h2>
      <div class="space-y-4 max-w-xs">
        <div v-for="(_, variant) in ratingVariants.variant" class="flex flex-col gap-4 max-w-xs">
          <p class="mb-3 font-semibold capitalize dark:text-white">{{ variant }}</p>
          <Rating v-for="(_, size) in ratingVariants.size" :variant="variant" :size="size" />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Stats</h2>
      <div class="space-y-6 max-w-xs">
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
      </div>
    </section>

    <!-- Switch -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Switch</h2>
      <div class="space-y-8">
        <div v-for="(_, variant) in switchVariants.variant" :key="variant">
          <h3 class="mb-3 font-semibold capitalize dark:text-white">{{ variant }} variant</h3>
          <div class="flex flex-wrap gap-4">
            <Switch v-for="(_, size) in switchVariants.size" :key="variant + '-' + size" :variant="variant"
              :size="size" />
          </div>
        </div>
      </div>
    </section>

    <!-- Text Variants -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Text Variants</h2>
      <div class="space-y-8">
        <div v-for="(_, variant) in textVariants.variant" :key="variant">
          <h3 class="mb-3 font-semibold capitalize dark:text-white">{{ variant }} variant</h3>
          <div class="flex flex-col flex-wrap gap-4">
            <template v-for="(_, size) in textVariants.size" :key="variant + '-' + size">
              <p class="mb-3 font-semibold capitalize dark:text-white">Size - {{ size }}</p>
              <Text :variant="variant" :size="size">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nam ipsa error, architecto at
                dolorum
                consequatur distinctio velit labore ratione.
              </Text>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold dark:text-white">Toast</h2>
      <div class="space-y-4">
        <div class="space-x-4" v-for="(_, size) in toastVariants.size">
          <p class="mb-3 font-semibold capitalize dark:text-white">Size - {{ size }}</p>
          <Button v-for="(_, variant) in toastVariants.variant"
            @click="addToast({ label: variant, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi velit eius quisquam qui ducimus magnam totam architecto. Rerum tenetur nihil reprehenderit quae cum quo maiores aliquid, aperiam distinctio amet quasi?', timeout: 3000, variant, size });">{{ variant }} </Button>
          <Toast />
        </div>
      </div>
    </section>

  </div>
</template>
