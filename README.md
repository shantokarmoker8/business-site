# Nexora — Business Site

A modern, responsive business website built with React, Tailwind CSS v4, React Router, and React Icons.

## Tech Stack

- **React** v18
- **Tailwind CSS** v4 (Vite plugin)
- **React Router DOM** v6
- **React Icons** v5
- **Vite** v5

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/business-site.git
cd business-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
business-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Pages

| Page     | Route       | Description                              |
| -------- | ----------- | ---------------------------------------- |
| Home     | `/`         | Hero, stats, features, testimonials, CTA |
| About    | `/about`    | Story, values, team                      |
| Services | `/services` | Service cards with pricing               |
| Contact  | `/contact`  | Contact form + info                      |

## License

MIT © 2025 Nexora
