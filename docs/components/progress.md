# Progress

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Progress from './Progress.vue'

const progressValue = ref(45)
</script>

<template>
  <div class="space-y-4">
    <Progress :value="progressValue" />
  </div>
</template>
```

## Installation

::: code-group
```npx
npx github:Bartek-Nowak/Kuro add progress
```
:::

## Variants

The Progress component supports several visual variants. Use the `variant` prop to customize its appearance.

| Variant     | Description                     |
|-------------|---------------------------------|
| determinate | Blue tone, default progress bar |
| success     | Green tone indicating success   |
| warning     | Yellow tone indicating warning  |
| error       | Red tone indicating error       |
| accent      | Purple accent color             |
| muted       | Gray muted color                |

## Props

| Prop    | Type   | Description                           |
|---------|--------|-------------------------------------|
| variant | string | Visual variant of the progress bar  |
| value   | number | Progress value from 0 to 100         |
| class   | string | Additional Tailwind CSS classes (optional) |


## Usage Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Progress from './Progress.vue'

const progressValue = ref(45)
</script>

<template>
  <div class="space-y-4">
    <Progress :value="progressValue" variant="determinate" />
    <Progress :value="progressValue" variant="success" />
    <Progress :value="progressValue" variant="warning" />
    <Progress :value="progressValue" variant="error" />
    <Progress :value="progressValue" variant="accent" />
    <Progress :value="progressValue" variant="muted" />
  </div>
</template>
```