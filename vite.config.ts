import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/Valentinesmy/",   // 👈 ADD THIS LINE
  plugins: [react()],
})
