import { ref, onMounted, onBeforeUnmount } from 'vue';

export const useIdle = (timeout = 300000) => {
  const isIdle = ref(false);
  let timer: ReturnType<typeof setTimeout> | null = null;

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
    isIdle.value = false;
    timer = setTimeout(() => {
      isIdle.value = true;
    }, timeout);
  };

  const events = ['mousemove', 'keydown', 'wheel', 'touchstart'];

  onMounted(() => {
    resetTimer();
    events.forEach((event) => window.addEventListener(event, resetTimer));
  });

  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer);
    events.forEach((event) => window.removeEventListener(event, resetTimer));
  });

  return { isIdle };
}
