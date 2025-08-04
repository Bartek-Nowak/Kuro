import {getClasses} from '@/utils/kuro/getClasses';

export const buttonVariants = {
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow rounded-md',
  variant: {
    default:
      'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
      'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 dark:bg-red-500 dark:hover:bg-red-600 dark:focus-visible:ring-red-500',
    outline:
      'border border-border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:hover:bg-neutral-800',
    ghost:
      'bg-transparent hover:bg-accent text-foreground focus-visible:ring-ring dark:hover:bg-neutral-800 shadow-none',
    link: 'text-primary underline-offset-4 hover:underline focus-visible:ring-transparent dark:text-blue-400 shadow-none',
  },
  size: {
    sm: 'px-3 py-1.5 h-6 text-sm',
    md: 'px-4 py-2 h-8 text-sm',
    lg: 'px-6 py-3 h-10 text-base',
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

export {default as Button} from './Button.vue';
