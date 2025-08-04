import { onMounted, onBeforeUnmount, ref } from 'vue';

export const useFocusTrap = () => {
  const containerRef = ref<HTMLElement | null>(null);

  let focusableElements: HTMLElement[] = [];
  let firstFocusable: HTMLElement | null = null;
  let lastFocusable: HTMLElement | null = null;

  const updateFocusableElements = () => {
    if (!containerRef.value) return;
    const selectors =
      'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), ' +
      'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';

    focusableElements = Array.from(
      containerRef.value.querySelectorAll<HTMLElement>(selectors)
    ).filter((el) => el.offsetParent !== null); // visible only

    firstFocusable = focusableElements[0] || null;
    lastFocusable = focusableElements[focusableElements.length - 1] || null;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !containerRef.value) return;

    updateFocusableElements();
    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }

    const activeEl = document.activeElement as HTMLElement;

    if (e.shiftKey) {
      // Shift + Tab
      if (activeEl === firstFocusable || activeEl === containerRef.value) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      // Tab
      if (activeEl === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown, true);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown, true);
  });

  return {
    containerRef,
  };
}
