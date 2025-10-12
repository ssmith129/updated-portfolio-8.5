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
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2VydmVyL3JvdXRlcy9kZW1vLnRzIiwgInNlcnZlci9pbmRleC50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL2NvZGUvc2VydmVyL3JvdXRlcy9kZW1vLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvY29kZS9zZXJ2ZXIvcm91dGVzL2RlbW8udHNcIjtpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBEZW1vUmVzcG9uc2UgfSBmcm9tIFwiQHNoYXJlZC9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbW86IFJlcXVlc3RIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBEZW1vUmVzcG9uc2UgPSB7XG4gICAgbWVzc2FnZTogXCJIZWxsbyBmcm9tIEV4cHJlc3Mgc2VydmVyXCIsXG4gIH07XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS9zZXJ2ZXIvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2FwcC9jb2RlL3NlcnZlci9pbmRleC50c1wiO2ltcG9ydCBcImRvdGVudi9jb25maWdcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHsgaGFuZGxlRGVtbyB9IGZyb20gXCIuL3JvdXRlcy9kZW1vXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXIoKSB7XG4gIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuICAvLyBNaWRkbGV3YXJlXG4gIGFwcC51c2UoY29ycygpKTtcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4gIC8vIEV4YW1wbGUgQVBJIHJvdXRlc1xuICBhcHAuZ2V0KFwiL2FwaS9waW5nXCIsIChfcmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwaW5nID0gcHJvY2Vzcy5lbnYuUElOR19NRVNTQUdFID8/IFwicGluZ1wiO1xuICAgIHJlcy5qc29uKHsgbWVzc2FnZTogcGluZyB9KTtcbiAgfSk7XG5cbiAgYXBwLmdldChcIi9hcGkvZGVtb1wiLCBoYW5kbGVEZW1vKTtcblxuICAvLyBIYW5kbGUgcGxhY2Vob2xkZXIgaW1hZ2UgcmVxdWVzdHNcbiAgYXBwLmdldChcIi9hcGkvcGxhY2Vob2xkZXIvOndpZHRoLzpoZWlnaHRcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXEucGFyYW1zO1xuICAgIC8vIFJlZGlyZWN0IHRvIGEgcGxhY2Vob2xkZXIgaW1hZ2Ugc2VydmljZVxuICAgIHJlcy5yZWRpcmVjdChgaHR0cHM6Ly9waWNzdW0ucGhvdG9zLyR7d2lkdGh9LyR7aGVpZ2h0fWApO1xuICB9KTtcblxuICByZXR1cm4gYXBwO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL2NvZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYXBwL2NvZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBmczoge1xuICAgICAgYWxsb3c6IFtcIi4vY2xpZW50XCIsIFwiLi9zaGFyZWRcIl0sXG4gICAgICBkZW55OiBbXCIuZW52XCIsIFwiLmVudi4qXCIsIFwiKi57Y3J0LHBlbX1cIiwgXCIqKi8uZ2l0LyoqXCJdLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRpc3Qvc3BhXCIsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICd1aS12ZW5kb3InOiBbXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnLFxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgICd0aHJlZS12ZW5kb3InOiBbJ3RocmVlJywgJ0ByZWFjdC10aHJlZS9maWJlcicsICdAcmVhY3QtdGhyZWUvZHJlaSddLFxuICAgICAgICAgICdjaGFydHMtdmVuZG9yJzogWydyZWNoYXJ0cyddLFxuICAgICAgICAgICd1dGlscyc6IFsnZnJhbWVyLW1vdGlvbicsICdkYXRlLWZucycsICd6b2QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGFzeW5jIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlcjogY3JlYXRlRXhwcmVzc1NlcnZlciB9ID0gYXdhaXQgaW1wb3J0KFwiLi9zZXJ2ZXIvaW5kZXhcIik7XG4gICAgY29uc3QgZXhwcmVzc0FwcCA9IGNyZWF0ZUV4cHJlc3NTZXJ2ZXIoKTtcbiAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKCcvYXBpJywgZXhwcmVzc0FwcCk7XG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9jbGllbnRcIiksXG4gICAgICBcIkBzaGFyZWRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NoYXJlZFwiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7QUFBQSxJQUdhO0FBSGI7QUFBQTtBQUdPLElBQU0sYUFBNkIsQ0FBQyxLQUFLLFFBQVE7QUFDdEQsWUFBTSxX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
