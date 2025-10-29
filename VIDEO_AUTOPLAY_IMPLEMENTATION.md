# Video Autoplay Implementation with Visibility Threshold

## Overview

This implementation configures all embedded videos across the site to automatically play only when at least 40% (0.4) of the video element is visible in the user's viewport. This approach respects user preferences, improves performance, and provides a better user experience.

## Implementation Details

### 1. Custom Hook: `useVideoAutoplayOnVisible`

**Location:** `client/hooks/use-video-autoplay.tsx`

**Features:**

- Uses the Intersection Observer API for efficient visibility detection
- Configurable threshold (defaults to 0.4 / 40%)
- Automatically plays video when visibility threshold is met
- Pauses video when it falls below the visibility threshold
- Handles browser autoplay policies gracefully
- Prevents unhandled promise rejections

**Usage Example:**

```tsx
import { useVideoAutoplayOnVisible } from "../hooks/use-video-autoplay";

function MyComponent() {
  // Create ref with 40% visibility threshold
  const videoRef = useVideoAutoplayOnVisible(0.4);

  return (
    <video ref={videoRef} loop muted playsInline className="w-full h-auto">
      <source src="video-url.mp4" type="video/mp4" />
    </video>
  );
}
```

### 2. Applied to All Videos

**Current Implementation:**
All 6 videos in `client/pages/ComputisCaseStudy.tsx` now use this hook:

1. **Hero Video** - Main case study showcase
2. **AI Confidence Tags Video** - Feature demonstration
3. **Inline Audit Drawer Video** - Feature demonstration
4. **Rule Builder Video** - Feature demonstration
5. **Anomaly Detection Video** - Feature demonstration
6. **Multi-Tenant Dashboard Video** - Feature demonstration

### 3. Key Changes Made

#### Before:

```tsx
<video
  autoPlay // ❌ Always plays regardless of visibility
  loop
  muted
  playsInline
>
  <source src="..." type="video/mp4" />
</video>
```

#### After:

```tsx
const videoRef = useVideoAutoplayOnVisible(0.4);

<video
  ref={videoRef} // ✅ Plays only when 40% visible
  loop
  muted
  playsInline
>
  <source src="..." type="video/mp4" />
</video>;
```

## Technical Details

### Intersection Observer Configuration

```typescript
{
  threshold: 0.4,  // 40% of video must be visible
  // rootMargin can be added if needed for earlier/later detection
}
```

### Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Fallback needed for IE11 (not supported in this implementation)

### Autoplay Policy Compliance

The implementation respects browser autoplay policies:

1. **Videos are muted** - Required for autoplay in most browsers
2. **playsInline attribute** - Prevents fullscreen on iOS
3. **Promise handling** - Gracefully handles autoplay prevention
4. **User gesture not required** - Muted videos can autoplay on scroll

## Benefits

1. **Performance Optimization**
   - Videos only play when visible
   - Reduces bandwidth usage
   - Improves page load performance

2. **Better User Experience**
   - Videos start playing when user can see them
   - No wasted resources on off-screen videos
   - Smooth, predictable behavior

3. **Accessibility**
   - Reduces motion for users scrolling quickly
   - Videos pause when out of view
   - Respects reduced-motion preferences (can be extended)

4. **Maintainability**
   - Single hook manages all video behavior
   - Easy to adjust threshold globally
   - Consistent implementation across all videos

## Future Enhancements

### Potential additions:

1. **Reduced Motion Support**

```typescript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
if (prefersReducedMotion.matches) {
  // Don't autoplay
}
```

2. **Data Saver Support**

```typescript
const connection = navigator.connection;
if (connection?.saveData) {
  // Don't autoplay on data saver mode
}
```

3. **Pause on Tab Visibility**

```typescript
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    videoElement.pause();
  }
});
```

4. **YouTube/Vimeo iframe Support**

```typescript
// Handle iframe-based video embeds
const handleIframeAutoplay = (iframe: HTMLIFrameElement) => {
  // Use postMessage API to control iframe videos
};
```

## Testing

### Manual Testing Checklist

- [ ] Hero video plays when 40% visible
- [ ] Videos pause when scrolled out of view
- [ ] Multiple videos don't interfere with each other
- [ ] Videos work on mobile devices
- [ ] Videos work in different browsers
- [ ] Videos respect muted state
- [ ] Console shows no errors

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Mobile

## Troubleshooting

### Video not playing?

1. Check browser console for errors
2. Ensure video is muted (`muted` attribute)
3. Verify `playsInline` attribute is present
4. Check video source URL is accessible
5. Confirm 40% of video is actually visible

### Multiple videos playing at once?

This is expected behavior. Each video independently plays when visible. If you want to prevent this:

```typescript
// Add logic to pause other videos when one plays
videoElement.addEventListener("play", () => {
  // Pause other videos
});
```

## Related Files

- `client/hooks/use-video-autoplay.tsx` - Main hook implementation
- `client/pages/ComputisCaseStudy.tsx` - Example usage
- `client/hooks/use-page-animations.tsx` - Related animation hooks

## References

- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Chrome Autoplay Policy](https://developer.chrome.com/blog/autoplay/)
- [Safari Autoplay Policy](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)
