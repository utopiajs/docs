import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { autolinkConfig } from './pulgins/rehype-autolink-config';
import { astroCodeSnippets, codeSnippetAutoImport } from './integrations/astro-code-snippets';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import siteMap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.utopiajs.github.io/docs',
  integrations: [
    AutoImport({
      imports: [codeSnippetAutoImport],
    }),
    astroCodeSnippets(),
    react(),
    mdx(),
    siteMap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  redirects: {
    '/introduction/index': '/introduction'
  },
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
  },
});
