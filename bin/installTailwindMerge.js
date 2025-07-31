import { execa } from 'execa'

export const installTailwindMerge = async () => {
  await execa('npm', ['install', 'tailwind-merge'], {stdio: 'inherit'});
  console.log('✅ tailwind-merge installed');
}

