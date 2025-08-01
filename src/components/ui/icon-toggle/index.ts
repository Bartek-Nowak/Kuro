import { getClasses } from '@/utils/kuro/getClasses';

export const iconToggleVariants = {
  base: 'absolute inset-0 transition-all duration-300',
  variant: {
    default: '*:text-foreground dark:*:text-white',
    info: '*:text-blue-600 dark:*:text-blue-400',
    success: '*:text-green-600 dark:*:text-green-400',
    warning: '*:text-yellow-600 dark:*:text-yellow-400',
    danger: '*:text-red-600 dark:*:text-red-400',
  },
};

export type IconToggleVariants = {
  variant?: keyof typeof iconToggleVariants.variant;
};

export const getIconToggleClasses = (
  opts: IconToggleVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    iconToggleVariants.base,
    iconToggleVariants.variant[opts.variant ?? 'default'],
    extraClasses
  );
};

export { default as IconToggle } from './IconToggle.vue';