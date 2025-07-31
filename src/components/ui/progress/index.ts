import {getClasses} from '@/utils/kuro/getClasses';

export const progressVariants = {
  base:
    'relative h-4 overflow-hidden rounded-full *:h-full *:transition-all *:duration-300',
  variant: {
    determinate: 'bg-blue-300 *:bg-blue-500',
    success: 'bg-green-300 *:bg-green-500',
    warning: 'bg-yellow-200 *:bg-yellow-400',
    error: 'bg-red-300 *:bg-red-500',
    accent: 'bg-purple-300 *:bg-purple-500',
    muted: 'bg-gray-300 *:bg-gray-400',
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
    progressVariants.variant[opts.variant ?? 'determinate'],
    extraClasses
  );
};

export {default as Progress} from './Progress.vue';
