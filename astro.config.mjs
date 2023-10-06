import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import nodejs from '@astrojs/node';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://danjinzle.com',
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), compress()],
  adapter: nodejs({
    mode: 'standalone' // or 'middleware'
  }),

  output: 'hybrid'
});
