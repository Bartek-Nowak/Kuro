import { getClasses } from '@/utils/getClasses';

export const buttonVariants = {
  base: 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variant: {
    default:
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    destructive:
      'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    outline:
      'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
    ghost:
      'bg-transparent hover:bg-accent text-foreground focus-visible:ring-ring',
    link: 'text-primary underline-offset-4 hover:underline focus-visible:ring-transparent',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-xl',
  },
};

export type ButtonVariants = {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
};

export const getButtonClasses = (
  opts: ButtonVariants = {},
  extraClasses: string = ''
) => {
  return getClasses(
    buttonVariants.base,
    buttonVariants.variant[opts.variant ?? 'default'],
    buttonVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export { default as Button } from './Button.vue';
