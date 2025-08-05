# `list`

Displays a list of all available components.

::: code-group
```bash [npx via npm]
npx kuro-ui list
```
```bash [npx via GitHub]
npx github:Bartek-Nowak/Kuro list
```
:::

## 📋  What does it display?
- Lists items from one or more categories (Components, Composables, Utils).

- Shows:

   - Name and type (component, composable, util)

   - Description

   - Dependencies (npm packages) if any

   - Requires (other components) if any

## 🎯 Usage details
- By default, the CLI interactively prompts which categories to show.

- To list all items without prompt, add the --all flag:

```bash
npx kuro-ui list --all
```

## 🧪 Example output:

```bash
🛠️ Available items:

🔹 alert (component)
   📝 Displays a prominent alert message with optional icon and title.

🔹 useAsyncState (composable)
   📝 Provides reactive async state management.

🔹 button (component)
   📝 Versatile button component with support for variants and sizes.

🔹 stat (component)
   📝 Presents numerical metrics or KPIs in a compact visual block.

🔹 rating (component)
   📝 Interactive star-based rating component supporting partial selection and read-only mode.
   📦 Dependencies: lucide-vue-next
   🤝 Requires: icon-toggle
```

🔧 Notes
This command does not modify any files — it only lists available items.

- Categories selectable in prompt:

   - Components (Vue components)

   - Composables (Vue composables/hooks)

   - Utils (utility functions)

- Use --all to skip category selection prompt.

