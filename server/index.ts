import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Handle placeholder image requests
  app.get("/api/placeholder/:width/:height", (req, res) => {
    const { width, height } = req.params;
    // Redirect to a placeholder image service
    res.redirect(`https://picsum.photos/${width}/${height}`);
  });

  return app;
}
