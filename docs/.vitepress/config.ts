import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress OpenAPI',
  description: 'Generate documentation from OpenAPI specifications.',

  themeConfig: {
    nav: [{ text: 'API Reference', link: '/reference' }],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'API Reference', link: '/reference' },
          // ...
        ],
      },
    ],
  },
});
