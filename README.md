# FNXLabs Landing Page

A modern landing page for FNXLabs built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Next.js app router** with TypeScript
- **Tailwind CSS v3** for flexible styling customization
- **Smooth transitions** powered by Framer Motion
- **Built-in font optimization** with next/font
- **Automatic image optimization** via next/image
- **Lucide icons** for beautiful iconography
- **Modular, responsive** component architecture
- **Dark mode support** with system preference detection

## Sections

- ✅ Hero
- ✅ Partners/Clients Logos
- ✅ Features
- ✅ Pricing
- ✅ Testimonials
- ✅ FAQ
- ✅ Statistics
- ✅ CTA with Contact Form
- ✅ Footer

## Getting Started

### Prerequisites

Before starting, make sure you have the following installed:

- **Node.js**: Version 18 or later
- **npm**: Version 8 or later (bundled with Node.js)
- **Code editor**: VS Code is recommended

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fnx-landing.git
   cd fnx-landing
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. View your project:
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- **Edit colors**: Update `app/globals.css` for primary, secondary, background, and accent colors.
- **Update site details**: Customize `data/siteDetails.ts` to reflect your brand and site info.
- **Modify content**: Files in the `data/` directory handle data for navigation, features, pricing, testimonials, and more.
- **Replace favicon**: Add your icon to `/favicon.ico`.
- **Add images**: Update `public/images/` for testimonial avatars, partner logos, etc.

## Build for Production

```
npm run build
```

To start the production server:

```
npm run start
```

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
