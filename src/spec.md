# Specification

## Summary
**Goal:** Complete the portal rebuild by implementing missing landing sections, wiring the Home page to include them, ensuring an “ADMINISTRATIVE ACCESS” Internet Identity login flow, rendering required masterplan images from static assets, and confirming backend access control for public reads and admin-only updates.

**Planned changes:**
- Implement non-empty React components for CircuitryPulseBackground, ProductSection, ExecutiveBoardSection, and ConnectGatewaySection (English UI text, no runtime errors).
- Update the Home page (/) composition to include ProductSection and ExecutiveBoardSection alongside existing sections, and apply CircuitryPulseBackground as a performant, non-blocking visual background layer.
- Add a dedicated UI section labeled exactly “ADMINISTRATIVE ACCESS” that uses Internet Identity for login and routes to /admin on success while keeping /admin protected by auth + admin checks.
- Add and render required static images from `frontend/public/assets/generated` via `/assets/generated/...` paths, including visible use of the montage poster and the grid tile background pattern.
- Confirm backend authorization: public/unauthenticated reads for intended public status/contact fields; admin-only mutations for dashboard/config updates; persistent Messaging Terminal submissions with admin-only retrieval, all within `backend/main.mo`.

**User-visible outcome:** The public portal shows all previously listed landing sections (no placeholders), includes a visible “ADMINISTRATIVE ACCESS” login that signs in via Internet Identity and takes admins to the protected dashboard, displays the required masterplan images in the UI, and preserves correct public vs admin access behavior for backend data and messaging.
