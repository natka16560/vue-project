import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  chainWebpack: config => {
    // Добавляем ссылку на CSS библиотеку Semantic UI для загрузки в проект
    config.plugin('html').tap(args => {
      args[0].template = 'scr/index.html';
      return args;
    });
  }
})
