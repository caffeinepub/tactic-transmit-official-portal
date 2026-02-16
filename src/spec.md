# Specification

## Summary
**Goal:** Ensure the existing Hero H1 headline text (“PRECISION. AUTOMATED.”) always fits fully within its glass panel on all screen sizes without overflow or cropping.

**Planned changes:**
- Update only the selected Hero `<h1>` element styling to use responsive typography so it scales appropriately across mobile/tablet/desktop.
- Allow safe wrapping/line-breaking within the `<h1>` so the text remains contained inside the glass panel while staying centered and visually prominent.

**User-visible outcome:** The hero headline remains large and centered on larger screens, and on small screens (including ~320px width) it wraps/scales as needed to stay fully inside the glass panel without clipping or causing horizontal scrolling.
