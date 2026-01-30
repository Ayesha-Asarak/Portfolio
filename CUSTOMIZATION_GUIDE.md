# Customization Guide

This guide will help you customize the portfolio to make it truly unique.

## 🎨 Changing Colors

### Method 1: Update CSS Variables (Recommended)

Edit `src/index.css`:

```css
:root {
  /* Current colors */
  --primary-dark: #161212;
  --primary-beige: #C6BEB5;
  --light-beige: #D5D2CB;
  --accent-brown: #9C8D7C;
  
  /* Example: Blue theme */
  --primary-dark: #1a1f3a;
  --primary-beige: #a8b5d1;
  --light-beige: #d4dbe8;
  --accent-brown: #5b6d8f;
}
```

### Method 2: Global Find & Replace

If you prefer hardcoded colors:
1. Open search in your editor (Ctrl+Shift+F)
2. Find: `#161212` Replace with your color
3. Repeat for each color

## 🖼️ Adding Images

### Profile Photo in Hero Section

1. Add your photo to `public/images/profile.jpg`
2. Edit `src/components/Hero.jsx`:

```jsx
<div className="image-placeholder">
  <img src="/images/profile.jpg" alt="Ayesha Asarak" />
</div>
```

3. Update CSS in `Hero.css`:

```css
.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Project Images

Add images for each project:

```jsx
// In Projects.jsx
const projects = [
  {
    number: '1',
    title: 'Project Name',
    image: '/images/project-1.jpg', // Add this
    // ... rest of data
  }
]

// In JSX
<div className="project-image">
  <img src={project.image} alt={project.title} />
</div>
```

### Experience Company Logo

Similar approach for experience section.

## ✍️ Changing Fonts

### Option 1: Use Different Google Fonts

1. Edit `index.html`:

```html
<!-- Replace with your chosen fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

2. Update `src/index.css`:

```css
:root {
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
}
```

### Option 2: Use System Fonts

```css
:root {
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## 📝 Updating Content

### Personal Information

Edit `src/components/About.jsx`:

```jsx
<h3 className="name">YOUR NAME</h3>
<p className="role">Your Job Title</p>

<div className="contact-info">
  <a href="mailto:your@email.com" className="contact-item">
    <span>✉</span> your@email.com
  </a>
  {/* Update other contact info */}
</div>
```

### Experience Section

Edit `src/components/Experience.jsx`:

```jsx
const experience = {
  company: 'Your Company',
  period: 'Start Date - End Date',
  role: 'Your Role',
  achievements: [
    'First achievement',
    'Second achievement',
    'Third achievement'
  ]
}
```

### Projects

Edit `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    number: '1',
    title: 'Your Project Name',
    subtitle: 'Project Type',
    tech: 'Tech1, Tech2, Tech3',
    description: 'Project description...',
    contributions: [
      'What you did',
      'Another contribution'
    ],
    link: 'https://github.com/you/project'
  },
  // Add more projects
]
```

### Skills

Edit `src/components/Skills.jsx`:

```jsx
const skillCategories = [
  {
    category: 'Your Category',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  // Add more categories
]
```

### Education

Edit `src/components/Education.jsx`:

```jsx
const education = [
  {
    institution: 'Your University',
    location: 'City, Country',
    period: 'Start - End',
    degree: 'Your Degree',
    gpa: 'Your GPA'
  }
]
```

## 🎯 Adding New Sections

### Step-by-Step Guide

1. **Create Component Files**

```bash
# In src/components/
# Create MySection.jsx and MySection.css
```

2. **Write Component**

```jsx
// MySection.jsx
import './MySection.css'

const MySection = () => {
  return (
    <section id="mysection" className="mysection">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Section</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="mysection-content">
          {/* Your content here */}
        </div>
      </div>
    </section>
  )
}

export default MySection
```

3. **Add Styles**

```css
/* MySection.css */
.mysection {
  background-color: #ffffff;
}

.mysection-content {
  /* Your styles */
}
```

4. **Import in App**

```jsx
// App.jsx
import MySection from './components/MySection'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* ... other sections */}
      <MySection />
      <Contact />
    </div>
  )
}
```

5. **Add to Navigation**

```jsx
// Header.jsx
const navLinks = [
  // ... existing links
  { name: 'My Section', href: '#mysection' },
]
```

## 🔗 Updating Social Links

### In Header and Contact Components

```jsx
// Update actual URLs
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
  GitHub
</a>

<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

## 📧 Contact Form Integration

### Option 1: EmailJS (Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)

2. Install package:
```bash
npm install @emailjs/browser
```

3. Update `Contact.jsx`:

```jsx
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    .then(() => {
      alert('Message sent successfully!')
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.')
    })
}

<form className="contact-form" onSubmit={handleSubmit}>
  {/* form fields */}
</form>
```

### Option 2: Formspree (Free)

1. Sign up at [Formspree](https://formspree.io/)

2. Update form action:

```jsx
<form 
  className="contact-form" 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">SEND MESSAGE</button>
</form>
```

### Option 3: Custom Backend

Create your own API endpoint and call it from the form.

## 🎨 Styling Customization

### Change Section Backgrounds

```css
/* Alternate section backgrounds */
.hero {
  background: linear-gradient(135deg, #yourcolor 0%, #yourcolor2 100%);
}

.about {
  background-color: #yourcolor;
}

.experience {
  background-color: #yourcolor;
}
```

### Adjust Spacing

```css
/* In index.css */
section {
  padding: 6rem 0; /* Increase spacing */
}

.container {
  max-width: 1400px; /* Wider layout */
}
```

### Change Button Styles

```css
/* Make buttons rounded */
.cta-button,
.submit-button {
  border-radius: 30px;
}

/* Change button colors */
.cta-button {
  background-color: #your-color;
}

.cta-button:hover {
  background-color: #your-hover-color;
}
```

### Modify Card Shadows

```css
/* Stronger shadows */
.experience-card,
.project-card,
.skill-category {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}
```

## 📱 Mobile Customization

### Adjust Mobile Breakpoints

```css
/* Change breakpoint */
@media (max-width: 900px) { /* was 968px */
  /* Your mobile styles */
}
```

### Mobile-Specific Styles

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem; /* Smaller on mobile */
  }
  
  .project-card {
    padding: 1.5rem; /* Less padding */
  }
}
```

## 🎭 Animation Customization

### Add Scroll Animations

1. Install AOS:
```bash
npm install aos
```

2. Import in `main.jsx`:
```jsx
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true
})
```

3. Add to components:
```jsx
<div data-aos="fade-up">
  {/* Your content */}
</div>
```

### Change Transition Speeds

```css
/* Faster transitions */
.nav-links a,
.cta-button,
.skill-tag {
  transition: all 0.2s ease; /* was 0.3s */
}

/* Slower transitions */
.project-card {
  transition: all 0.5s ease; /* was 0.3s */
}
```

## 🔧 Advanced Customizations

### Add Dark Mode Toggle

1. Create context:
```jsx
// ThemeContext.jsx
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

2. Use in components with CSS variables

### Internationalization (i18n)

1. Install react-i18next
2. Create language files
3. Wrap content with translation functions

### Add Blog Section

1. Create Blog component
2. Fetch posts from CMS or API
3. Add routing with react-router-dom

## 💡 Tips & Best Practices

1. **Test Responsiveness**: Check on real devices
2. **Performance**: Optimize images before adding
3. **Accessibility**: Add proper alt texts and ARIA labels
4. **SEO**: Update meta tags in `index.html`
5. **Version Control**: Commit changes regularly
6. **Browser Testing**: Test on Chrome, Firefox, Safari, Edge
7. **Validation**: Test form submissions
8. **Load Time**: Keep bundle size under 300KB

## 🐛 Common Issues

### Images Not Loading
- Check file path (use `/images/file.jpg` not `./images/file.jpg`)
- Ensure images are in `public` folder
- Clear browser cache

### Styles Not Updating
- Hard refresh (Ctrl+Shift+R)
- Check CSS syntax
- Verify CSS file is imported

### Build Errors
- Run `npm install` again
- Clear `node_modules` and reinstall
- Check for syntax errors in JSX

---

Happy customizing! If you need help, refer to:
- `README.md` for general info
- `QUICKSTART.md` for quick setup
- `DEPLOYMENT.md` for hosting
- `PROJECT_OVERVIEW.md` for architecture
