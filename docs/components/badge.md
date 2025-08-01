# Badge

The **Badge** component is used to highlight small pieces of information, such as statuses or counts.

```vue
<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
</script>

<template>
  <Badge>Lorem</Badge>
</template>
```
## Installation

::: code-group
```bash
npx github:Bartek-Nowak/Kuro add badge
```
:::

## Variants

The Badge supports several visual variants, which you can set using the `variant` prop:

| Variant   | Description                   |
| --------- | -----------------------------|
| `default` | Neutral/default style          |
| `success` | Green color indicating success|
| `warning` | Yellow color indicating warning|
| `error`   | Red color indicating error    |
| `info`    | Blue color for informational use|

## Sizes

You can adjust the size of the Badge with the `size` prop:

| Size   | Description       |
| ------ | ----------------- |
| `sm`   | Small badge       |
| `md`   | Medium badge (default) |
| `lg`   | Large badge       |

## Props

| Prop     | Type                            | Default   | Description                         |
| -------- | -------------------------------| --------- | ----------------------------------|
| `variant`| `'default'` \| `'success'` \| `'warning'` \| `'error'` \| `'info'` | `'default'` | Visual style variant               |
| `size`   | `'sm'` \| `'md'` \| `'lg'`     | `'md'`    | Size of the badge                  |
| `class`  | `string`                       | `''`      | Additional CSS classes (optional)  |

## Usage Example

```vue
<template>
  <div class="space-y-4">
    <div>
      <Badge variant="default">Default</Badge>
      <Badge variant="success" class="ml-2">Success</Badge>
      <Badge variant="warning" class="ml-2">Warning</Badge>
      <Badge variant="error" class="ml-2">Error</Badge>
      <Badge variant="info" class="ml-2">Info</Badge>
    </div>
    <div>
      <Badge size="sm" variant="info">Small</Badge>
      <Badge size="md" variant="info" class="ml-2">Medium</Badge>
      <Badge size="lg" variant="info" class="ml-2">Large</Badge>
    </div>
  </div>
</template>
```