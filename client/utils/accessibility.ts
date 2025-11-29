/**
 * Accessibility utilities for color contrast checking
 * Based on WCAG 2.1 guidelines
 */

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance of a color
 * Formula from WCAG 2.1: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const sRGB = val / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Formula from WCAG 2.1: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
function getContrastRatio(luminance1: number, luminance2: number): number {
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check color contrast between foreground and background colors
 * Returns contrast ratio and WCAG compliance levels
 * 
 * @param foreground - Hex color string (e.g., "#FFFFFF" or "FFFFFF")
 * @param background - Hex color string (e.g., "#000000" or "000000")
 * @returns Object with contrast ratio and WCAG compliance information
 * 
 * WCAG 2.1 Requirements:
 * - AA (Normal text): 4.5:1
 * - AA (Large text): 3:1
 * - AAA (Normal text): 7:1
 * - AAA (Large text): 4.5:1
 */
export function checkContrast(
  foreground: string,
  background: string
): {
  ratio: number;
  passesAA: boolean;
  passesAAA: boolean;
  passesAALarge: boolean;
  passesAAALarge: boolean;
} {
  // Normalize hex strings (remove # if present)
  const fg = foreground.replace("#", "");
  const bg = background.replace("#", "");

  // Convert to RGB
  const fgRgb = hexToRgb(fg);
  const bgRgb = hexToRgb(bg);

  if (!fgRgb || !bgRgb) {
    throw new Error("Invalid hex color format");
  }

  // Calculate luminance
  const fgLuminance = getLuminance(fgRgb.r, fgRgb.g, fgRgb.b);
  const bgLuminance = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

  // Calculate contrast ratio
  const ratio = getContrastRatio(fgLuminance, bgLuminance);

  return {
    ratio: Math.round(ratio * 100) / 100, // Round to 2 decimal places
    passesAA: ratio >= 4.5, // Normal text
    passesAAA: ratio >= 7, // Normal text
    passesAALarge: ratio >= 3, // Large text (18pt+/14pt+ bold)
    passesAAALarge: ratio >= 4.5, // Large text
  };
}

/**
 * Get a human-readable description of contrast compliance
 */
export function getContrastDescription(
  foreground: string,
  background: string
): string {
  const result = checkContrast(foreground, background);

  if (result.passesAAA) {
    return `Excellent contrast (${result.ratio}:1) - Passes AAA for all text sizes`;
  } else if (result.passesAA) {
    return `Good contrast (${result.ratio}:1) - Passes AA for normal text, AAA for large text`;
  } else if (result.passesAALarge) {
    return `Fair contrast (${result.ratio}:1) - Passes AA for large text only`;
  } else {
    return `Poor contrast (${result.ratio}:1) - Fails WCAG guidelines`;
  }
}

/**
 * Batch check multiple color combinations
 */
export function checkMultipleContrasts(
  combinations: Array<{ foreground: string; background: string; label?: string }>
): Array<{
  label?: string;
  foreground: string;
  background: string;
  result: ReturnType<typeof checkContrast>;
}> {
  return combinations.map((combo) => ({
    ...combo,
    result: checkContrast(combo.foreground, combo.background),
  }));
}
