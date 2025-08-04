# useEventListener

A Vue 3 composable that attaches an event listener to a target element or object and automatically cleans it up when the component unmounts.

## Usage

```ts
import { useEventListener } from '@/composables/useEventListener';

const handler = (event: Event) => {
  console.log(event);
};

useEventListener(window, 'resize', handler);
```

## Parameters

| Name    | Type                                     | Description                                                                                          |
| ------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| target  | `EventTarget \| (() => EventTarget \| null)` | The target to attach the event listener to. Can be a direct EventTarget or a function returning one (to handle refs). |
| event   | `string`                                 | The name of the event to listen for (e.g. 'click', 'scroll').                                        |
| handler | `EventListenerOrEventListenerObject`    | The event handler function or object.                                                                |
| options | `boolean \| AddEventListenerOptions` (optional) | Options to pass to `addEventListener`, such as capture or passive.                                   |

## Features

- Adds the event listener when the component is mounted.
- Removes the event listener automatically when the component is unmounted.
- Supports reactive targets by passing a function that returns the target.

## Example
```ts
<script setup lang="ts">
import { ref } from 'vue';
import { useEventListener } from '@/composables/useEventListener';

const divRef = ref<HTMLElement | null>(null);

const onClick = () => {
  console.log('Div clicked!');
};

useEventListener(() => divRef.value, 'click', onClick);
</script>

<template>
  <div ref="divRef">Click me!</div>
</template>
```