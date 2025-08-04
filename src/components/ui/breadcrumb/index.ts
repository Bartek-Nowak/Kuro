import {getClasses} from '@/utils/kuro/getClasses';

export const breadcrumbVariants = {
  base: 'inline-flex items-center gap-2 rounded select-none text-sm font-medium text-muted-foreground *:inline-flex *:items-center *:gap-2',
  variant: {
    default: 'text-foreground',
    success: 'text-green-700 dark:text-green-300',
    warning: 'text-yellow-700 dark:text-yellow-300',
    error: 'text-red-700 dark:text-red-300',
    info: 'text-blue-700 dark:text-blue-300',
  },
  size: {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  },
};

export type BreadcrumbVariants = {
  variant?: keyof typeof breadcrumbVariants.variant;
  size?: keyof typeof breadcrumbVariants.size;
};

export const getBreadcrumbClasses = (
  opts: BreadcrumbVariants = {},
  extraClasses = ''
) => {
  return getClasses(
    breadcrumbVariants.base,
    breadcrumbVariants.variant[opts.variant ?? 'default'],
    breadcrumbVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Breadcrumb} from './Breadcrumb.vue';
