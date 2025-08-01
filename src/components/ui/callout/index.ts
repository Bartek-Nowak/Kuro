import { getClasses } from '@/utils/kuro/getClasses';

export const calloutVariants = {
  base: 'flex gap-2 p-2',
  variant: {
    default:
      'border-border bg-muted text-foreground dark:bg-neutral-800 dark:text-neutral-100',
    info:
      'border-blue-400 bg-blue-50 text-blue-900 dark:border-blue-600 dark:bg-blue-950 dark:text-blue-100',
    success:
      'border-green-400 bg-green-50 text-green-900 dark:border-green-600 dark:bg-green-950 dark:text-green-100',
    warning:
      'border-yellow-400 bg-yellow-50 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-950 dark:text-yellow-100',
    danger:
      'border-red-400 bg-red-50 text-red-900 dark:border-red-600 dark:bg-red-950 dark:text-red-100',
  },
};

export type CalloutVariants = {
  variant?: keyof typeof calloutVariants.variant;
};

export const getCalloutClasses = (
  opts: CalloutVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    calloutVariants.base,
    calloutVariants.variant[opts.variant ?? 'default'],
    extraClasses
  );
};

export { default as Callout } from './Callout.vue';
