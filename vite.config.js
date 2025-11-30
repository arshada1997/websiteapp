import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    /* base: '/' */   // ← Add this line
 plugins: [react()],
  base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/websiteapp/' : '/'

})
/* https://arshada1997.github.io/websiteapp/ */
/* https://react-websiteapp.netlify.app/ */