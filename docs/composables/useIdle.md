# useIdle

Detects user inactivity after a specified timeout by listening to user interaction events.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useIdle
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useIdle
```
:::

## Usage

```ts
import { useIdle } from '@/composables/useIdle';

const { isIdle } = useIdle(300000); // default 5 minutes timeout
```
Bind logic based on the ```isIdle``` ref to react when the user is idle or active.

## API

| Name    | Type          | Description                                           |
|---------|---------------|-------------------------------------------------------|
| timeout | `number`      | Optional. Time in milliseconds before marking idle. Default is 300000 (5 minutes). |
| isIdle  | `Ref<boolean>`| Reactive boolean indicating if the user is currently idle. |

---

## Details

- Listens for the following user events to reset the idle timer:
  - `mousemove`
  - `keydown`
  - `wheel`
  - `touchstart`

- Resets the idle timer on any of these events.

- Sets `isIdle` to `true` if no user interaction happens within the timeout period.

- Cleans up event listeners on component unmount.
