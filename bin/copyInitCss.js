import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import prompts from 'prompts';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);

export const copyInitCss = async (dirname) => {
  const defaultCssPath = 'src/assets/main.css';

  const response = await prompts({
    type: 'text',
    name: 'cssPath',
    message: '🔧 Enter the path to your main CSS file:',
    initial: defaultCssPath,
    validate: value => value.endsWith('.css') ? true : 'The path must end with .css',
  });

  const cssPath = response.cssPath;
  if (!cssPath) {
    console.log('❌ No path provided, aborting.');
    return;
  }

  const absoluteUserCssPath = path.resolve(process.cwd(), cssPath);
  const cssDir = path.dirname(absoluteUserCssPath);
  const initCssPath = path.resolve(cssDir, 'kuro.css');

  const sourceInitCss = path.resolve(dirname, 'templates/css/kuro.css');

  if (!fs.existsSync(sourceInitCss)) {
    console.error(`❌ Source file ${sourceInitCss} does not exist. Please check the path.`);
    return;
  }

  await copyFile(sourceInitCss, initCssPath);

  let userCssContent = await readFile(absoluteUserCssPath, 'utf8');

  if (!userCssContent.includes("@import './kuro.css'")) {
    userCssContent += `\n@import './kuro.css';\n`;
    await writeFile(absoluteUserCssPath, userCssContent, 'utf8');
    console.log('✅ Added @import for kuro.css');
  } else {
    console.log('ℹ️ @import for kuro.css already exists.');
  }
};
