/**
 * Utility to test React root management
 * This helps debug any remaining createRoot issues
 */

export function testRootManagement() {
  if (import.meta.env.DEV) {
    const container = document.getElementById("root");
    if (!container) {
      console.error("Root container not found");
      return;
    }

    const ROOT_KEY = "__react_root__";
    const hasStoredRoot = !!(container as any)[ROOT_KEY];
    const hasChildren = container.hasChildNodes();

    console.log("Root Management Debug:", {
      hasStoredRoot,
      hasChildren,
      childrenCount: container.children.length,
      containerHTML: container.innerHTML.slice(0, 100) + "...",
    });
  }
}

// Auto-run in development
if (import.meta.env.DEV) {
  // Run after a short delay to let the app initialize
  setTimeout(testRootManagement, 1000);
}
