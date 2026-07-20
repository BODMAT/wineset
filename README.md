# Wineset

An e-commerce web app for a boutique wine store - browse and buy wine, spirits,
delicacies, glassware, candles and ready-made gift sets. Built as a single-page
React application with a Firebase backend.

Design based on this Figma layout: https://www.figma.com/file/ESg7icZQv5cdTJ9GGtu8cB/wineset

## Features

- **Product catalog** with nested categories - wine & alcohol (wine, champagne,
  whiskey, vodka), delicacies (cheese, cookies, sauces), glasses & candles, and
  gift sets.
- **Product pages** with characteristics, related recommendations and per-country
  photo galleries.
- **Search and filtering** across the catalog.
- **Cart and checkout** - add to cart, place an order with an advanced validated
  form (React Hook Form), order confirmation sent by email (EmailJS).
- **Authentication** via Firebase (Google sign-in and email/password).
- **Reviews** for authenticated users.
- **Wishlist** for saving favourite products.
- **Delivery page** with an interactive map (Leaflet) of pickup locations.
- **Articles / blog** and a "Sommelier" advice section.
- **Installable PWA** - offline app shell, home-screen install, standalone display.
- Responsive layout with animated UI.

## Tech stack

| Area      | Tools                                                           |
| --------- | --------------------------------------------------------------- |
| Framework | React 18, TypeScript, Vite 6                                    |
| Routing   | React Router 7                                                  |
| State     | Zustand (client state), TanStack Query (server state & caching) |
| Backend   | Firebase - Firestore (data), Authentication                     |
| Forms     | React Hook Form                                                 |
| Styling   | Tailwind CSS 4, SCSS modules                                    |
| UI / UX   | Framer Motion, Swiper, React Select, Leaflet                    |
| Email     | EmailJS                                                         |
| PWA       | vite-plugin-pwa (Workbox)                                       |

## Getting started

### Prerequisites
- Node.js 20+

### Install
```bash
npm install
```

### Environment variables
Create a `.env` file in the project root (see the variables below). Values come
from your own Firebase and EmailJS projects:

```dotenv
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=

VITE_EMAILJS_USER_ID=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_TEMPLATE_ORDER_ID=
```

> Note: `VITE_*` variables are inlined into the client bundle at build time and
> are therefore public by design. Access to Firebase is secured by Firestore
> Security Rules and by HTTP-referrer restrictions on the API key - not by
> keeping the key secret.

### Run
```bash
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  components/     UI and page components (organised by page/feature)
  store/          Zustand stores (cart, wishlist, bonus, ...)
  api/            data-access helpers
  architecture/   domain models / product classes
  data/           product data
  types/          shared TypeScript types
  utils/          helpers
  mixins.scss     shared SCSS mixins
public/           static assets and PWA icons
```

## Deployment

The app is a static SPA. Production builds are generated with `npm run build`
into `dist/` and served from a static host with an SPA fallback so client-side
routes resolve correctly.
