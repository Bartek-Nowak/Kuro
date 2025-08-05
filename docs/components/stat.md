# Stat

```vue
<script setup lang="ts">
import { Stat } from '@/components/kuro/stat';
</script>

<template>
  <Stat trend="up">
    <template #icon>📈</template>
    <template #label>Revenue</template>
    <template #value>$12,345</template>
    <template #trendValue>+5%</template>
  </Stat>
</template>
```

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add stat
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add stat
```
:::

## Variants

The Stat component supports a trend variant to visually indicate the trend direction.

| Variant   | Description                     |
| --------- | ------------------------------- |
| `up`      | Positive trend, shown in green  |
| `down`    | Negative trend, shown in red    |
| `neutral` | Neutral/no trend, shown in gray |

# Props

| Prop    | Type              | Description                                         |
| ------- | ----------------- | --------------------------------------------------- |
| `trend` | string (optional) | Trend direction variant: `up`, `down`, or `neutral` |
| `class` | string (optional) | Additional CSS classes                              |

## Slots

| Slot         | Description                                             |
| ------------ | ------------------------------------------------------- |
| `icon`       | (optional) Icon or emoji displayed before the label     |
| `label`      | Label or description of the statistic                   |
| `value`      | The main statistic value to display                     |
| `trendValue` | (optional) Value describing the trend, e.g. "+5%", "-3" |

## Usage Example

```vue
<template>
  <Stat trend="up">
    <template #icon>📈</template>
    <template #label>Revenue</template>
    <template #value>$12,345</template>
    <template #trendValue>+5%</template>
  </Stat>
</template>
```
