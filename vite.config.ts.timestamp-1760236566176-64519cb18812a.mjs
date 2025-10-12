var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/routes/demo.ts
var handleDemo;
var init_demo = __esm({
  "server/routes/demo.ts"() {
    handleDemo = (req, res) => {
      const response = {
        message: "Hello from Express server"
      };
      res.status(200).json(response);
    };
  }
});

// server/index.ts
var server_exports = {};
__export(server_exports, {
  createServer: () => createServer
});
import "file:///app/code/node_modules/dotenv/config.js";
import express from "file:///app/code/node_modules/express/index.js";
import cors from "file:///app/code/node_modules/cors/lib/index.js";
function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);
  app.get("/api/placeholder/:width/:height", (req, res) => {
    const { width, height } = req.params;
    res.redirect(`https://picsum.photos/${width}/${height}`);
  });
  return app;
}
var init_server = __esm({
  "server/index.ts"() {
    init_demo();
  }
});

// vite.config.ts
import { defineConfig } from "file:///app/code/node_modules/vite/dist/node/index.js";
import react from "file:///app/code/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "/app/code";
var vite_config_default = defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"]
    }
  },
  build: {
    outDir: "dist/spa",
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-accordion",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs"
          ],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "charts-vendor": ["recharts"],
          "utils": ["framer-motion", "date-fns", "zod"]
        }
      }
    },
    sourcemap: false,
    minify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"]
    }
  },
  plugins: [react()],
  async configureServer(server) {
    const { createServer: createExpressServer } = await Promise.resolve().then(() => (init_server(), server_exports));
    const expressApp = createExpressServer();
    server.middlewares.use("/api", expressApp);
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./client"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./shared")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2VydmVyL3JvdXRlcy9kZW1vLnRzIiwgInNlcnZlci9pbmRleC50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL2NvZGUvc2VydmVyL3JvdXRlcy9kZW1vLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzL2RlbW8udHNcIjtpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBEZW1vUmVzcG9uc2UgfSBmcm9tIFwiQHNoYXJlZC9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbW86IFJlcXVlc3RIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBEZW1vUmVzcG9uc2UgPSB7XG4gICAgbWVzc2FnZTogXCJIZWxsbyBmcm9tIEV4cHJlc3Mgc2VydmVyXCIsXG4gIH07XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2FwcC9jb2RlL3NlcnZlci9pbmRleC50c1wiO2ltcG9ydCBcImRvdGVudi9jb25maWdcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHsgaGFuZGxlRGVtbyB9IGZyb20gXCIuL3JvdXRlcy9kZW1vXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXIoKSB7XG4gIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuICAvLyBNaWRkbGV3YXJlXG4gIGFwcC51c2UoY29ycygpKTtcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4gIC8vIEV4YW1wbGUgQVBJIHJvdXRlc1xuICBhcHAuZ2V0KFwiL2FwaS9waW5nXCIsIChfcmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwaW5nID0gcHJvY2Vzcy5lbnYuUElOR19NRVNTQUdFID8/IFwicGluZ1wiO1xuICAgIHJlcy5qc29uKHsgbWVzc2FnZTogcGluZyB9KTtcbiAgfSk7XG5cbiAgYXBwLmdldChcIi9hcGkvZGVtb1wiLCBoYW5kbGVEZW1vKTtcblxuICAvLyBIYW5kbGUgcGxhY2Vob2xkZXIgaW1hZ2UgcmVxdWVzdHNcbiAgYXBwLmdldChcIi9hcGkvcGxhY2Vob2xkZXIvOndpZHRoLzpoZWlnaHRcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXEucGFyYW1zO1xuICAgIC8vIFJlZGlyZWN0IHRvIGEgcGxhY2Vob2xkZXIgaW1hZ2Ugc2VydmljZVxuICAgIHJlcy5yZWRpcmVjdChgaHR0cHM6Ly9waWNzdW0ucGhvdG9zLyR7d2lkdGh9LyR7aGVpZ2h0fWApO1xuICB9KTtcblxuICByZXR1cm4gYXBwO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL2NvZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYXBwL2NvZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBmczoge1xuICAgICAgYWxsb3c6IFtcIi4vY2xpZW50XCIsIFwiLi9zaGFyZWRcIl0sXG4gICAgICBkZW55OiBbXCIuZW52XCIsIFwiLmVudi4qXCIsIFwiKi57Y3J0LHBlbX1cIiwgXCIqKi8uZ2l0LyoqXCJdLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRpc3Qvc3BhXCIsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICd1aS12ZW5kb3InOiBbXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnLFxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgICd0aHJlZS12ZW5kb3InOiBbJ3RocmVlJywgJ0ByZWFjdC10aHJlZS9maWJlcicsICdAcmVhY3QtdGhyZWUvZHJlaSddLFxuICAgICAgICAgICdjaGFydHMtdmVuZG9yJzogWydyZWNoYXJ0cyddLFxuICAgICAgICAgICd1dGlscyc6IFsnZnJhbWVyLW1vdGlvbicsICdkYXRlLWZucycsICd6b2QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYXN5bmMgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgIGNvbnN0IHsgY3JlYXRlU2VydmVyOiBjcmVhdGVFeHByZXNzU2VydmVyIH0gPSBhd2FpdCBpbXBvcnQoXCIuL3NlcnZlci9pbmRleFwiKTtcbiAgICBjb25zdCBleHByZXNzQXBwID0gY3JlYXRlRXhwcmVzc1NlcnZlcigpO1xuICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoJy9hcGknLCBleHByZXNzQXBwKTtcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2NsaWVudFwiKSxcbiAgICAgIFwiQHNoYXJlZFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc2hhcmVkXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBLElBR2E7QUFIYjtBQUFBO0FBR08sSUFBTSxhQUE2QixDQUFDLEtBQUssUUFBUTtBQUN0RCxZQUFNLFdBQXlCO0FBQUEsUUFDN0IsU0FBUztBQUFBLE1BQ1g7QUFDQSxVQUFJLE9BQU8sR0FBRyxFQUFF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
