import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Generates app icons (regular + maskable + apple-touch + favicon)
      // from a single source SVG declared in pwa-assets.config.ts.
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
      },
      manifest: {
        name: 'Wineset',
        short_name: 'Wineset',
        description: 'Wineset - online store for wine, spirits and delicacies.',
        lang: 'en',
        theme_color: '#7a0000',
        background_color: '#121212',
        display: 'standalone',
        orientation: 'portrait',
        categories: ['shopping', 'food'],
      },
      workbox: {
        // SPA fallback so client-side routes keep working offline. The path is
        // resolved against Vite's `base` ("/wineset/") automatically.
        navigateFallback: 'index.html',
        // Precache only the app shell. Product photos (large png/jpg/webp) are
        // intentionally left to load from the network so the precache stays
        // small and under Workbox's size limit. Generated PWA icons are added
        // to the precache automatically by the pwaAssets integration.
        globPatterns: ['**/*.{js,css,html,ico,svg,woff,woff2}'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
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
