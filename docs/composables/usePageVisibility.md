# `usePageVisibility`

A Vue 3 composable to track whether the current web page (or tab) is visible to the user.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add usePageVisibility
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add usePageVisibility
```
:::

## Usage

```ts
import { ref } from 'vue';
import { usePageVisibility } from '@/composables/kuro/usePageVisibility';

export default {
  setup() {
    const { isVisible } = usePageVisibility();

    watch(isVisible, (visible) => {
      console.log('Page visibility changed:', visible);
    });

    return { isVisible };
  }
}
```

## Description
`usePageVisibility` creates a reactive boolean `isVisible` that reflects the current visibility state of the page or browser tab. It listens to the `visibilitychange` event on the `document` to update this reactive state.

## Parameters
This composable takes no parameters.

## Returns

| Name        | Type          | Description                                                  |
|-------------|---------------|--------------------------------------------------------------|
| `isVisible` | `Ref<boolean>` | Reactive boolean indicating if the page/tab is currently visible |

## Details

- The initial state of `isVisible` is set based on `document.visibilityState === 'visible'`.
- When the visibility of the page changes (e.g., user switches tabs or minimizes the browser), the reactive `isVisible` is updated accordingly.
- The event listener is registered on component mount and removed on unmount to prevent memory leaks.

## Example Output

```ts
const { isVisible } = usePageVisibility();  // true or false depending on current visibility

```

Use this composable to pause animations, stop timers, or defer expensive operations when the user is not actively viewing the page.