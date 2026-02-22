import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-accordion",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
          ],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "charts-vendor": ["recharts"],
          utils: ["framer-motion", "date-fns", "zod"],
        },
      },
    },
    sourcemap: false,
    minify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  plugins: [react()],
  async configureServer(server) {
    const { createServer: createExpressServer } = await import(
      "./server/index"
    );
    const expressApp = createExpressServer();

    // Only handle API and health routes with Express; let Vite handle SPA routes
    server.middlewares.use((req, res, next) => {
      const url = req.url || "";
      if (
        url.startsWith("/api/") ||
        url === "/api" ||
        url.startsWith("/health")
      ) {
        return (expressApp as any)(req, res, next);
      }
      return next();
    });
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));
