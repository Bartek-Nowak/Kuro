import prompts from 'prompts'
import { execa } from 'execa'
import { updateViteConfig } from "./updateViteConfig"

export const installTailwind = async () => {
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