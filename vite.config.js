import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My_To-Do_App/",  // 👈 ตรงนี้ใช้ชื่อ repo GitHub ของคุณ
})
