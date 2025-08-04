import {getClasses} from '@/utils/kuro/getClasses';

export const progressVariants = {
  base: 'relative h-4 overflow-hidden rounded-full *:h-full *:transition-all *:duration-300',
  variant: {
    default: 'bg-foreground/30 *:bg-primary',
    success:
      'bg-green-300 dark:bg-green-800 *:bg-green-500 dark:*:bg-green-600',
    warning:
      'bg-yellow-200 dark:bg-yellow-700 *:bg-yellow-400 dark:*:bg-yellow-500',
    error: 'bg-red-300 dark:bg-red-800 *:bg-red-500 dark:*:bg-red-600',
    accent:
      'bg-purple-300 dark:bg-purple-800 *:bg-purple-500 dark:*:bg-purple-600',
    muted: 'bg-gray-300 dark:bg-gray-700 *:bg-gray-400 dark:*:bg-gray-500',
  },
};

export type ProgressVariants = {
  variant?: keyof typeof progressVariants.variant;
};

export const getProgressClasses = (
  opts: ProgressVariants = {},
  extraClasses = ''
) => {
  return getClasses(
    progressVariants.base,
    progressVariants.variant[opts.variant ?? 'default'],
    extraClasses
  );
};

export {default as Progress} from './Progress.vue';
