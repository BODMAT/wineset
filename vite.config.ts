import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@mixins': path.resolve(__dirname, 'src/mixins')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@mixins' as mixins;`
      }
    }
  },
  base: "/wineset/"
});
