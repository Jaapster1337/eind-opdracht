import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('dotenv').config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
