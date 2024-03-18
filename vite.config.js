// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/slider-event': {
        target: 'https://65ede50f08706c584d9ad460.mockapi.io',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/slider-event/, '/slider-event/slider__event'),
      },
      '/api/course-data': {
        target: 'https://65ede50f08706c584d9ad460.mockapi.io',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/course-data/, '/slider-event/cour__data'),
      },
    },
  },
});
