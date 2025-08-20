import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root container
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Enhanced root management to prevent duplicate createRoot calls
const ROOT_KEY = '__react_root__';

// Function to get or create root
function getRoot() {
  // Check if root already exists on the container
  if ((container as any)[ROOT_KEY]) {
    return (container as any)[ROOT_KEY];
  }

  // Check if container already has React content (from previous createRoot)
  const hasReactContent = container.hasChildNodes() &&
    container.firstChild &&
    (container.firstChild as any)._reactInternalInstance;

  if (hasReactContent) {
    // Clear existing content if it exists but no stored root
    container.innerHTML = '';
  }

  // Create new root and store it
  const root = createRoot(container);
  (container as any)[ROOT_KEY] = root;

  return root;
}

// Get or create the root
const root = getRoot();

// Render the app
root.render(<App />);

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
