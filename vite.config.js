import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        page: resolve(__dirname, 'page.html'),
        services: resolve(__dirname, 'services.html'),
      },
    },
  },
});
