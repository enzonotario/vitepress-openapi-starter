import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import { theme, useOpenapi, useShiki } from 'vitepress-openapi/client';
import 'vitepress-openapi/dist/style.css';
import spec from '../spec'

export default {
  ...DefaultTheme,
  async enhanceApp({ app, router, siteData }) {
    await useShiki().init()

    const openapi = useOpenapi({
      spec,
      config: {},
    });

    theme.enhanceApp({ app, openapi });
  },
} satisfies Theme;
