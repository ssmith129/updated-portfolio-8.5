import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root container
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Enhanced root management to prevent duplicate createRoot calls
const ROOT_KEY = "__react_root__";

// Function to get or create root
function getRoot() {
  // Check if root already exists on the container
  if ((container as any)[ROOT_KEY]) {
    if (import.meta.env.DEV) {
      console.log("Reusing existing React root");
    }
    return (container as any)[ROOT_KEY];
  }

  // Check if container already has React content (from previous createRoot)
  const hasReactContent =
    container.hasChildNodes() &&
    container.firstChild &&
    (container.firstChild as any)._reactInternalInstance;

  if (hasReactContent) {
    if (import.meta.env.DEV) {
      console.warn("Found existing React content, clearing container");
    }
    // Clear existing content if it exists but no stored root
    container.innerHTML = "";
  }

  // Create new root and store it
  if (import.meta.env.DEV) {
    console.log("Creating new React root");
  }

  try {
    const root = createRoot(container);
    (container as any)[ROOT_KEY] = root;
    return root;
  } catch (error) {
    console.error("Failed to create React root:", error);
    throw error;
  }
}

// Get or create the root
const root = getRoot();

// Render the app with error handling
try {
  root.render(<App />);
  if (import.meta.env.DEV) {
    console.log("App rendered successfully");
  }
} catch (error) {
  console.error("Failed to render app:", error);
  throw error;
}

// Handle HMR updates in development
if (import.meta.hot) {
  import.meta.hot.accept("./App", (newApp) => {
    if (newApp) {
      // Reuse the existing root for HMR updates
      const currentRoot = (container as any)[ROOT_KEY];
      if (currentRoot) {
        currentRoot.render(<newApp.default />);
      }
    }
  });

  // Clean up on HMR dispose
  import.meta.hot.dispose(() => {
    // Don't unmount, just let HMR handle the update
  });
}
