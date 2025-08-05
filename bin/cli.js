#!/usr/bin/env node
import path from 'path';
import {fileURLToPath} from 'url';
import {add} from './add.js';
import {init} from './init.js';
import {list} from './list.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(dirname, '../src/components/ui');

const [, , cmd, name] = process.argv;

const main = async () => {
  if (cmd === 'add') {
    await add(name, componentsDir, dirname);
    return;
  }

  if (cmd === 'init') {
    await init(dirname);
    return;
  }

  if (cmd === 'list') {
    await list(dirname);
    return;
  }

  console.error(`❌ Unknown command: ${cmd}`);
  process.exit(1);
};

main();
