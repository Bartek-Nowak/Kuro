![Kuro](Kuro.png)

# Kuro

📦 A minimalist CLI for copying ready-to-use Vue 3 components and optionally setting up Tailwind CSS v4.

---

## ✨ Features

- ✅ Quickly copy Vue 3 components from the curated `components/ui` library into your project.
- 🎨 Interactive Tailwind CSS v4 installation and configuration.
- ⚙️ Automatic update of your `vite.config.js` to include the Tailwind plugin.
- 📁 Customizable CSS entry file path for Tailwind imports.

---

## 🚀 Usage

### 🧱 Initialize Tailwind CSS v4

Interactively install Tailwind CSS v4, add the necessary import to your main CSS file, and update your `vite.config.js`:

```bash
npx github:Bartek-Nowak/Kuro init
```

### 📦 Copy a Vue component
Copies a component (e.g. Button.vue) into your project’s src/components directory:

```bash
npx github:Bartek-Nowak/Kuro add button
```

The CLI will prompt you to confirm installation and specify your main CSS file path (defaults to `src/assets/main.css`).

## 📷 Examples
To preview available components in action:

1. Clone the repo

2. Install dependencies

3. Run the dev server

```bash
git clone https://github.com/Bartek-Nowak/Kuro
cd Kuro
npm install
npm run dev
```

This will launch a demo showcasing all components and their variants inside `App.vue`.

## 📚 Documentation
Full documentation is available at: [Kuro](https://mellifluous-squirrel-4409cd.netlify.app/)

## 📦 Requirements
Node.js v18 or higher

A Vue 3 project structured with Vite (for auto Vite config update)

## 🛠 Installation
No installation required — just run via npx directly from GitHub.

## 📝 License
MIT