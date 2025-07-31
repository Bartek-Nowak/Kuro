import { twMerge } from 'tailwind-merge';

export const calloutVariants = {
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

export function getCalloutClasses(
  baseClass?: string,
  opts: CalloutVariants = {}
) {
  const { variant = 'default' } = opts;
  return twMerge(
    'border relative rounded-lg p-4 flex items-start gap-3',
    calloutVariants.variant[variant],
    baseClass
  );
}

export { default as Callout } from './Callout.vue';
