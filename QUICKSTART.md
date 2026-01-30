# Quick Start Guide

Get Ayesha's portfolio up and running in 3 simple steps!

## 🚀 Quick Setup

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages (React, Vite, React Icons, etc.)

### Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Step 3: Make It Your Own

Open the project in your favorite code editor and start customizing!

## 📁 Project Structure

```
portfolio-ayi/
├── src/
│   ├── components/          # All React components
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Skills.jsx      # Technical skills
│   │   ├── Education.jsx   # Education history
│   │   └── Contact.jsx     # Contact form
│   ├── App.jsx             # Main app component
│   └── index.css           # Global styles
├── index.html              # HTML template
└── package.json            # Dependencies
```

## 🎨 Customization

### Change Colors

Edit `src/index.css`:

```css
:root {
  --primary-dark: #161212;    /* Dark background */
  --primary-beige: #C6BEB5;   /* Primary beige */
  --light-beige: #D5D2CB;     /* Light beige */
  --accent-brown: #9C8D7C;    /* Accent color */
}
```

### Update Content

1. **Personal Info**: Edit `src/components/About.jsx`
2. **Experience**: Edit `src/components/Experience.jsx`
3. **Projects**: Edit `src/components/Projects.jsx`
4. **Skills**: Edit `src/components/Skills.jsx`
5. **Education**: Edit `src/components/Education.jsx`

### Change Fonts

Edit `index.html` Google Fonts link or update CSS:

```css
:root {
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Montserrat', sans-serif;
}
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🐛 Troubleshooting

### Port 5173 already in use?

```bash
# Kill the process and restart
npm run dev -- --port 3000
```

### Dependencies not installing?

```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules
npm install
```

### Page not updating?

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

## 💡 Tips

1. **Development**: Always run `npm run dev` for live reloading
2. **Testing**: Test on multiple screen sizes using browser DevTools
3. **Images**: Add profile/project images to `/public` folder
4. **Performance**: Keep bundle size small by not importing unnecessary packages

## 🎯 Next Steps

1. [ ] Add your profile photo to Hero section
2. [ ] Update project images
3. [ ] Connect GitHub/LinkedIn links
4. [ ] Implement contact form backend
5. [ ] Add Google Analytics
6. [ ] Deploy to hosting platform

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment guides
- Review component files for inline comments

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Firebase
- Custom server

Happy coding! 🎉
