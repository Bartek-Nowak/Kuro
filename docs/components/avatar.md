# Avatar

A circular profile image component with optional placeholder initials.

```vue
<script setup lang="ts">
import {Avatar} from '@/components/ui/avatar';
</script>

<template>
  <Avatar initials="BN" />
</template>
```

## Installation

::: code-group

```bash
npx github:Bartek-Nowak/Kuro add avatar
```

:::

## Variants and Sizes

The Avatar component supports several color variants and three sizes.

| Variant   | Description                      |
| --------- | -------------------------------- |
| `default` | Neutral gray background and text |
| `success` | Green background and text        |
| `warning` | Yellow background and text       |
| `error`   | Red background and text          |
| `info`    | Blue background and text         |

| Size | Description                     |
| ---- | ------------------------------- |
| `sm` | Small avatar (32x32)            |
| `md` | Medium avatar (48x48) (default) |
| `lg` | Large avatar (64x64)            |

## Props

| Prop       | Type   | Default   | Description                                    |
| ---------- | ------ | --------- | ---------------------------------------------- |
| `src`      | string | —         | URL of the profile image                       |
| `alt`      | string | —         | Alt text for the image and accessibility label |
| `initials` | string | —         | Placeholder initials shown if image is missing |
| `size`     | string | `md`      | Size of the avatar (`sm`, `md`, `lg`)          |
| `variant`  | string | `default` | Color variant                                  |
| `class`    | string | —         | Additional Tailwind CSS classes                |

## Usage

The component displays an image if `src` is provided. If not, it falls back to showing uppercase initials or a question mark (`?`).

The container has role `img` with an accessible label provided via `alt` prop or defaults to "Avatar".

## Usage Example

```vue
<template>
    <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User photo" />
    <Avatar initials="BN" size="sm" />
    <Avatar initials="JS" size="lg" />
    <Avatar size="md" />
</template>
```