import {getClasses} from '@/utils/kuro/getClasses';

export const avatarVariants = {
  base: 'inline-flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold select-none overflow-hidden',
  variant: {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  },
  size: {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  },
};

export type AvatarVariants = {
  size?: keyof typeof avatarVariants.size;
  variant?: keyof typeof avatarVariants.variant;
};

export const getAvatarClasses = (opts: AvatarVariants = {}, extraClasses = '') => {
  return getClasses(
    avatarVariants.base,
    avatarVariants.variant[opts.variant ?? 'default'],
    avatarVariants.size[opts.size ?? 'md'],
    extraClasses
  );
};

export {default as Avatar} from './Avatar.vue';
