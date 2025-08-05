# useCopyToClipboard

A Vue 3 composable to copy text to the clipboard with reactive status tracking.

## Overview

This composable provides a simple API to copy text to the user's clipboard, while tracking whether the Clipboard API is supported, if the copy operation succeeded, or if an error occurred.

## Installation

::: code-group
```bash [npx via npm]
npx kuro-ui add useCopyToClipboard
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add useCopyToClipboard
```
:::

## Usage example

```vue
<script setup lang="ts">
import { useCopyToClipboard } from '@/composables/kuro/useCopyToClipboard';

const { copy, success, error, isSupported } = useCopyToClipboard();

const copyText = async () => {
  await copy('Hello World!');
  if (success.value) {
    console.log('Text copied successfully');
  } else {
    console.error('Copy failed:', error.value);
  }
};
</script>

<template>
  <button @click="copyText" :disabled="!isSupported">
    Copy Text
  </button>
  <p v-if="error">{{ error }}</p>
</template>
```

## API

| Name        | Type                       | Description                                           |
|-------------|----------------------------|-------------------------------------------------------|
| `copy`      | `(text: string) => Promise<void>` | Function to copy the given text to clipboard.        |
| `success`   | `Ref<boolean>`             | Reactive ref indicating if the last copy succeeded.  |
| `error`     | `Ref<string \| null>`      | Reactive ref holding the error message if copying failed, or null. |
| `isSupported` | `boolean`                | Boolean indicating whether Clipboard API is supported by the browser. |


## Notes

- The composable uses the native [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).
- The `copy` function is async and should be awaited to check results reliably.
- The `isSupported` flag helps prevent running copy attempts on unsupported browsers.
