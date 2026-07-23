# Gozak Pharmacy & Supermarket — Frontend (Home + Core Pages)

React + Tailwind CSS build of the Gozak marketing site: a long animated home
page plus About, Pharmacy, Supermarket, Shopping Mall, Services, and Contact
pages, with Sign In and Book Appointment modals wired into the nav.

This is presentation-layer only — no backend, cart, auth, or real data yet.
It's built to drop cleanly into a Next.js, Vite, or CRA project that already
has Tailwind CSS configured.

## Structure

```
src/
  App.jsx                  Root component: context provider, layout, page router
  lib/
    brand.js                Brand color tokens (single source of truth)
  context/
    AppContext.jsx           React context: current page, modal open state, nav items
  components/
    GlobalStyle.jsx          Keyframes/animations not in default Tailwind build
    Reveal.jsx                useInView hook, <Reveal> scroll-reveal wrapper, <Counter>
    Btn.jsx                   Shared button primitive (primary/gold/ghost/dark variants)
    Modals.jsx                ModalShell, SignInModal, AppointmentModal
    Navbar.jsx                 Sticky nav, mobile menu, Sign In / Book Appointment triggers
    Footer.jsx                 Footer + floating WhatsApp button
    Shared.jsx                  Eyebrow, SectionHead, PageHero, ProductCard, CategoryTile
  pages/
    HomePage.jsx               Long landing page: hero, stats, directory, categories,
                                founder story, testimonials, newsletter
    AboutPage.jsx               Timeline, mission/vision, values, gallery
    PharmacyPage.jsx             Search bar, categories, products, feature grid
    SupermarketPage.jsx          Promo banner, categories, products
    MallPage.jsx                 Categories, products, new-arrivals CTA
    ServicePage.jsx              Service cards, booking process steps
    ContactPage.jsx              Info cards, map placeholder, contact form
```

## Navigation model

There's no router library wired in — `App.jsx` holds `page` in state and
swaps which page component renders. This keeps the whole thing dependency-free
and framework-agnostic for the demo. To wire real routes, swap the `page`
state + `setPage()` calls for `next/navigation` (Next.js App Router) or
`react-router-dom`, keeping the same page components.

## Brand tokens

All exact brand colors (`#C1121F`, `#F4A100`, `#FFD166`, `#1C1006`) live in
`src/lib/brand.js` as the `BRAND` object, and are applied via inline `style`
props rather than arbitrary Tailwind classes like `bg-[#C1121F]` — this keeps
the code portable across Tailwind setups with or without JIT/arbitrary-value
support enabled.

## Dependencies

- `react` (18+)
- `tailwindcss` (for utility classes — spacing, layout, typography, flex/grid)
- `lucide-react` (icons)
- Fonts: Manrope (headings) + Inter (body) — load via Google Fonts or self-host

## Known gaps / next steps

- No real images — hero/founder/gallery blocks use gradient placeholders
- No cart, checkout, or product data source (all product data is inline mock data)
- Sign In / Book Appointment forms are UI only — no submit handlers wired to a backend
- No routing library — see "Navigation model" above
- Map section is a placeholder — swap in Google Maps embed
