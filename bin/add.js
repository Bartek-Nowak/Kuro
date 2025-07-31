import fs from 'fs';
import { copyFolderRecursiveSync } from './copyFolderRecursiveSync';

export const add = async (name, componentsDir) => {
  if (!name) {
    console.error('❌ No component name provided');
    process.exit(1);
  }

  const folderName = name.toLowerCase();
  const sourceDir = path.join(componentsDir, folderName);
  const destDir = path.join(
    process.cwd(),
    'src',
    'components',
    'ui',
    folderName
  );

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Component folder not found: ${folderName}`);
    process.exit(1);
  }

  fs.mkdirSync(destDir, {recursive: true});
  copyFolderRecursiveSync(sourceDir, destDir);
  console.log(`✅ Copied ${folderName} folder to ${destDir}`);
  return;
};
