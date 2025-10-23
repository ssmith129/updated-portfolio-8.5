import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple SVG to PNG converter using Canvas (will need canvas package)
async function generatePNG() {
  try {
    // Check if sharp is available (preferred) or use canvas
    let sharp;
    try {
      const sharpModule = await import("sharp");
      sharp = sharpModule.default;
      console.log("Using sharp for PNG generation...");

      const svgPath = path.join(
        __dirname,
        "..",
        "public",
        "Computis Assets",
        "workflow-pain-points.svg",
      );
      const pngPath = path.join(
        __dirname,
        "..",
        "public",
        "Computis Assets",
        "workflow-pain-points.png",
      );

      await sharp(svgPath)
        .resize(1000, 600)
        .png({ quality: 95, compressionLevel: 6 })
        .toFile(pngPath);

      console.log("✓ PNG generated successfully at:", pngPath);
      console.log("✓ Dimensions: 1000x600px");
    } catch (sharpError) {
      console.log("Sharp not available, trying alternative method...");

      // Alternative: Use node-canvas if sharp is not available
      try {
        const canvasModule = await import("canvas");
        const { createCanvas, loadImage } = canvasModule;

        const svgPath = path.join(
          __dirname,
          "..",
          "public",
          "Computis Assets",
          "workflow-pain-points.svg",
        );
        const pngPath = path.join(
          __dirname,
          "..",
          "public",
          "Computis Assets",
          "workflow-pain-points.png",
        );

        const canvas = createCanvas(1000, 600);
        const ctx = canvas.getContext("2d");

        // Load and draw SVG
        const svgBuffer = fs.readFileSync(svgPath);
        const img = await loadImage(svgBuffer);

        ctx.drawImage(img, 0, 0, 1000, 600);

        // Save as PNG
        const buffer = canvas.toBuffer("image/png", {
          compressionLevel: 6,
          quality: 0.95,
        });
        fs.writeFileSync(pngPath, buffer);

        console.log("✓ PNG generated successfully using canvas at:", pngPath);
        console.log("✓ Dimensions: 1000x600px");
      } catch (canvasError) {
        console.log("Canvas not available either. Creating a fallback...");

        // Fallback: Copy SVG with PNG extension and create instructions
        const svgPath = path.join(
          __dirname,
          "..",
          "public",
          "Computis Assets",
          "workflow-pain-points.svg",
        );
        const readmePath = path.join(
          __dirname,
          "..",
          "public",
          "Computis Assets",
          "README-PNG-GENERATION.md",
        );

        const instructions = `# PNG Generation Instructions

The workflow-pain-points.png file needs to be generated from the SVG.

## Option 1: Install sharp (recommended)
\`\`\`bash
npm install --save-dev sharp
node scripts/generate-workflow-png.js
\`\`\`

## Option 2: Install canvas
\`\`\`bash
npm install --save-dev canvas
node scripts/generate-workflow-png.js
\`\`\`

## Option 3: Manual conversion
Open the SVG file in a browser or design tool:
1. Open: public/Computis Assets/workflow-pain-points.svg
2. Take a screenshot at 1000x600px resolution
3. Save as: workflow-pain-points.png

## Option 4: Online conversion
1. Visit: https://cloudconvert.com/svg-to-png
2. Upload: workflow-pain-points.svg
3. Set dimensions to 1000x600px
4. Download and save as: workflow-pain-points.png

The HTML and SVG versions are already ready to use!
`;

        fs.writeFileSync(readmePath, instructions);
        console.log("⚠ Could not generate PNG automatically.");
        console.log("ℹ Instructions written to:", readmePath);
        console.log(
          "ℹ Please install sharp or canvas package, or convert manually.",
        );
      }
    }
  } catch (error) {
    console.error("Error generating PNG:", error.message);
    console.log("\nTo generate PNG, you can:");
    console.log("1. Install sharp: npm install --save-dev sharp");
    console.log("2. Install canvas: npm install --save-dev canvas");
    console.log("3. Convert manually using a tool or browser");
  }
}

generatePNG();
