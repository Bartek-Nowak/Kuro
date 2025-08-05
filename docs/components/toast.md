# Toast

Small, non-intrusive notification messages shown in the corner of the screen. Supports variants, sizes, and automatic timeout-based dismissal.

```ts
import { addToast } from '@/components/kuro/toast'

addToast({
  label: 'Saved!',
  message: 'Your changes have been saved.',
  variant: 'success',
  size: 'md',
  timeout: 3000
})
```

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add toast
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add toast
```
:::

## Setup
Import the Toast component and place it once in your root layout or app shell:

```vue
<template>
  <Toast />
</template>

<script setup lang="ts">
import { Toast } from '@/components/kuro/toast'
</script>
```

## API

### `addToast(toast: ToastInput)`

Adds a new toast notification.

#### Parameters:

| Name      | Type                                                           | Description                                 |
|-----------|----------------------------------------------------------------|---------------------------------------------|
| `label`   | `string`                                                       | Required title for the toast.               |
| `message` | `string`                                                       | Optional message body.                      |
| `variant` | `"default"` \| `"success"` \| `"error"` \| `"warning"` \| `"info"` | Color style of the toast.                   |
| `size`    | `"sm"` \| `"md"` \| `"lg"`                                     | Size of the toast. Default is `"md"`.       |
| `timeout` | `number`                                                       | Optional auto-dismiss time in milliseconds. |


## Variants

| Variant   | Description            |
|-----------|------------------------|
| `default` | Neutral gray styling.  |
| `success` | Green background.      |
| `error`   | Red background.        |
| `warning` | Yellow background.     |
| `info`    | Blue background.       |


## Sizes

| Size | Description                |
|------|----------------------------|
| `sm` | Small padding and text.    |
| `md` | Medium padding (default).  |
| `lg` | Larger padding and text.   |

## Requires

This component requires the following UI components:

- `Button`
- `Text`

> These dependencies will be automatically installed if missing when using the `kuro add toast` CLI command.
