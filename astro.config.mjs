import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  outDir: 'dist',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
});