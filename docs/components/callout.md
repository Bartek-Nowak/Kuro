# Callout

```vue
<script setup lang="ts">
import { Callout } from '@/components/ui/callout';
</script>

<template>
  <Callout>
    <template #icon>ℹ️</template>
    <template #title>Note</template>
    This is a helpful tip or message.
  </Callout>
</template>
```
## Installation

::: code-group
```npx
npx github:Bartek-Nowak/Kuro add callout
```
:::

## Variants

Use the `variant` prop to change the color and mood of the callout box.

| Variant   | Description                            |
| --------- | -------------------------------------- |
| `info`    | Blue tone for neutral information      |
| `success` | Green tone for success messages        |
| `warning` | Yellow tone for warnings or cautions   |
| `danger`  | Red tone for critical/danger messages  |

## Slots

| Slot      | Description                                 |
| --------- | ------------------------------------------- |
| `icon`    | (optional) Icon or symbol shown on the left |
| `title`   | (optional) Heading text                     |
| `default` | Main message content                        |


## Usage Example

```vue
<template>
  <div class="space-y-4">
    <Callout variant="info">
      <template #icon>ℹ️</template>
      <template #title>Info</template>
      This is an informative message.
    </Callout>

    <Callout variant="success">
      <template #icon>✅</template>
      <template #title>Success</template>
      Everything went well!
    </Callout>

    <Callout variant="warning">
      <template #icon>⚠️</template>
      <template #title>Warning</template>
      Be cautious with this step.
    </Callout>

    <Callout variant="danger">
      <template #icon>🛑</template>
      <template #title>Danger</template>
      Something went wrong.
    </Callout>
  </div>
</template>
```