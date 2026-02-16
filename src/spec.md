# Specification

## Summary
**Goal:** Full rebuild of the TACTIC TRANSMIT public portal into the blueprint’s multi-page site while keeping the existing Admin Dashboard route operational, and implementing Internet Identity-gated secure access plus backend persistence for public contact submissions.

**Planned changes:**
- Restructure the public site from a single landing page into separate routes/pages: Home, Product Deep-Dive, Board, Connect & Support, and Legal & Technical Docs, while keeping existing /admin, /terms, and /privacy working.
- Rebuild the Home page in a high-contrast dark theme with a mouse-reactive particle background, a hero TT logo that pulses in sync with a visible digital clock, the hook headline “PRECISION. AUTOMATED. SYNCHRONIZED.”, the Welcome Narrative (with attribution to Nandhukrishna Biju), a 3-item Core Value grid (High Fidelity / Zero Drift / Safety First), and a public contact section showing tactic.transmit@gmail.com and @tactic_transmit.
- Add a dedicated Product Deep-Dive page (“The TT-1 Transmitter”) with a blueprint/schematic visual style and exactly four component modules (ESP32-WROOM-32, DS3231 High-Precision RTC, DFPlayer Mini (FN-M16P) + 24-bit DAC, 1kΩ Impedance Matching Resistors), each with a macro image and the exact provided technical text.
- Add a dedicated Board page with glassmorphism cards and studio-style headshots for Johann G. Thekkel, Joel Abraham, Dejon Justine, and Nandhukrishna Biju, using the exact roles and one-sentence descriptions.
- Add a dedicated Connect & Support page split into (A) a public “Messaging Terminal” form (Name, Email Address required, Message) and (B) a secure “Founders’ Vault” gated by Internet Identity auth + required stored user profile (Name and Email Address), including the exact CTA button “Access Secure Contact Details” and the unauthenticated message “Sign up to unlock the Tactic Transmit direct contact line.”
- Implement backend storage for Messaging Terminal submissions (name, email, message, server timestamp) and an admin-only query to list submissions; update the frontend to submit and show a clear success state.
- Replace any password-based auth semantics with Internet Identity only; add profile capture UI requiring Email Address (and Name) to unlock secure access.
- After first-time unlock/profile completion, present the provided “Automated Network Access Email” content (subject + body) as an in-app confirmation with a Copy action (no claim of email sending).
- Implement the Founders’ Vault unlocked view to reveal the exact secure contact lines: +91 7356824245, tactic.transmit@gmail.com, and @tactic_transmit (and keep them fully hidden when not unlocked).
- Create the Legal & Technical Docs area containing Terms of Service with explicit IP ownership naming all four founders, and a Safety Audit document presented as signed by Dejon and Johann (signature blocks as text and/or images).
- Update global header/footer navigation to include Home, Product, Board, and Login/Connect, while keeping Terms/Privacy accessible from the footer; ensure navigation works on desktop and mobile.
- Add explicit logout controls that clear the Internet Identity session and return the user to Home, removing access to protected areas until login again.

**User-visible outcome:** Users can navigate a multi-page TACTIC TRANSMIT portal, view the redesigned Home/Product/Board pages, submit messages via the public Messaging Terminal, and (after Internet Identity login + completing a Name/Email profile) unlock the Founders’ Vault to see secure contact details and copy the on-screen “Access Granted” email content; admins can access /admin as before and retrieve stored contact submissions.
