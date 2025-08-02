// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import node from "@astrojs/node";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: "standalone",
  }),
});
