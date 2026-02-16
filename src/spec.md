# Specification

## Summary
**Goal:** Use the newly uploaded logo image as the single, canonical logo across the TACTIC TRANSMIT public portal.

**Planned changes:**
- Add `SmartSelect_20260214-130511_WhatsApp-1.jpg` to `frontend/public/assets/generated/` and treat it as the single source-of-truth logo asset.
- Update the portal UI to render the logo exclusively from `/assets/generated/SmartSelect_20260214-130511_WhatsApp-1.jpg` everywhere a TT/Tactic Transmit logo appears (including the fixed header and the Home hero), removing references to prior logo filenames.

**User-visible outcome:** The site header and Home hero (and any other logo placements) display the uploaded logo consistently, with no broken image placeholders across all routes.
