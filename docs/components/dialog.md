# Dialog

Simple modal dialog with close support, size and variant options.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/components/kuro/dialog'

const open = ref(false)
</script>

<template>
  <Button @click="open = true">Open Dialog</Button>

  <Dialog v-model:open="open" variant="primary" size="md" @confirm="onConfirm">
    <template #title>
      <h2 class="text-lg font-semibold">Are you sure?</h2>
    </template>

    <p>This action is irreversible. Do you wish to proceed?</p>

    <template #footer>
      <div class="flex justify-end gap-2 mt-4">
        <Button variant="ghost" @click="open = false">Cancel</Button>
        <Button @click="onConfirm">Confirm</Button>
      </div>
    </template>
  </Dialog>
</template>
```

## Installation

::: code-group
```bash
npx github:Bartek-Nowak/Kuro add dialog
```
:::

## Props

| Name           | Type                                                                                                      | Description                          |
|----------------|-----------------------------------------------------------------------------------------------------------|--------------------------------------|
| `variant`      | `"default"` \| `"primary"` \| `"secondary"` \| `"muted"` \| `"destructive"` \| `"success"` \| `"warning"` \| `"info"` | Color style variant of the dialog |
| `size`         | `"sm"` \| `"md"` \| `"lg"`                                                                                 | Dialog size (`md` by default)       |
| `class`        | `string`                                                                                                   | Optional custom classes             |
| `v-model:open` | `boolean`                                                                                                  | Controls dialog visibility          |


## Events

| Event     | Description                            |
|-----------|----------------------------------------|
| `confirm` | Emitted when confirm button is clicked |


## Variants

| Variant      | Description          |
|--------------|----------------------|
| `default`    | Gray background      |
| `primary`    | Blue background      |
| `secondary`  | Dark gray background |
| `muted`      | Light gray background|
| `destructive`| Red background       |
| `success`    | Green background     |
| `warning`    | Yellow background    |
| `info`       | Cyan background      |


## Sizes

| Size  | Description      |
|-------|------------------|
| `sm`  | Small dialog     |
| `md`  | Medium (default) |
| `lg`  | Large dialog     |


## Requirements

This component depends on the following components:

- `Button`

> When using the CLI (`kuro add dialog`), all required dependencies will be installed automatically.

## Dependencies

- [`lucide-vue-next`](https://www.npmjs.com/package/lucide-vue-next)
