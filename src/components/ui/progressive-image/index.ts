import { getClasses } from '@/utils/kuro/getClasses';

export const progressiveImageVariants = {
  base: 'absolute inset-0',
  variant: {
    pulse: 'bg-gray-300 animate-pulse',
    bounce: 'bg-gray-300 animate-bounce',
    spin: 'border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin',
    ping: 'bg-gray-300 rounded-full animate-ping',
    flash: 'bg-gray-300 animate-[pulse_1.5s_infinite]',
    shimmer_simple: 'bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse',
  },
};

export type ProgressiveImageVariants = {
  variant?: keyof typeof progressiveImageVariants.variant;
};

export const getProgressiveImageClasses = (
  opts: ProgressiveImageVariants = {},
  extraClasses = ''
) => {
  return getClasses(
    progressiveImageVariants.base,
    progressiveImageVariants.variant[opts.variant ?? 'pulse'],
    extraClasses
  );
};

export {default as ProgressiveImage} from './ProgressiveImage.vue';
