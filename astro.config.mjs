import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
  output: "server",
  adapter: nodejs({
    mode: 'middleware' // or 'standalone'
  }),
  output: 'hybrid',
});
