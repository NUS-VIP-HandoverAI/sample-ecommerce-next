# Northstar Commerce

A full-stack Next.js ecommerce starter built in the App Router with:

- Product listing and detail pages
- Client-side cart with local storage persistence
- Checkout flow that posts to a Next.js API route
- Local JSON-backed order persistence for demos
- Orders dashboard for reviewing submitted orders

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## API routes

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/orders`
- `POST /api/orders`
