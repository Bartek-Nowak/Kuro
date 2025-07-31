# `add`

The `add` command copies a specified UI component from the package into your local project.

It also installs any required dependencies specified for that component.

## 🧪 Usage example:

```bash
npx github:Bartek-Nowak/Kuro add button
```

This will:

- Copy the **button** component files into your project's `src/components/kuro/button` folder
- Automatically install any npm packages required by the **button** component

🔧 Notes

- The component name is case-insensitive
- The metadata for components and their dependencies is read from `meta.json` in the package repository
- If the component folder or metadata is missing, the command will exit with an error
- Dependencies are installed using `npm install` automatically
- The command does **not** overwrite existing files without confirmation
