# Kuro

📦 A minimalist CLI for copying ready-to-use Vue 3 components and optionally setting up Tailwind CSS v4.

## Features

- Quickly copy Vue 3 components from the curated `components/ui` library into your project.
- Interactive Tailwind CSS v4 installation and configuration.
- Automatic update of your `vite.config.js` to include the Tailwind plugin.
- Customizable CSS entry file path for Tailwind imports.

## Usage

### Initialize Tailwind CSS v4

Interactively install Tailwind CSS v4, add the necessary import to your main CSS file, and update your `vite.config.js`:

```bash
npx github:Bartek-Nowak/Kuro init
```

### Copy a Vue component

Copies a component (e.g. `Button.vue`) into your project’s `src/components/ui` directory:

```bash
npx github:Bartek-Nowak/Kuro add button
```

The CLI will prompt you to confirm installation and specify your main CSS file path (defaults to `src/assets/main.css`).

## Requirements

- Node.js v14 or higher
- A Vue 3 project structure with Vite (for automatic `vite.config.js` update)

## Documentation
Full documentation is available at:
[Kuro](https://mellifluous-squirrel-4409cd.netlify.app)

## Installation

No installation required — just run via `npx` from GitHub.

## License

MIT
