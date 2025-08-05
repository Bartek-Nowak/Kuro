# `add`

The `add` command copies a specified UI component from the package into your local project.

It also installs any required dependencies specified for that component.

Additionally, it checks for other component dependencies declared in the component's `requires` list and installs them automatically if they are not yet present in your project.

## 🧪 Usage example:

::: code-group
```bash [npx via npm]
npx kuro-ui add button
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro add button
```
:::

This will:

- Copy the **button** component files into your project's `src/components/kuro/button` folder
- Automatically install any npm packages required by the **button** component
- Automatically add and install any other required components listed in the `requires` field (if missing)

🔧 Notes

- The component name is case-insensitive
- The metadata for components, npm dependencies, and required components is read from `meta.json` in the package repository
- If the component folder or metadata is missing, the command will exit with an error
- The command checks for any required components before adding the main component and installs missing ones without prompting
- npm dependencies are installed using `npm install` automatically after all components are added
- The command does **not** overwrite existing component folders without confirmation from the user
