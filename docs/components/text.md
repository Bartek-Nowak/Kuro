# Text

```vue
<script setup lang="ts">
import {Text} from '@/components/ui/text';
</script>

<template>
  <Text variant="primary" size="lg" as="h2"> Hello world </Text>
</template>
```

## Installation

::: code-group

```npx
npx github:Bartek-Nowak/Kuro add text
```

:::

## Description

The Text component provides a consistent way to apply typography styles throughout your app.
You can customize the tone using the variant prop, control size with the size prop, and change the HTML tag using the as prop.

It’s useful for ensuring all text elements across your project share a unified style system.

## Variants and Sizes

### Variants

| Variant      | Description                              |
| ------------ | ---------------------------------------- |
| `default`    | Neutral, standard foreground text        |
| `primary`    | Blue, used for emphasis                  |
| `secondary`  | Dark gray, for secondary text            |
| `muted`      | Light gray, de-emphasized text           |
| `destructive`| Red, used for errors or warnings         |
| `success`    | Green, used for confirmation or success  |
| `warning`    | Yellow, used for warnings or cautions    |
| `info`       | Cyan, used for informative messages      |

### Sizes

| Size   | Description               |
|--------|---------------------------|
| `sm`   | Small text                |
| `md`   | Medium text (default)     |
| `lg`   | Large text                |
| `xl`   | Extra large text          |
| `2xl`  | 2× extra large text       |

---

## Props

| Prop     | Type     | Description                                                     |
|----------|----------|-----------------------------------------------------------------|
| `variant`| `string` | Visual tone (`default`, `primary`, `muted`, `success`, etc.)    |
| `size`   | `string` | Text size (`sm`, `md`, `lg`, etc.)                              |
| `as`     | `string` | HTML tag to render (`p`, `span`, `h1`, etc.) – default is `p`   |
| `class`  | `string` | Additional Tailwind classes to apply                            |

---

## Slots

| Slot     | Description           |
|----------|-----------------------|
| `default`| Content of the text   |

## Usage Example

```vue
<Text>This is default text.</Text>

<Text as="h1" variant="primary" size="2xl">Main Heading</Text>

<Text variant="destructive" size="sm">Something went wrong.</Text>
```
