# useScrollDirection

A Vue composable that tracks the scroll direction of the window (`up`, `down`, or `null`).

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useScrollDirection
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useScrollDirection
```
:::

## Usage

```ts
import { useScrollDirection } from '@/composables/kuro/useScrollDirection'

const { direction } = useScrollDirection()
```

## Returns

| Name      | Type                          | Description                                               |
|-----------|-------------------------------|-----------------------------------------------------------|
| direction | Ref<'up' \| 'down' \| null>   | Reactive value representing the current scroll direction. |

## Details

- The `direction` is initially `null`.
- When the user scrolls:
  - It becomes `'down'` if scrolling down,
  - `'up'` if scrolling up.
- The scroll listener is registered on component mount and removed on unmount to avoid memory leaks.
