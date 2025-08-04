import { ref, onMounted, onBeforeUnmount } from 'vue';

export const useScrollDirection = () => {
  const direction = ref<'up' | 'down' | null>(null);
  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      direction.value = 'down';
    } else if (currentScrollY < lastScrollY) {
      direction.value = 'up';
    }
    lastScrollY = currentScrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { direction };
}
