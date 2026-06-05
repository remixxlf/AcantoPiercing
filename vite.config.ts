import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Adicionamos esta parte para forçar o preset do Netlify:
  vite: {
    ssr: {
      noExternal: true, // Garante que o servidor inclua todas as dependências
    },
  },
  nitro: {
    preset: 'netlify', // Esta é a chave para o erro sumir!
  },
});