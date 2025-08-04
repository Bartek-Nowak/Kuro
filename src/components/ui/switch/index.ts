import {getClasses} from '@/utils/kuro/getClasses';

export const switchVariants = {
  base: 'relative inline-flex items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 *:inline-block *:bg-white *:rounded-full *:transform *:transition-transform',
  variant: {
    default: 'bg-primary',
    primary: 'bg-blue-600 dark:bg-blue-400',
    secondary: 'bg-gray-700 dark:bg-gray-300',
    muted: 'bg-gray-300 dark:bg-gray-600',
    destructive: 'bg-red-600 dark:bg-red-400',
    success: 'bg-green-600 dark:bg-green-400',
    warning: 'bg-orange-600 dark:bg-orange-400',
    info: 'bg-cyan-600 dark:bg-cyan-400',
  },
  size: {
    sm: 'h-4 w-8 *:size-2',
    md: 'h-6 w-11 *:size-4',
    lg: 'h-8 w-16 *:size-6',
  },
  knobTransform: {
    sm: 'translate-x-5',
    md: 'translate-x-6',
    lg: 'translate-x-9',
  },
};

export type SwitchVariants = {
  variant?: keyof typeof switchVariants.variant;
  size?: keyof typeof switchVariants.size;
};

export const getSwitchClasses = (
  opts: SwitchVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    switchVariants.base,
    switchVariants.variant[opts.variant ?? 'default'],
    switchVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Switch} from './Switch.vue';
