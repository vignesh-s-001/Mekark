# Mekark — Infrastructure & Manufacturing Web Platform

Mekark is a high-performance, responsive marketing website built to showcase enterprise-grade infrastructure and manufacturing capabilities. Developed with a focus on pixel-perfect Figma translation, the platform features a premium dark UI aesthetic, smooth scroll-triggered animations, and a modular architecture.

## Project Overview

This project was built from the ground up using a modern tech stack to ensure fast load times, excellent SEO, and flawless rendering across all device sizes (from large desktop monitors down to 320px mobile screens). 

### Key Features
- **Responsive Design**: Fluid typography (`clamp()`), CSS Grid layouts, and comprehensive media queries ensure the site looks perfect on any device.
- **Dark Theme Aesthetics**: Utilizes a deep dark color palette (`var(--black)`, `#0a0a0a`) with vibrant red accents (`var(--red)`) to convey an industrial, premium feel.
- **Scroll Animations**: Implements `IntersectionObserver` to trigger subtle fade-in and slide-up animations as components enter the viewport.
- **Modular CSS**: Styling is scoped locally to components using CSS Modules, preventing global style conflicts and maintaining clean code.
- **Pixel-Perfect**: Carefully crafted to match the original Figma designs, including intricate overlapping layouts and split-screen columns.

### Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: React
- **Styling**: Vanilla CSS Modules
- **Language**: TypeScript

---

## How to Run the Project Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (v18.0.0 or higher is recommended).

### 1. Install Dependencies
Open your terminal in the project's root directory (`mekark-app`) and run:
```bash
npm install
```

### 2. Start the Development Server
Once the dependencies are installed, start the local development server:
```bash
npm run dev
```

### 3. View the Site
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

The page will automatically reload if you make any edits to the code.

---

## Project Structure

- `/app`: Contains the main Next.js layout, page, and global styles.
- `/app/components`: Contains all modular sections of the website (e.g., `Hero`, `Services`, `About`, `Testimonials`, etc.). Each component has its own `.tsx` file and `.module.css` file.
- `/public/assets`: Stores all static assets like images, icons, and logos used throughout the site.

## Build for Production

When you are ready to deploy the site to production, generate an optimized build by running:

```bash
npm run build
```

Then, to test the production build locally, run:

```bash
npm run start
```
