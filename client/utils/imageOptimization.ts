// Image optimization utilities

export const getOptimizedImageUrl = (
  src: string, 
  width: number, 
  quality: number = 80,
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string => {
  // Handle external CDN images
  if (src.includes('pexels.com')) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&h=${Math.round(width * 0.6)}&dpr=2`;
  }
  
  if (src.includes('unsplash.com')) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality}&fm=${format}`;
  }

  if (src.includes('images.unsplash.com')) {
    const baseUrl = src.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}&fm=${format}`;
  }
  
  // For local images, return as-is (you can integrate with Cloudinary or similar)
  return src;
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload critical images for better LCP
export const preloadCriticalImages = async (): Promise<void> => {
  const criticalImages = [
    '/sean-smith-product-designer-headshot.webp',
    '/computis-crypto-tax-dashboard-hero.webp'
  ];
  
  await Promise.allSettled(criticalImages.map(preloadImage));
};

// Generate responsive image srcSet
export const generateSrcSet = (baseSrc: string, sizes: number[]): string => {
  return sizes
    .map(size => {
      const optimizedSrc = getOptimizedImageUrl(baseSrc, size);
      return `${optimizedSrc} ${size}w`;
    })
    .join(', ');
};

// Calculate image dimensions while maintaining aspect ratio
export const calculateDimensions = (
  originalWidth: number, 
  originalHeight: number, 
  targetWidth?: number, 
  targetHeight?: number
): { width: number; height: number } => {
  if (targetWidth && targetHeight) {
    return { width: targetWidth, height: targetHeight };
  }
  
  const aspectRatio = originalWidth / originalHeight;
  
  if (targetWidth) {
    return { width: targetWidth, height: Math.round(targetWidth / aspectRatio) };
  }
  
  if (targetHeight) {
    return { width: Math.round(targetHeight * aspectRatio), height: targetHeight };
  }
  
  return { width: originalWidth, height: originalHeight };
};

// Generate image alt text suggestions
export const generateAltText = (
  filename: string, 
  context: 'profile' | 'project' | 'screenshot' | 'mockup' | 'logo' = 'project'
): string => {
  const name = filename.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '').replace(/[-_]/g, ' ');
  
  const templates = {
    profile: `Sean Smith, Product Designer - Professional headshot`,
    project: `${name} - User interface design by Sean Smith`,
    screenshot: `${name} - Application interface screenshot`,
    mockup: `${name} - Design mockup and user experience`,
    logo: `${name} - Brand logo and visual identity`
  };
  
  return templates[context];
};