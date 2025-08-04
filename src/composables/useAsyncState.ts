import { ref } from 'vue';

export const useAsyncState = <T>(asyncFn: () => Promise<T>) => {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const execute = async () => {
    loading.value = true;
    error.value = null;
    try {
      const result = await asyncFn();
      data.value = result;
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, execute };
}
