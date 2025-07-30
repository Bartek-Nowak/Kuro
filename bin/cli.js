#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import { execa } from 'execa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const componentsDir = path.resolve(__dirname, '../src/components/ui')

const [,, cmd, name] = process.argv

async function updateViteConfig() {
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

async function installTailwind() {
  const { installTailwind } = await prompts({
    type: 'confirm',
    name: 'installTailwind',
    message: 'Do you want to install Tailwind CSS v4?',
    initial: true,
  })

  if (!installTailwind) {
    console.log('Skipping Tailwind installation.')
    return
  }

  const { cssPath } = await prompts({
    type: 'text',
    name: 'cssPath',
    message: 'Enter path to your main CSS file',
    initial: 'src/assets/main.css',
  })

  const fullCssPath = path.resolve(process.cwd(), cssPath)
  const dir = path.dirname(fullCssPath)

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(fullCssPath)) fs.writeFileSync(fullCssPath, '')

  console.log('Installing Tailwind CSS v4 and tailwind-merge...')
  await execa('npm', ['install', '-D', 'tailwindcss', '@tailwindcss/vite', 'tailwind-merge'], { stdio: 'inherit' })

  const cssContent = fs.readFileSync(fullCssPath, 'utf-8')
  if (!cssContent.includes('@import "tailwindcss";')) {
    fs.writeFileSync(fullCssPath, '@import "tailwindcss";\n' + cssContent)
  }

  await updateViteConfig()

  console.log('\n🎉 Tailwind CSS v4 and tailwind-merge have been installed and configured!')
  console.log('Run your build/dev process to see Tailwind in action.')
}

function copyFolderRecursiveSync(source, target) {
  const files = fs.readdirSync(source, { withFileTypes: true })
  files.forEach(file => {
    const srcPath = path.join(source, file.name)
    const tgtPath = path.join(target, file.name)

    if (file.isDirectory()) {
      if (!fs.existsSync(tgtPath)) {
        fs.mkdirSync(tgtPath)
      }
      copyFolderRecursiveSync(srcPath, tgtPath)
    } else {
      fs.copyFileSync(srcPath, tgtPath)
    }
  })
}

async function main() {
  if (cmd === 'add') {
    if (!name) {
      console.error('❌ No component name provided')
      process.exit(1)
    }

    const folderName = name.toLowerCase()
    const sourceDir = path.join(componentsDir, folderName)
    const destDir = path.join(process.cwd(), 'src', 'components', 'ui', folderName)

    if (!fs.existsSync(sourceDir)) {
      console.error(`❌ Component folder not found: ${folderName}`)
      process.exit(1)
    }

    fs.mkdirSync(destDir, { recursive: true })
    copyFolderRecursiveSync(sourceDir, destDir)
    console.log(`✅ Copied ${folderName} folder to ${destDir}`)
    return
  }

  if (cmd === 'init') {
    await installTailwind()
    return
  }

  console.error(`❌ Unknown command: ${cmd}`)
  process.exit(1)
}

main()
