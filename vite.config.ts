import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
