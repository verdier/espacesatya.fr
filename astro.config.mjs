// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://verdier.github.io',
  base: '/espace-satya/',
  vite: {
    plugins: [tailwindcss()],
  },
});
