import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // the project lives in OneDrive, which can swallow file-change events,
    // so check for edits on a timer instead
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
