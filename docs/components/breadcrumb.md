# Breadcrumb

Navigation component that displays the current page’s location within a site hierarchy. Supports variants and sizes for flexible styling.

```vue
<script setup lang="ts">
import {Breadcrumb} from '@/components//kuro/breadcrumb';
</script>
<template>
  <Breadcrumb
    :items="[
      {label: 'Home', href: '/'},
      {label: 'Library', href: '/library'},
      {label: 'Data', disabled: true},
    ]"
    variant="info"
    size="md"
  />
</template>
```

## Installation

::: code-group

```bash
npx github:Bartek-Nowak/Kuro add breadcrumb
```

:::

## Usage

Pass an array of breadcrumb items, each with a label, optional href, and disabled state.

```ts
interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}
```

## Props

| Prop    | Type                                                               | Default     | Description                                      |
| ------- | ------------------------------------------------------------------ | ----------- | ------------------------------------------------ |
| items   | `Array<{ label: string; href?: string; disabled?: boolean }>`      | —           | List of breadcrumb items to display              |
| variant | `'default'` \| `'success'` \| `'warning'` \| `'error'` \| `'info'` | `'default'` | Visual style variant applying contextual colors  |
| size    | `'sm'` \| `'md'` \| `'lg'`                                         | `'md'`      | Size variant controlling font size and padding   |
| class   | `string`                                                           | `''`        | Additional CSS classes to apply to the container |

## Variants

- **default** — neutral gray tones
- **success** — green background and text
- **warning** — yellow background and text
- **error** — red background and text
- **info** — blue background and text

## Sizes

- **sm** — small font size with minimal padding
- **md** — medium font size with standard padding (default)
- **lg** — larger font size with increased padding

## Accessibility

- Uses `nav` element with `aria-label="Breadcrumb"` for landmark navigation
- The current page is marked with `aria-current="page"`
- Links are focusable and include hover styles for clarity

## Slots

- **separator** — Customize the separator between breadcrumb items (default is `>`)

## Usage Example

```vue
<script setup lang="ts">
import {Breadcrumb} from '@/components/kuro/breadcrumb';
</script>

<template>
  <Breadcrumb
    :items="[
      {label: 'Home', href: '/'},
      {label: 'Library', href: '/library'},
      {label: 'Data', disabled: true},
    ]"
    variant="info"
    size="md"
  >
    <template #separator> - </template>
  </Breadcrumb>
</template>
```
