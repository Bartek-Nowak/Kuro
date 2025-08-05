![Kuro](Kuro.png)

## ❌ Don’t install this via npm install
This tool is designed to work via `npx`, not to be installed as a dependency.

```bash
❌ npm install kuro    ← Wrong
✅ npx kuro add ...    ← Correct
```

# Kuro

📦 A minimalist CLI for copying ready-to-use Vue 3 components and optionally setting up Tailwind CSS v4.

---

## ✨ Why Kuro?

- 🧱 Instant Components – Copy clean, customizable Vue 3 components into your project.
- 🎨 Tailwind CSS v4 Ready – Automatically installs and configures Tailwind v4.
- 🧩 No Vendor Lock-In – You're copying code, not installing a black-box dependency.
- ⚡ Blazing Fast Setup – No scaffolding, just the bits you need.

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

## 🖼️ Preview Components
1. Clone the repository

2. Install dependencies

3. Run the dev server

```bash
git clone https://github.com/Bartek-Nowak/Kuro
cd Kuro
npm install
npm run dev
```
Preview all components in `App.vue`.

## 📚 Documentation
Full documentation is available at: [Kuro](https://mellifluous-squirrel-4409cd.netlify.app/)

## 📦 Requirements
- Node.js v18+

- Vue 3 project (Vite-based)

## 📝 License
MIT © Bartłomiej Nowak