# useThrottleFn

Throttle a function so it can only be called once every specified delay interval.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useThrottleFn
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useThrottleFn
```
:::

## Usage

```ts
import { useThrottleFn } from '@/composables/kuro/useThrottleFn'

const { throttled } = useThrottleFn(callback, 500)
```

## Parameters

| Name  | Type                     | Description                                                  |
|-------|--------------------------|--------------------------------------------------------------|
| fn    | `(...args: any[]) => any`| Function to be throttled.                                    |
| delay | `number` (optional, default = `300`) | Minimum delay in milliseconds between function calls. |

## Returns

| Name      | Type                               | Description                                             |
|-----------|------------------------------------|---------------------------------------------------------|
| throttled | `(...args: Parameters<T>) => void` | The throttled version of the provided function.         |

## Details

- The `fn` will only be invoked once per `delay` interval.
- Calls during the delay period are ignored.
- Useful for performance-sensitive events like **scroll**, **resize**, or **mousemove**.