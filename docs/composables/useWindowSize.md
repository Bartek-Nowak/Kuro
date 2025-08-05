# useWindowSize

Reactive composable to track the current size of the browser window.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useWindowSize
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useWindowSize
```
:::

## Usage

```ts
import { useWindowSize } from '@/composables/kuro/useWindowSize'

const { width, height } = useWindowSize()
```

## Returns

| Name        | Type          | Description                                                  |
|-------------|---------------|--------------------------------------------------------------|
| width | `Ref<number>` | Reactive value of the current window width (px). |
| height | `Ref<number>` | Reactive value of the current window height (px). |

## Details

- `width` and `height` are initialized with `window.innerWidth` and `window.innerHeight`.
- The values update reactively whenever the window is resized.
- The `resize` event listener is registered on component mount and properly removed on unmount to prevent memory leaks.
