import { getClasses } from '@/utils/kuro/getClasses';

export const progressiveImageVariants = {
  base: 'absolute inset-0',
  variant: {
    pulse: 'bg-foreground animate-pulse',
    bounce: 'bg-foreground animate-bounce',
    spin: 'border-4 border-t-primary rounded-full animate-spin max-w-20 aspect-square top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
    ping: 'bg-foreground rounded-full animate-ping',
    flash: 'bg-foreground animate-[pulse_1.5s_infinite]',
    shimmer_simple: 'bg-gradient-to-r from-foreground via-foreground/80 to-foreground animate-pulse',
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
