import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages at username.github.io/repo-name, set base: '/repo-name/'.
// For Vercel, Netlify or a custom domain, keep base: '/'.
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
