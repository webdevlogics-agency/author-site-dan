import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import compress from 'astro-compress';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://danjinzle.com',
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), compress()],
  output: "hybrid",
  adapter: netlify()
});
