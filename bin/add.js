import fs from 'fs';
import path from 'path';
import { copyFolderRecursiveSync } from './copyFolderRecursiveSync.js';
import { execa } from 'execa';
import prompts from 'prompts';

export const add = async (name, componentsDir, dirname) => {
  if (!name) {
    console.error('❌ No component name provided');
    process.exit(1);
  }

  const metaPath = path.resolve(dirname, '../meta.json');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  const folderName = name.toLowerCase();

  const componentMeta = meta.find((c) => c.name === folderName);
  if (!componentMeta) {
    console.error(`❌ Component metadata not found for: ${folderName}`);
    process.exit(1);
  }

  const sourceDir = path.join(componentsDir, folderName);
  const destDir = path.join(process.cwd(), 'src', 'components', 'kuro', folderName);

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Component folder not found: ${folderName}`);
    process.exit(1);
  }

  if (componentMeta.requires && componentMeta.requires.length > 0) {
    for (const requiredComponent of componentMeta.requires) {
      const requiredDestDir = path.join(process.cwd(), 'src', 'components', 'kuro', requiredComponent);
      if (!fs.existsSync(requiredDestDir)) {
        console.log(`ℹ️ Adding required component "${requiredComponent}" for "${folderName}"`);
        await add(requiredComponent, componentsDir, dirname);
      } else {
        console.log(`ℹ️ Required component "${requiredComponent}" already exists. Skipping install.`);
      }
    }
  }

  if (fs.existsSync(destDir)) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: `⚠️ Component "${folderName}" already exists. Overwrite and lose all local changes?`,
      initial: false,
    });

    if (!overwrite) {
      console.log('❌ Operation cancelled by user.');
      process.exit(0);
    }

    fs.rmSync(destDir, { recursive: true, force: true });
  }

  if (componentMeta.dependencies && componentMeta.dependencies.length > 0) {
    console.log(
      `ℹ️ Installing dependencies for ${folderName}: ${componentMeta.dependencies.join(', ')}`
    );
    try {
      await execa('npm', ['install', ...componentMeta.dependencies], {
        stdio: 'inherit',
      });
      console.log(`✅ Dependencies installed for ${folderName}`);
    } catch {
      console.error(`❌ Failed to install dependencies for ${folderName}`);
      process.exit(1);
    }
  }

  fs.mkdirSync(destDir, { recursive: true });
  copyFolderRecursiveSync(sourceDir, destDir);
  console.log(`✅ Copied ${folderName} folder to ${destDir}`);
};
