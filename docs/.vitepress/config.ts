import {defineConfig} from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kuro',
  description: 'Minimalist Vue components ready to copy and use',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Guide', link: '/guide/'},
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          {text: 'Introduction', link: '/guide/'},
          {text: 'Installation', link: '/installation/'},
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Allert', link: '/components/allert' },
          { text: 'Button', link: '/components/button' },
          { text: 'Callout', link: '/components/callout' },
        ],
      },
    ],

    socialLinks: [{icon: 'github', link: 'https://github.com/Bartek-Nowak/Kuro'}],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

