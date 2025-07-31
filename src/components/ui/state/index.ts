import { twMerge } from 'tailwind-merge';

export const statVariants = {
  trend: {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-500',
  },
};

export type StatVariants = {
  trend?: keyof typeof statVariants.trend;
};

export function getStatTrendClasses(
  baseClass?: string,
  opts: StatVariants = {}
) {
  const { trend = 'neutral' } = opts;
  return twMerge(statVariants.trend[trend], baseClass);
}

export { default as Stat } from './Stat.vue';
