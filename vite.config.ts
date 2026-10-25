import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // ścieżki względne – aplikacja działa pod dowolnym adresem (np. GitHub Pages /nazwa-repo/)
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'favicon.svg'],
      manifest: {
        name: 'Matura Trener',
        short_name: 'Matura',
        description: 'Arkusze maturalne CKE z polskiego, angielskiego i matematyki – rozwiązuj, sprawdzaj, śledź postęp.',
        lang: 'pl',
        start_url: './',
        scope: './',
        display: 'standalone',
        background_color: '#f6f4ef',
        theme_color: '#1f4e5f',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,mjs,css,html,svg,png,webmanifest}'],
        globIgnores: ['pdf/**', 'pdfjs/**'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            // arkusze i zasady oceniania – pobierane przy pierwszym otwarciu, potem offline
            urlPattern: ({ url }) => url.pathname.includes('/pdf/') && url.pathname.endsWith('.pdf'),
            handler: 'CacheFirst',
            options: { cacheName: 'pdfs', cacheableResponse: { statuses: [200] } },
          },
          {
            urlPattern: ({ url }) => url.pathname.includes('/pdfjs/'),
            handler: 'CacheFirst',
            options: { cacheName: 'pdfjs-assets', cacheableResponse: { statuses: [200] } },
          },
        ],
      },
    }),
  ],
  server: { host: true },
  preview: { host: true },
})
