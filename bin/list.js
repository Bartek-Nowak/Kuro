// bin/list.js
import fs from 'fs';
import path from 'path';

export const list = (dirname) => {
  const metaPath = path.resolve(dirname, '../meta.json');

  if (!fs.existsSync(metaPath)) {
    console.error(`❌ meta.json not found at ${metaPath}`);
    process.exit(1);
  }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

  console.log('\n📦 Available components:\n');

  for (const comp of meta) {
    console.log(`🔹 ${comp.name}`);
    if (comp.description) {
      console.log(`   📝 ${comp.description}`);
    }
    if (comp.requires?.length) {
      console.log(`   📦 Requires: ${comp.requires.join(', ')}`);
    }
    console.log('');
  }
};
