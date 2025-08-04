import {installTailwind} from './installTailwind.js';
import {installLucide} from './installLucide.js';
import {installTailwindMerge} from './installTailwindMerge.js';
import {copyUtils} from './copyUtils.js';
import {copyInitCss} from './copyInitCss.js';

export const init = async (dirname) => {
  await installTailwindMerge();
  await installTailwind();
  await installLucide();
  copyUtils(dirname);
  await copyInitCss(dirname);

  console.log('🎉 Kuro init completed! You’re ready to build faster UI.');

  return;
};
