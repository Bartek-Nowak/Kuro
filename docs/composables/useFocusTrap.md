# useFocusTrap

A Vue 3 composable that traps keyboard focus within a specified container element, preventing focus from escaping when using Tab or Shift+Tab keys. Useful for modals, dialogs, or any UI that requires focus to be constrained.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useFocusTrap
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useFocusTrap
```
:::

## Usage

```vue
<script setup lang="ts">
import { useFocusTrap } from '@/composables/useFocusTrap';

const { containerRef } = useFocusTrap();
</script>

<template>
  <div ref="containerRef" tabindex="-1">
    <!-- focusable elements inside -->
    <button>Button 1</button>
    <input type="text" />
    <button>Button 2</button>
  </div>
</template>
```

## Description

- Tracks all visible focusable elements inside the container.
- Listens globally for keydown events.
- When Tab or Shift+Tab is pressed:
  - If focus tries to move outside the container, it loops it back to the first or last focusable element.
- Helps maintain keyboard navigation within modals/dialogs for accessibility.

## Returned values

| Name          | Type                   | Description                                   |
| ------------- | ---------------------- | ---------------------------------------------|
| `containerRef` | `Ref<HTMLElement \| null>` | Vue ref to bind the container element that traps focus |

## Details

Focusable elements include:

- Links (`a[href]`), areas (`area[href]`)
- Inputs, selects, textareas, buttons (excluding disabled or hidden)
- Iframes, objects, embeds
- Elements with positive or zero tabindex
- Contenteditable elements

Only visible elements (`offsetParent !== null`) are considered.

Keyboard listener is added with capture phase to prioritize focus trapping.

## Notes

- Ensure the container element has a `tabindex` if needed to receive focus.
- This composable does not manage opening/closing of modals or focus restoration.
- Intended to be used inside components that require keyboard focus confinement.