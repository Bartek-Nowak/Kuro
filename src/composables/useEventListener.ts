import { onMounted, onBeforeUnmount } from 'vue';

export const useEventListener = (
  target: EventTarget | (() => EventTarget | null),
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  let currentTarget: EventTarget | null = null;

  const addListener = () => {
    currentTarget = typeof target === 'function' ? target() : target;
    if (currentTarget && handler) {
      currentTarget.addEventListener(event, handler, options);
    }
  };

  const removeListener = () => {
    if (currentTarget && handler) {
      currentTarget.removeEventListener(event, handler, options);
    }
  };

  onMounted(addListener);
  onBeforeUnmount(removeListener);
}
