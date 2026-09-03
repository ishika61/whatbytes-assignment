
# ShopEase — Whatbytes Frontend Assignment

A responsive e-commerce product listing app built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo

🔗 [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

## Features

### Home Page (`/`)
- Header with logo, search bar, cart icon with live badge count, and profile avatar
- Sidebar filters: category (All / Electronics / Clothing / Home) and price range slider
- Responsive product grid — 3 columns on desktop, 2 on tablet, 1 on mobile
- Product cards with image, title, price, star rating, and Add to Cart button
- Footer with copyright and social media links

### Product Detail Page (`/product/[id]`)
- Dynamic routing per product
- Large product image, title, price, description, category
- Quantity selector
- Add to Cart button
- Reviews section

### Cart Page (`/cart`) — Bonus
- List of added products with images
- Quantity update controls (increment/decrement)
- Remove item option
- Price summary with total and Checkout button
- Empty cart state with "Continue Shopping" link

### Logic
- Category and price range filtering
- Search filtering with case-insensitive string matching
- URL-based filters (e.g. `?category=Electronics&maxPrice=200&q=phone`)
- Cart state managed via React Context API
- Cart persisted in `localStorage`
- Conditional rendering — "No products found" empty state
- Fully responsive across breakpoints

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/whatbytes-assignment.git
cd whatbytes-assignment
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

## Project Structure

```
app/
├── layout.tsx                 # Root layout with Header, Footer & CartProvider
├── page.tsx                   # Home page / Product Listing
├── product/
│   └── [id]/
│       └── page.tsx           # Product Detail Page
└── cart/
    └── page.tsx               # Cart Page

components/
├── Header.tsx                 # Header with search & cart
├── Footer.tsx                 # Footer with social links
├── Sidebar.tsx                # Category & price filters
├── ProductCard.tsx            # Product card
├── FeaturedProductCard.tsx    # Featured product card
├── ProductGrid.tsx            # Product grid
├── StarRating.tsx             # Product rating
├── HomeContent.tsx            # Home page content
└── ProductDetailClient.tsx    # Product detail interactions

context/
└── CartContext.tsx            # Cart state & localStorage persistence

data/
└── products.ts                # Product dataset

lib/
└── types.ts                   # Shared TypeScript types

## Build for Production

```bash
npm run build
npm run start
```

## Author

Built as part of the Whatbytes Frontend Assignment.
