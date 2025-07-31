export const copyFolderRecursiveSync = (source, target) => {
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