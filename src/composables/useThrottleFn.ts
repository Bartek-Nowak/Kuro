import { ref } from 'vue';

export const useThrottleFn = <T extends (...args: any[]) => any>(fn: T, delay = 300) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  const lastArgs = ref<any[]>([]);

  const throttled = (...args: Parameters<T>) => {
    if (timeout) return;
    fn(...args);
    lastArgs.value = args;
    timeout = setTimeout(() => {
      timeout = null;
    }, delay);
  };

  return { throttled };
}
