import { defineConfig } from 'vite';
import { createServer } from 'vite';
import mkcert from 'vite-plugin-mkcert'

import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
    host: '192.168.1.110'
  },
  plugins: [react(), mkcert()],
});
