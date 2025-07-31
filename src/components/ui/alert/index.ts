import { twMerge } from 'tailwind-merge';

export const alertVariants = {
  variant: {
    default: 'bg-blue-100 text-blue-800 border border-blue-300',
    destructive: 'bg-red-100 text-red-800 border border-red-300',
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  },
};

export type AlertVariants = {
  variant?: keyof typeof alertVariants.variant;
  size?: keyof typeof alertVariants.size;
};

export function getAlertClasses(
  baseClass: string | undefined,
  opts: AlertVariants = {}
) {
  const { variant = 'default', size = 'md' } = opts;
  return twMerge(
    'inline-flex items-center justify-between font-medium',
    alertVariants.variant[variant],
    alertVariants.size[size],
    baseClass
  );
}

export { default as Alert } from './Alert.vue';
