# Customization Guide

This guide helps you personalize your portfolio with your own content and branding.

## Personal Information

### 1. Update Hero Section

**File:** `src/components/Hero.jsx`

```javascript
// Change your name
<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
  Hi, I'm <span className="...">Your Name</span>
</h1>

// Change your role
<p className="text-xl md:text-2xl text-gray-300 mb-6">
  Your Role | Your Speciality | Your Passion
</p>

// Change introduction
<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
  Your introduction text here
</p>
```

### 2. Update About Section

**File:** `src/components/About.jsx`

```javascript
// Replace profile image
<img
  src="your-image-url"
  alt="Profile"
  className="w-full h-full object-cover"
/>

// Update your bio
<p className="text-lg text-gray-300 leading-relaxed">
  Your bio text here...
</p>
```

**Tips for profile images:**
- Size: 300x300px (square)
- Format: JPG or PNG
- Quality: High resolution
- Host on: Imgur, Cloudinary, or GitHub

### 3. Update Projects

**File:** `src/components/Projects.jsx`

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What does this project do?",
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project-url.com",
    image: "https://image-url.com/project.png"
  },
  // Add more projects...
];
```

**Project image tips:**
- Size: 400x250px
- Format: JPG or PNG
- Show project preview/screenshot
- Host on: Same as profile images

### 4. Update Skills

**File:** `src/components/Skills.jsx`

```javascript
const skillCategories = [
  {
    category: "Your Category",
    skills: ["Skill1", "Skill2", "Skill3"]
  },
  // Add more categories...
];
```

### 5. Update Contact Information

**File:** `src/components/Contact.jsx`

```javascript
// Email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Phone
<a href="tel:+1234567890">
  +1 (234) 567-8900
</a>

// Social links
const socialLinks = [
  { 
    icon: Github, 
    url: "https://github.com/yourusername", 
    label: "GitHub" 
  },
  // ... update all links
];
```

---

## Styling Customization

### Color Scheme

**File:** `tailwind.config.js`

Default colors used:
- **Background**: Slate (900, 800, 950)
- **Accent**: Cyan & Blue gradients
- **Text**: White & Gray shades

**Change color theme:**

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#...',
        500: '#...',
        900: '#...',
      }
    }
  }
}
```

Then update component classes to use new colors.

### Gradients

**Current gradients:**
```javascript
// Blue to Cyan
from-blue-500 to-cyan-500

// Blue-400 to Cyan-400
from-blue-400 to-cyan-400
```

**Create custom gradients:**
```javascript
// In tailwind.config.js
theme: {
  extend: {
    backgroundImage: {
      'gradient-custom': 'linear-gradient(to right, #..., #...)',
    }
  }
}
```

### Animations

**Current animations:**
- `fade-in`: Fades in element
- `slide-up`: Slides element up with fade
- `bounce`: Built-in Tailwind animation

**Add custom animations:**

```javascript
// In tailwind.config.js
keyframes: {
  'custom-animation': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  }
}
```

---

## Component Customization

### Navbar

**File:** `src/components/Navbar.jsx`

```javascript
// Change logo text
<a href="#home" className="...">
  Your Logo Text
</a>

// Add/remove navigation links
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#your-section', label: 'Your Section' },
];
```

### Hero Section

```javascript
// Add more CTA buttons
<a href="#your-link" className="...">
  Your Button Text
</a>
```

### Footer

**File:** `src/components/Footer.jsx`

```javascript
// Update company/name
<h4 className="...">Your Name</h4>

// Update description
<p className="...">
  Your description here
</p>

// Add/remove quick links
<li><a href="#your-section">Your Link</a></li>
```

---

## Typography Customization

### Font Family

**Default:** System fonts (no custom fonts)

**Add custom font:**

1. **Using Google Fonts:**
```html
<!-- In index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

2. **Configure Tailwind:**
```javascript
// In tailwind.config.js
theme: {
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  }
}
```

### Font Sizes

Modify in components:
```javascript
className="text-2xl md:text-4xl" // Change sizes
```

---

## Layout Customization

### Container Width

Default: `max-w-6xl` (1152px)

Change in each component:
```javascript
<div className="max-w-full"> {/* Full width */}
<div className="max-w-4xl"> {/* Narrower */}
<div className="max-w-7xl"> {/* Wider */}
```

### Spacing

Use Tailwind spacing:
```javascript
className="py-20"  // Vertical padding
className="px-4"   // Horizontal padding
className="gap-8"  // Gap between items
```

---

## Adding New Sections

### 1. Create new component

**File:** `src/components/NewSection.jsx`

```javascript
export default function NewSection() {
  return (
    <section id="new-section" className="min-h-screen bg-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Section Title
        </h2>
        
        {/* Your content */}
      </div>
    </section>
  );
}
```

### 2. Import in App.jsx

```javascript
import NewSection from './components/NewSection'

export default function App() {
  return (
    <div className="bg-slate-900">
      {/* ... existing sections */}
      <NewSection />
      {/* ... more sections */}
    </div>
  );
}
```

### 3. Add to navbar

Edit `Navbar.jsx`:
```javascript
const navLinks = [
  // ... existing links
  { href: '#new-section', label: 'New Section' },
];
```

---

## SEO Customization

### Metadata

**File:** `index.html`

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="preview-image-url">
```

### Favicon

Replace `public/vite.svg` with your favicon:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

---

## Performance Optimization

### Image Optimization

1. **Compress images**
   - Use TinyPNG or ImageOptim
   - Target 50-100KB per image

2. **Use WebP format**
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

3. **Lazy loading**
   ```html
   <img src="..." loading="lazy" alt="...">
   ```

### Code Splitting

Components are automatically code-split by Vite. For additional optimization, use React lazy loading:

```javascript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

// In render:
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

---

## Form Integration

### Option 1: EmailJS (Free)

1. **Install:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Setup account:** https://www.emailjs.com

3. **Update Contact.jsx:**
   ```javascript
   import emailjs from '@emailjs/browser';

   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

   const handleSubmit = (e) => {
     e.preventDefault();
     
     emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
       formData
     ).then(() => {
       setSubmitted(true);
     });
   };
   ```

### Option 2: Formspree (Free tier)

1. **Visit:** https://formspree.io
2. **Create form** and get form ID
3. **Update form in Contact.jsx:**
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     
     fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(formData),
       headers: { 'Content-Type': 'application/json' }
     }).then(() => {
       setSubmitted(true);
     });
   };
   ```

---

## Troubleshooting Customization

### Styles not applying
- Clear browser cache
- Restart dev server: `npm run dev`
- Check class names match Tailwind syntax

### Images not showing
- Check image URLs are accessible
- Verify image format is supported
- Check browser console for errors

### Mobile menu not working
- Check component state management
- Verify event handlers
- Test on actual mobile device

---

## Common Customizations Checklist

- [ ] Update name and role in Hero
- [ ] Add profile image
- [ ] Update About section bio
- [ ] Add your projects
- [ ] Update tech stack
- [ ] Add contact information
- [ ] Update social links
- [ ] Customize colors
- [ ] Change font if desired
- [ ] Add meta tags for SEO
- [ ] Set up form integration
- [ ] Test on mobile devices
- [ ] Deploy to hosting

---

Need more help? Check component files for detailed comments!

**Happy customizing! 🎨**
