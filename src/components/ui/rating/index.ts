import {getClasses} from '@/utils/kuro/getClasses';

export const ratingVariants = {
  base: 'focus:outline-none focus-visible:ring-2 *:transition-colors',
  variant: {
    default: '*:fill-primary *:stroke-foreground',
    primary: '*:fill-yellow-400 *:stroke-yellow-500',
    secondary: '*:fill-gray-700 *:stroke-gray-300',
    muted: '*:fill-gray-300 *:stroke-gray-600',
    destructive: '*:fill-red-600 *:stroke-red-400',
    success: '*:fill-green-600 *:stroke-green-400',
    warning: '*:fill-yellow-600 *:stroke-yellow-400',
    info: '*:fill-cyan-600 *:stroke-cyan-400',
  },
  size: {
    sm: '*:size-3',
    md: '*:size-5',
    lg: '*:size-8',
  },
};

export type RatingVariants = {
  variant?: keyof typeof ratingVariants.variant;
  size?: keyof typeof ratingVariants.size;
};

export const getRatingClasses = (
  opts: RatingVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    ratingVariants.base,
    ratingVariants.variant[opts.variant ?? 'default'],
    ratingVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Rating} from './Rating.vue';
