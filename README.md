# Dastoor Marquee Kharian — Website

Mobile-first wedding venue website built with React (Vite) + Bootstrap 5,
styled after the ShadiSphere reference (cream + deep green + gold, serif headings).

## Pages (hash routing)
- `#/` Home — Hero (bg photo + venue name), Halls (1 card per row), Menu preview,
  Functions, About Us, Gallery preview, Google Reviews, Contact / booking inquiry
- `#/menu` — Menu & Packages: 3 packages with dish lists + à-la-carte catalog
  (category filter, 2-column card grid on mobile)
- `#/gallery` — Photo gallery (2-column grid on mobile)

## Venue data
All facts live in `src/data/venueData.js` — phone (+92 333 8406021, from the
venue's official Instagram), address, halls, packages, dishes, gallery.
Bookings go to the venue's WhatsApp via pre-filled inquiry messages.
