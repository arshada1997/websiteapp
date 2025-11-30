import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/'   // ← Add this line

})
/* https://arshada1997.github.io/websiteapp/ */
/* https://react-websiteapp.netlify.app/ */