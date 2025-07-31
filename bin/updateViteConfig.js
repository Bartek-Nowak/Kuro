import fs from 'fs';
import path from 'path';

export const updateViteConfig = async() => {
  const viteConfigPath = path.resolve(process.cwd(), 'vite.config.ts')
  if (!fs.existsSync(viteConfigPath)) {
    console.log('⚠️ vite.config.ts not found — please add tailwindcss plugin manually')
    return
  }

  let content = fs.readFileSync(viteConfigPath, 'utf-8')

  if (!content.includes("import tailwindcss from '@tailwindcss/vite'")) {
    content = `import tailwindcss from '@tailwindcss/vite'\n` + content
  }

  const pluginsRegex = /plugins\s*:\s*\[/m
  if (pluginsRegex.test(content) && !content.includes('tailwindcss()')) {
    content = content.replace(pluginsRegex, match => match + '\n    tailwindcss(),')
  }

  fs.writeFileSync(viteConfigPath, content, 'utf-8')
  console.log('✅ Updated vite.config.ts with tailwindcss plugin')
}