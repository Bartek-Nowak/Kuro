# Progressive Image

The **Progressive Image** component displays an image with a loading animation placeholder until the full image is loaded, enhancing user experience during image loading.

```vue
<template>
  <ProgressiveImage
    src="https://example.com/photo.jpg"
    alt="A beautiful landscape"
    :width="400"
    :height="300"
  />
</template>

<script setup lang="ts">
import { ProgressiveImage } from '@/components/kuro/progressive-image';
</script>
```
## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add progressive-image
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add progressive-image
```
:::

## Features

- Shows a loading placeholder with various Tailwind CSS animations while the image loads.
- Smoothly fades in the full image once loaded.
- Requires fixed width and height to prevent layout shifts.
- Uses only Tailwind CSS utility classes for animations and styling.

## Props

| Prop    | Type   | Description                              |
| ------- | ------ | ---------------------------------------- |
| `src`   | string | URL of the main image to display         |
| `alt`   | string | Alternative text for the image (optional)|
| `variant` | string | Visual style variant for the loading animation (default: `pulse`) |
| `width` | number | Fixed width of the container in pixels   |
| `height`| number | Fixed height of the container in pixels  |
| `class` | string | Additional Tailwind CSS classes (optional) |

## Variants

| Variant       | Description                               |
| ------------- | ----------------------------------------- |
| `pulse`       | Gray background with pulse animation      |
| `bounce`      | Gray background with bounce animation     |
| `spin`        | Spinner with border and spin animation    |
| `ping`        | Gray circle with ping animation            |
| `flash`       | Gray background with custom pulse animation (1.5s infinite) |
| `shimmer_simple` | Gradient shimmer with pulse animation    |

## Usage Example

```vue
<template>
  <ProgressiveImage
    src="https://example.com/photo.jpg"
    alt="A beautiful landscape"
    :width="400"
    :height="300"
    variant="spin"
  />
</template>

<script setup lang="ts">
import { ProgressiveImage } from '@/components/kuro/progressive-image';
</script>
```