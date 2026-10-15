import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    rolldownOptions: {
      output: {
        // Keep everything the first page load needs in the entry chunk (one JS + one CSS file)
        // instead of several tiny shared chunks; lazy-loaded pages stay split.
        codeSplitting: {
          groups: [{ name: 'initial', tags: ['$initial'] }],
        },
      },
    },
  },
})
