import { installTailwind } from './installTailwind.js';
import { installLucide } from './installLucide.js';
import { installTailwindMerge } from './installTailwindMerge.js';
import { copyUtils } from './copyUtils.js';

export const init = async (dirname) => {
  await installTailwindMerge();
  await installTailwind();
  await installLucide();
  copyUtils(dirname);

  return;
};
