import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karan-kalra1.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
});