# Alert

```vue
<script setup lang="ts">
import { Alert } from '@/components/kuro/alert';
</script>

<template>
  <Alert>
    <template #title>Heads up!</template>
    <template #description>This is an alert message.</template>
  </Alert>
</template>
```
## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add allert
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add allert
```
:::

## Variants and Sizes

The Alert component supports several visual variants and sizes. Use the `variant` and `size` props to customize its appearance.

| Variant     | Description                                  |
| ----------- | -------------------------------------------- |
| `default`   | Blue tone for neutral information            |
| `destructive` | Red tone for destructive or error messages   |
| `success`   | Green tone for success or confirmation       |
| `warning`   | Yellow tone for warning or caution messages  |

| Size | Description            |
| ---- | ---------------------- |
| `sm` | Small alert            |
| `md` | Medium alert (default) |
| `lg` | Large alert            |

## Props

| Prop           | Type   | Description                                 |
| -------------- | ------ | ------------------------------------------- |
| `variant`      | string | Visual variant (`default`, `destructive`, etc.) |
| `size`         | string | Alert size (`sm`, `md`, `lg`)               |
| `class`        | string | Additional Tailwind classes (optional)     |
| `titleTag`     | string | HTML tag for the title (default: `p`)      |
| `descriptionTag` | string | HTML tag for the description (default: `p`) |

## Slots

| Slot        | Description                         |
| ----------- | ----------------------------------- |
| `title`     | (optional) Title of the alert box   |
| `description` | (optional) Description or subtitle |
| `default`   | Main content (e.g. buttons or custom UI) |

## Usage Example

```vue
<template>
  <Alert variant="success" size="lg">
    <template #title>Success!</template>
    <template #description>Your changes have been saved.</template>
    <span>✔️</span>
  </Alert>
</template>
```