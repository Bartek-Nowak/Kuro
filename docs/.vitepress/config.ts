import {defineConfig} from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kuro',
  description: 'Minimalist Vue components ready to copy and use',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
        text: 'CLI',
        items: [
          {text: 'add', link: '/cli/add'},
          {text: 'init', link: '/cli/init'},
          {text: 'list', link: '/cli/list'},
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Allert', link: '/components/allert' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Button', link: '/components/button' },
          { text: 'Callout', link: '/components/callout' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Icon Toggle', link: '/components/icon-toggle' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Progressive Image', link: '/components/progressive-image' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'Stat', link: '/components/stat' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Text', link: '/components/text' },
          { text: 'Toast', link: '/components/toast' },
        ],
      },
      {
        text: 'Composables',
        items: [
          { text: 'useAsyncState', link: '/composables/useAsyncState' },
          { text: 'useCopyToClipboard', link: '/composables/useCopyToClipboard' },
          { text: 'useEventListener', link: '/composables/useEventListener' },
          { text: 'useFocusTrap', link: '/composables/useFocusTrap' },
          { text: 'useIdle', link: '/composables/useIdle' },
          { text: 'useIntersectionObserver', link: '/composables/useIntersectionObserver' },
          { text: 'usePageVisibility', link: '/composables/usePageVisibility' },
          { text: 'useScrollDirection', link: '/composables/useScrollDirection' },
          { text: 'useThrottleFn', link: '/composables/useThrottleFn' },
          { text: 'useWindowSize', link: '/composables/useWindowSize' },
        ],
      },
    ],

    socialLinks: [{icon: 'github', link: 'https://github.com/Bartek-Nowak/Kuro'}],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

