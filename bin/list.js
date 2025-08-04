import fs from 'fs';
import path from 'path';
import prompts from 'prompts';

export const list = async (dirname) => {
  const metaPath = path.resolve(dirname, '../meta.json');

  if (!fs.existsSync(metaPath)) {
    console.error(`❌ meta.json not found at ${metaPath}`);
    process.exit(1);
  }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

  const showAll = process.argv.includes('--all');

  let filtered;

  if (showAll) {
    filtered = meta;
  } else {
    const categories = [
      { title: 'Components', value: 'component' },
      { title: 'Composables', value: 'composable' },
      { title: 'Utils', value: 'util' },
    ];

    const response = await prompts({
      type: 'multiselect',
      name: 'selectedCategories',
      message: 'Select categories to list',
      choices: categories,
      min: 1,
    });

    if (!response.selectedCategories || response.selectedCategories.length === 0) {
      console.log('⚠️ You must select at least one category.');
      return;
    }

    filtered = meta.filter(item =>
      response.selectedCategories.includes(item.type)
    );
  }

  if (filtered.length === 0) {
    console.log('⚠️ No items found for the selected categories.');
    return;
  }

  console.log('\n🛠️ Available items:\n');

  for (const item of filtered) {
    console.log(`🔹 ${item.name} (${item.type})`);
    if (item.description) {
      console.log(`   📝 ${item.description}`);
    }
    if (item.dependencies?.length) {
      console.log(`   📦 Dependencies: ${item.dependencies.join(', ')}`);
    }
    if (item.requires?.length) {
      console.log(`   🤝 Requires: ${item.requires.join(', ')}`);
    }
    console.log('');
  }
};
