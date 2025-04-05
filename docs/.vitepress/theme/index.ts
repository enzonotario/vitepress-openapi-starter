import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import { theme, useOpenapi } from 'vitepress-openapi/client';
import 'vitepress-openapi/dist/style.css';
import spec from '../../../public/openapi.json' with { type: 'json' }

export default {
  ...DefaultTheme,
  async enhanceApp({ app, router, siteData }) {
    const openapi = useOpenapi({
      spec,
      // config: {
      //   jsonViewer: {
      //     renderer: 'shiki',
      //   },
      // },
    });

    theme.enhanceApp({ app, openapi });
  },
} satisfies Theme;
