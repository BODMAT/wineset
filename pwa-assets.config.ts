import { defineConfig } from '@vite-pwa/assets-generator/config';

// The source SVG already bakes in the wine-red background and a safe-zone
// margin around the glasses, so no extra padding is applied here.
export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[48, 'favicon.ico']],
    },
    maskable: {
      sizes: [512],
      padding: 0,
    },
    apple: {
      sizes: [180],
      padding: 0,
    },
  },
  images: ['public/pwa-icon.svg'],
});
