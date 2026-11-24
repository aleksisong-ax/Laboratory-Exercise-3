# CvSU Mini Store — Laboratory Exercise 3

A complete React product catalog demonstrating reusable components, props, callback communication, and a running cart message.

## Run locally

```bash
npm install
npm run dev
```

Run `npm run build` to create a production build.

## Features

- Eight products with `id`, `title`, `price`, `category`, and `inStock` fields.
- Reusable `ProductCard` destructures props, defaults category to `General`, formats PHP prices, renders optional `children`, and handles both availability states.
- Cards render from `.map()` with stable unique keys.
- The parent passes `onAddToCart`; cards call it with the product title. The parent updates count and last-added item.
- Responsive styling for the page and product grid.

## Guide questions

1. **Props vs. state:** Props are read-only inputs received from a parent. State is data managed by a component and can change over time.
2. **Why can't a child modify props?** Props are read-only so React's one-way data flow stays predictable. A child can request a parent update by calling a callback.
3. **How does `onAddToCart` communicate upward?** The parent passes a function down as a prop. The child calls it with the title, so the parent's function can update its own cart state.
4. **Why does a list need keys?** Keys help React match items between renders. Missing or duplicate keys can cause warnings and incorrect reuse or updates.
5. **What does `children` enable?** A parent can nest arbitrary content inside a component, such as a badge, without adding a separate component prop for every possible label.

## GitHub submission

The local repository has meaningful commits. To publish, create an empty GitHub repository, add it as `origin`, and push `main`:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the sample URL with your actual repository URL. No GitHub account or remote was connected here, so publication remains to be done by you.

## GitHub Pages hosting

The `main` branch includes a GitHub Actions workflow that builds this app with the correct repository path and deploys it to Pages. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The site URL will be `https://aleksisong-ax.github.io/Laboratory-Exercise-3/` after the first successful workflow run.

The store header uses the provided CvSU emblem, with a green-and-gold visual palette.

The hero section also features the supplied CvSU “Truth, Excellence, Service” banner.

Product image sources, creators, and licenses are listed in `src/assets/products/IMAGE-CREDITS.md`. The catalog retains the lab sample prices and formats them in Philippine pesos.
