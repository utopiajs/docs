import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { autolinkConfig } from './pulgins/rehype-autolink-config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
  },
});
