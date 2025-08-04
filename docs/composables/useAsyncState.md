# useAsyncState

A Vue composable for managing asynchronous state.


## Description

`useAsyncState` accepts an asynchronous function and returns reactive refs: `data`, `error`, `loading`, and an `execute` function that runs the async function and updates the state accordingly.


## API

```ts
const { data, error, loading, execute } = useAsyncState<T>(asyncFn: () => Promise<T>)
```

| Name    | Type               | Description                                            |
|---------|--------------------|--------------------------------------------------------|
| data    | `Ref<T \| null>`   | The result of the async function or `null` if not loaded |
| error   | `Ref<Error \| null>` | Error object if the async function throws an error     |
| loading | `Ref<boolean>`     | Indicates if the async function is currently running    |
| execute | `() => Promise<void>` | Function to invoke the async function and update states |

## Usage example

```ts
import { useAsyncState } from '@/composables/useAsyncState';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
}

const { data, error, loading, execute } = useAsyncState(fetchData);

// Call execute to run the async function
execute();
```

## Notes
- The execute function can be called multiple times to reload the data.

- data and error are reset before each execution.