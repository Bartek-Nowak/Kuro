import fs from 'fs';
import path from 'path';
import { copyFolderRecursiveSync } from './copyFolderRecursiveSync.js';

export const copyUtils = (dirname) => {
  const utilsSourceDir = path.resolve(dirname, '../src/utils/kuro');
  const utilsDestDir = path.resolve(process.cwd(), 'src/utils/kuro');

  if (!fs.existsSync(utilsSourceDir)) {
    console.error(`❌ Source utils folder not found: ${utilsSourceDir}`);
    process.exit(1);
  }

  fs.mkdirSync(utilsDestDir, {recursive: true});
  copyFolderRecursiveSync(utilsSourceDir, utilsDestDir);
  console.log(`✅ Copied utils kuro folder to ${utilsDestDir}`);
};
