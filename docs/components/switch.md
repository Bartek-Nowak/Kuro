# Switch

A toggle component for enabling or disabling a setting.

```vue
<script setup lang="ts">
import { Switch } from '@/components/kuro/switch';
</script>

<template>
  <Switch />
</template>
```

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add switch
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add switch
```
:::

## Props

| Prop       | Type                                                                                                                  | Default     | Description                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| `v-model`  | `boolean`                                                                                                             | `false`     | Controls the switch state (on/off)                    |
| `variant`  | `'default'` \| `'primary'` \| `'secondary'` \| `'muted'` \| `'destructive'` \| `'success'` \| `'warning'` \| `'info'` | `'default'` | Visual color style variant                            |
| `size`     | `'sm'` \| `'md'` \| `'lg'`                                                                                            | `'md'`      | Size of the switch                                    |
| `disabled` | `boolean`                                                                                                             | `false`     | Disables interaction with the switch                  |
| `class`    | `string`                                                                                                              | `''`        | Additional Tailwind classes to apply to the container |

## Variants

- **default** — neutral gray
- **primary** — blue
- **secondary** — dark gray
- **muted** — light gray
- **destructive** — red
- **success** — green
- **warning** — orange
- **info** — cyan

## Sizes

- **sm** — small (4×8)
- **md** — medium (6×11) _(default)_
- **lg** — large (8×16)

## Accessibility

- Uses `role="switch"` on the `<button>` element
- Supports `disabled` state
- Fully keyboard and screen-reader accessible
- Includes `focus-visible` ring styles and smooth state transitions

## Usage Example

```vue
<Switch variant="secondary" size="sm" />
<Switch variant="destructive" size="md" />
```
