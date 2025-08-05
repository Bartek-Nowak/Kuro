import fs from 'fs';
import path from 'path';
import {copyFolderRecursiveSync} from './copyFolderRecursiveSync.js';
import {execa} from 'execa';
import prompts from 'prompts';

const recursiveTypes = ['component'];

const typeToSourceDirMap = {
  component: (name) => `src/components/ui/${name}`,
  composable: (name) => `src/composables/${name}.ts`,
};

const typeToDestDirMap = {
  component: (name) => `src/components/kuro/${name}`,
  composable: (name) => `src/composables/kuro/${name}.ts`,
};

export const add = async (name, _componentsDir, dirname) => {
  if (!name) {
    console.error('❌ No item name provided');
    process.exit(1);
  }

  const metaPath = path.resolve(dirname, '../meta.json');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  const rootDir = path.resolve(dirname, '..');

  const itemMeta = meta.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  if (!itemMeta) {
    console.error(`❌ Item metadata not found for: ${name}`);
    process.exit(1);
  }

  const sourcePath = path.resolve(
    rootDir,
    typeToSourceDirMap[itemMeta.type](name)
  );
  const destPath = path.resolve(
    process.cwd(),
    typeToDestDirMap[itemMeta.type](name)
  );

  const destDir =
    itemMeta.type === 'component'
      ? path.dirname(destPath)
      : path.dirname(destPath);

  if (itemMeta.requires?.length) {
    for (const required of itemMeta.requires) {
      const requiredDest = path.resolve('src/components/kuro', required);
      if (!fs.existsSync(requiredDest)) {
        console.log(
          `ℹ️  Adding required component "${required}" for "${name}"`
        );
        await add(required, _componentsDir, dirname);
      } else {
        console.log(
          `ℹ️  Required component "${required}" already exists. Skipping.`
        );
      }
    }
  }

  if (fs.existsSync(destPath)) {
    const {overwrite} = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: `⚠️ "${name}" already exists. Overwrite and lose all local changes?`,
      initial: false,
    });

    if (!overwrite) {
      console.log('❌ Operation cancelled by user.');
      process.exit(0);
    }

    fs.rmSync(destPath, {recursive: true, force: true});
  }

  if (itemMeta.dependencies?.length) {
    console.log(
      `ℹ️ Installing dependencies for ${name}: ${itemMeta.dependencies.join(
        ', '
      )}`
    );
    try {
      await execa('npm', ['install', ...itemMeta.dependencies], {
        stdio: 'inherit',
      });
      console.log(`✅ Dependencies installed for ${name}`);
    } catch {
      console.error(`❌ Failed to install dependencies for ${name}`);
      process.exit(1);
    }
  }

  if (recursiveTypes.includes(itemMeta.type)) {
    fs.mkdirSync(destPath, {recursive: true});
    copyFolderRecursiveSync(sourcePath, destPath);
    console.log(`✅ Copied ${name} folder to ${destPath}`);
  } else {
    fs.mkdirSync(destDir, {recursive: true});
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied "${name}" file to ${destPath}`);
  }
};
