# Rating

Star-based rating component for capturing or displaying user feedback. Supports hover interaction, custom sizes, colors, and read-only mode.

```vue
<script setup lang="ts">
import { Rating } from '@/components/kuro/rating';
</script>

<template>
  <Rating />
</template>
```
## Installation

::: code-group
```bash
npx github:Bartek-Nowak/Kuro add rating
```
:::

## Features

- Fully accessible with keyboard and screen reader support
- Supports `readonly` and `editable` modes
- Hover feedback when not in read-only mode
- Customizable `variant`, `size`, and `max` stars
- Uses `lucide-vue-next` icons

## Usage

### Basic

```vue
<Rating v-model="rating" />
```

### Custom Variant and Size

```vue
<Rating v-model="rating" variant="success" size="lg" />
```

### Readonly Mode

```vue
<Rating :model-value="4" readonly />
```

### Custom Max

```vue
<Rating v-model="rating" :max="10" />
```

## Variants and Sizes

The Rating component supports several visual variants and sizes. Use the `variant` and `size` props to customize its appearance.

| Variant       | Description                                   |
| ------------- | --------------------------------------------- |
| `default`     | Yellow stars for neutral ratings              |
| `primary`     | Blue stars for primary emphasis               |
| `secondary`   | Gray stars for subdued appearance             |
| `muted`       | Muted gray stars for minimal contrast         |
| `destructive` | Red stars indicating negative ratings         |
| `success`     | Green stars for positive confirmation         |
| `warning`     | Dark yellow stars for caution or warning      |
| `info`        | Cyan stars for informational rating context   |

| Size | Description            |
| ---- | ---------------------- |
| `sm` | Small star icons       |
| `md` | Medium star icons (default) |
| `lg` | Large star icons       |


## Props

| Prop      | Type      | Default | Description                           |
|-----------|-----------|---------|---------------------------------------|
| `variant` | `string`  | `default` | Color variant (`primary`, `success`, etc.) |
| `size`    | `string`  | `md`     | Icon size: `sm`, `md`, or `lg`        |
| `max`     | `number`  | `5`      | Maximum number of stars               |
| `readonly`| `boolean` | `false`  | Whether the rating is read-only       |
| `class`   | `string`  | `''`     | Additional Tailwind classes           |


## Dependencies

- [`lucide-vue-next`](https://www.npmjs.com/package/lucide-vue-next)


