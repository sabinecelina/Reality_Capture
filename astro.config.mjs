import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sabineruemmele.com',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
