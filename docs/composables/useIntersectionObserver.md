# `useIntersectionObserver`

A Vue 3 composable for observing whether a given element is visible (intersecting) within the viewport using the Intersection Observer API.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useIntersectionObserver
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useIntersectionObserver
```
:::

## Import

```ts
import { useIntersectionObserver } from '@/composables/kuro/useIntersectionObserver';
```

## Example Usage

```vue
<template>
  <div ref="myElement">
    Observed element
    <p v-if="isVisible">Element is visible in the viewport!</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@/composables/kuro/useIntersectionObserver';

const myElement = ref<HTMLElement | null>(null);
const { isIntersecting: isVisible } = useIntersectionObserver(myElement, {
  threshold: 0.5, // consider visible when at least 50% of element is in viewport
});
</script>
```

## Parameters

| Name       | Type                      | Description                                         |
|------------|---------------------------|-----------------------------------------------------|
| elementRef | `Ref<HTMLElement \| null>` | Reference to the DOM element to be observed         |
| options    | `IntersectionObserverInit` (optional) | Intersection Observer configuration options (threshold, root, rootMargin, etc.) |

## Returns

| Name          | Type          | Description                                                    |
|---------------|---------------|----------------------------------------------------------------|
| isIntersecting | `Ref<boolean>` | Reactive state indicating if the element is visible (intersecting) in the viewport |

## How it works
- The composable creates an IntersectionObserver on onMounted that observes the element passed via elementRef.

- It updates the reactive isIntersecting value to true or false depending on whether the element intersects the viewport.

- The observer is cleaned up during onBeforeUnmount.