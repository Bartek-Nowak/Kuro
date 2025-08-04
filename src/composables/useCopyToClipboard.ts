import { ref } from 'vue';

export const useCopyToClipboard = () => {
  const isSupported = !!navigator.clipboard;
  const success = ref(false);
  const error = ref<string | null>(null);

  const copy = async (text: string) => {
    if (!isSupported) {
      error.value = 'Clipboard API not supported';
      success.value = false;
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      success.value = true;
      error.value = null;
    } catch (e) {
      success.value = false;
      error.value = (e instanceof Error) ? e.message : String(e);
    }
  };

  return { copy, success, error, isSupported };
}
