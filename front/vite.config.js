import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Autorise les connexions externes
    port: 5173,       // Facultatif, conserve le port par défaut
  },
})
