# `list`

Displays a list of all available components.

```bash
npx github:Bartek-Nowak/Kuro list
```

## 📋 What does it display?

- Component name
- Description
- Dependencies (npm packages) if any
- Requires (other components) if any

## 🧪 Example output:

```bash
🛠️ Available components:

🔹 alert
   📝 Displays a prominent alert message with optional icon and title.

🔹 button
   📝 Versatile button component with support for variants and sizes.

🔹 callout
   📝 Highlights key content with an icon, title, and description.

🔹 stat
   📝 Presents numerical metrics or KPIs in a compact visual block.

🔹 text
   📝 Typography component supporting variants and semantic tags.

🔹 rating
   📝 Interactive star-based rating component supporting partial selection and read-only mode.
   📦 Dependencies: lucide-vue-next
   🤝 Requires: icon-toggle
```

## 🔧 Notes

- This command does not modify any files — it only lists available components
- Dependencies are npm packages required by the component.
- Requires are other components that this component depends on.

