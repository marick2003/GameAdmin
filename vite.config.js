import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {   
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': resolve('./src/assets/img')
    },
  
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'BackEnd',
    },
  },

})
