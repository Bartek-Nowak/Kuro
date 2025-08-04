import {getClasses} from '@/utils/kuro/getClasses';

export const dialogVariants = {
  base: 'fixed inset-0 z-50 grid place-items-center bg-foreground/60 backdrop-blur-sm *:w-full *:rounded- md *:shadow-xl *:relative *:p-6',
  variant: {
    default: '',
    primary: '*:bg-blue-600 *:text-white',
    secondary: '*:bg-gray-700 *:text-white',
    muted: '*:bg-gray-300 *:text-gray-800',
    destructive: '*:bg-red-600 *:text-white',
    success: '*:bg-green-600 *:text-white',
    warning: '*:bg-yellow-600 *:text-white',
    info: '*:bg-cyan-600 *:text-white',
  },
  size: {
    sm: '*:max-w-sm',
    md: '*:max-w-md',
    lg: '*:max-w-lg',
  },
};

export type DialogVariants = {
  variant?: keyof typeof dialogVariants.variant;
  size?: keyof typeof dialogVariants.size;
};

export const getDialogClasses = (
  opts: DialogVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    dialogVariants.base,
    dialogVariants.variant[opts.variant ?? 'default'],
    dialogVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Dialog} from './Dialog.vue';
