import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root container
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Create root only once and reuse it for HMR
let root: ReturnType<typeof createRoot>;

// Check if we're in development and handle HMR properly
if (import.meta.hot) {
  // In development with HMR, check if root already exists
  if (!(container as any)._reactRoot) {
    root = createRoot(container);
    (container as any)._reactRoot = root;
  } else {
    root = (container as any)._reactRoot;
  }
} else {
  // In production, create root normally
  root = createRoot(container);
}

root.render(<App />);

// Handle HMR updates
if (import.meta.hot) {
  import.meta.hot.accept("./App", (newApp) => {
    if (newApp) {
      root.render(<newApp.default />);
    }
  });
}
