import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [createVuePlugin()],
  define: {
    'process.env.VUE_ENV': JSON.stringify('client'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/src/pages'),
      }
    }
  }
})