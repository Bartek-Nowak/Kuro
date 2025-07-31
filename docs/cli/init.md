# `init`

This command initializes your project with required dependencies and configurations for Kuro UI components.

## Usage

```bash
npx github:Bartek-Nowak/Kuro init
```

## What it does

- Installs Tailwind CSS v4 and related packages (optional — you can skip this during setup).
- Always installs `tailwind-merge` package.
- Optionally asks if you want to install `lucide-vue` icons package.
- Copies utility files (e.g. `src/utils/kuro`) to your project.
- Updates `vite.config.ts` to include the Tailwind CSS plugin (optional if you installed Tailwind).

## Notes

- Assumes your project uses Vite with a `vite.config.ts` file.
- The utility files are copied from the package repository to your project.
- If required files or config are missing, it will log an error and exit.
