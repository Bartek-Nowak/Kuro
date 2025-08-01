import { getClasses } from '@/utils/kuro/getClasses';

export const badgeVariants = {
  base: 'inline-flex items-center font-semibold rounded-full select-none',
  variant: {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  },
  size: {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  },
};

export type BadgeVariants = {
  variant?: keyof typeof badgeVariants.variant;
  size?: keyof typeof badgeVariants.size;
};

export const getBadgeClasses = (
  opts: BadgeVariants = {},
  extraClasses = ''
) => {
  return getClasses(
    badgeVariants.base,
    badgeVariants.variant[opts.variant ?? 'default'],
    badgeVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export { default as Badge } from './Badge.vue';
