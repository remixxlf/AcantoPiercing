import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Mantemos apenas a regra do Netlify, sem forçar o SSR do React!
  nitro: {
    preset: 'netlify',
  },
});