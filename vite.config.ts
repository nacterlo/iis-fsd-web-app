import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import mkcert from 'vite-plugin-mkcert'
import svgr from '@svgr/rollup'

const root = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react(), mkcert(), svgr()],

  resolve: {
    alias: {
      '@': root
    } as AliasOptions,
  },

  server: {
    host: '10.1.9.186',
    port: 443
  },
})
