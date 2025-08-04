import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue';

export const useIntersectionObserver = (
  elementRef: Ref<HTMLElement | null>,
  options?: IntersectionObserverInit
) => {
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | null = null;

  const callback: IntersectionObserverCallback = (entries) => {
    if (entries[0]) {
      isIntersecting.value = entries[0].isIntersecting;
    }
  };

  onMounted(() => {
    if (elementRef.value) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(elementRef.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
      observer.disconnect();
    }
  });

  return { isIntersecting };
}
