import { getClasses } from '@/utils/getClasses';

export const calloutVariants = {
  base: 'flex gap-2 p-2',
  variant: {
    default: 'border-border bg-muted text-foreground',
    info: 'border-blue-400 bg-blue-50 text-blue-900',
    success: 'border-green-400 bg-green-50 text-green-900',
    warning: 'border-yellow-400 bg-yellow-50 text-yellow-900',
    danger: 'border-red-400 bg-red-50 text-red-900',
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
