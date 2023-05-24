import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { autolinkConfig } from './pulgins/rehype-autolink-config';
import { astroCodeSnippets, codeSnippetAutoImport } from './integrations/astro-code-snippets';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [codeSnippetAutoImport],
    }),
    astroCodeSnippets(),
    react(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
  },
});
