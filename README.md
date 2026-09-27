# Dastonbek Yakubov - Personal Portfolio & Blog

Personal portfolio and blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Tech Stack

- **Framework:** Astro 4
- **Styling:** Tailwind CSS with Typography plugin
- **Fonts:** Inter & Lora (@fontsource)
- **Deployment:** Vercel / Netlify / VPS
- **Type Safety:** TypeScript

## 📁 Project Structure

```text
├── public/              # Static assets (favicons)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog articles in Markdown
│   │   ├── projects/    # Project showcases
│   │   └── work/        # Work experience entries
│   ├── layouts/         # Base page layouts
│   ├── lib/             # Helper utilities
│   ├── pages/           # Site routing
│   ├── styles/          # Global styles
│   └── consts.ts        # Site metadata and configuration
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

MIT