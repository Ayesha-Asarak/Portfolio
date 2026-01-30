# Portfolio Website - AI & ML Engineer

A modern, professional portfolio website showcasing skills and experience in AI, Machine Learning, and Data Engineering. All content is centralized in a single configuration file for easy customization.

## ⚡ Quick Customization

**All personal details are in one place**: `src/config.json`

Simply edit this file to update:
- Personal information
- Contact details
- Education history
- Work experience
- Projects
- Skills
- And everything else!

See [CONFIG_GUIDE.md](CONFIG_GUIDE.md) for detailed instructions.

## Design Features

- **Minimal & Professional**: Clean design with elegant serif fonts (Cormorant Garamond)
- **Color Palette**: 
  - Primary Dark: #161212
  - Primary Beige: #C6BEB5
  - Light Beige: #D5D2CB
  - Accent Brown: #9C8D7C
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle hover effects and transitions

## Tech Stack

- **React 18.3** - Latest React with Hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS Variables
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-ayi/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Education.jsx/css
│   │   └── Contact.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Sections

1. **Header** - Fixed navigation with smooth scroll
2. **Hero** - Eye-catching introduction section
3. **About** - Personal information and profile
4. **Experience** - Professional work experience
5. **Projects** - Portfolio of completed projects
6. **Skills** - Technical skills and competencies
7. **Education** - Academic background
8. **Contact** - Contact form and information

## Customization

### Update Content (Easy!)

Edit `src/config.json` to change all content:
- Name, title, contact info
- Education, experience, projects
- Skills, achievements, activities
- Everything!

See [CONFIG_GUIDE.md](CONFIG_GUIDE.md) for detailed guide.

### Change Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-dark: #161212;
  --primary-beige: #C6BEB5;
  --light-beige: #D5D2CB;
  --accent-brown: #9C8D7C;
}
```

See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for advanced customization.

## License

© 2026 Ayesha Asarak. All rights reserved.
# Portfolio
# Portfolio
