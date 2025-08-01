import {ref} from 'vue';
import {getClasses} from '@/utils/kuro/getClasses';

export const toastVariants = {
  base: 'rounded-md max-w-sm shadow-md font-semibold select-none my-2 relative',
  variant: {
    default: 'bg-gray-800 text-gray-100',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-600 text-white',
  },
  size: {
    sm: 'p-3 min-w-[140px] *:text-xs',
    md: 'p-3 min-w-[200px] *:text-sm',
    lg: 'p-3 min-w-[280px] *:text-base',
  },
};

export type ToastVariants = {
  variant?: keyof typeof toastVariants.variant;
  size?: keyof typeof toastVariants.size;
};

export const getToastClasses = (
  opts: ToastVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    toastVariants.base,
    toastVariants.variant[opts.variant ?? 'default'],
    toastVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export interface Toast {
  id: number;
  label: string;
  message?: string;
  variant?: keyof typeof toastVariants.variant;
  size?: keyof typeof toastVariants.size;
  timeout?: number;
}

type ToastInput = Omit<Toast, 'id'>;

export const toasts = ref<Toast[]>([]);

export const addToast = (toast: ToastInput) => {
  const id = Date.now();
  toasts.value.push({...toast, id});

  if (toast.timeout && toast.timeout > 0) {
    setTimeout(() => {
      removeToast(id);
    }, toast.timeout);
  }
};

export const removeToast = (id: number) => {
  toasts.value = toasts.value.filter((t) => t.id !== id);
};

export {default as Toast} from './Toast.vue';
