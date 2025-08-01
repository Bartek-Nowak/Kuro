import {getClasses} from '@/utils/kuro/getClasses';

export const textVariants = {
  base: 'font-sans font-normal leading-relaxed text-foreground',
  variant: {
    default: 'text-foreground dark:text-foreground',
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-300 dark:text-gray-600',
    destructive: 'text-red-600 dark:text-red-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    info: 'text-cyan-600 dark:text-cyan-400',
  },
  size: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  },
};

export type TextVariants = {
  variant?: keyof typeof textVariants.variant;
  size?: keyof typeof textVariants.size;
};

export const getTextClasses = (
  opts: TextVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    textVariants.base,
    textVariants.variant[opts.variant ?? 'default'],
    textVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Text} from './Text.vue';
