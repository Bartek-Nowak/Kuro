import {getClasses} from '@/utils/kuro/getClasses';

export const breadcrumbVariants = {
  base: 'inline-flex items-center space-x-2 rounded select-none text-sm font-medium text-gray-600 dark:text-gray-400 *:inline-flex *:items-center *:space-x-2',
  variant: {
    default: 'text-gray-700 dark:text-gray-300',
    success:
      'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    warning:
      'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    error: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    info: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
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
