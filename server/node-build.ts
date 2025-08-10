import path from "path";
import { createServer } from "./index";
import express from "express";

const app = createServer();
const port = process.env.PORT || 3000;

// In development mode, only serve API routes
// Vite handles the frontend on port 8080 and proxies API calls here
const isDev = process.env.NODE_ENV !== 'production';

if (!isDev) {
  // In production, serve the built SPA files
  const __dirname = import.meta.dirname;
  const distPath = path.join(__dirname, "../spa");

  // Serve static files
  app.use(express.static(distPath));

  // Handle React Router - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }

    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // In development, only serve API routes
  // All other routes should return 404 since frontend is served by Vite
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/") && !req.path.startsWith("/health")) {
      return res.status(404).json({ error: "Frontend served by Vite on port 8080" });
    }
    res.status(404).json({ error: "API endpoint not found" });
  });
}

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
}).on('error', (err) => {
  console.error('❌ Failed to start server:', err);
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${port} is already in use. Please free the port or change the PORT environment variable.`);
  }
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
