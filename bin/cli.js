#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import { add } from './add';
import { init } from './init';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(dirname, '../src/components/ui');

const [, , cmd, name] = process.argv;

const main = async () => {
  if (cmd === 'add') {
    await add(name, componentsDir);
    return;
  }

  if (cmd === 'init') {
    await init(dirname);
    return;
  }

  console.error(`❌ Unknown command: ${cmd}`);
  process.exit(1);
};

main();
