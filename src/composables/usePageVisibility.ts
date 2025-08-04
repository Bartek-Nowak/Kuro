import { ref, onMounted, onBeforeUnmount } from 'vue';

export const usePageVisibility = () => {
  const isVisible = ref(document.visibilityState === 'visible');

  const onVisibilityChange = () => {
    isVisible.value = document.visibilityState === 'visible';
  };

  onMounted(() => {
    document.addEventListener('visibilitychange', onVisibilityChange);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });

  return { isVisible };
}
