# Button

```vue
<script setup lang="ts">
import { Button } from '@/components/kuro/button';
</script>

<template>
 <Button>Click</Button>
</template>
```

## Installation

::: code-group
```bash
npx github:Bartek-Nowak/Kuro add button
```
:::

## Variants and Sizes

The Button component supports several visual variants and sizes. Use the `variant` and `size` props to customize its appearance.

| Variant     | Description                                      |
| ----------- | ------------------------------------------------ |
| `default`   | Blue background with white text (primary style) |
| `destructive` | Red background for destructive actions          |
| `outline`   | Transparent background with border               |
| `ghost`     | Transparent background, subtle hover effect      |
| `link`      | Styled as a text link with underline             |

| Size | Description             |
| ---- | ----------------------- |
| `sm` | Small button            |
| `md` | Medium button (default) |
| `lg` | Large button            |

## Usage Example

```vue
<template>
  <div class="space-x-2">
    <Button variant="default" size="sm">Default Sm</Button>
    <Button variant="destructive" size="md">Destructive Md</Button>
    <Button variant="outline" size="lg">Outline Lg</Button>
    <Button variant="ghost">Ghost Default</Button>
    <Button variant="link">Link Default</Button>
  </div>
</template>
```