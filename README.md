# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, Vite, and Tailwind CSS. Features smooth scrolling navigation, animated sections, project showcase, skills display, and a contact form.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds and animations
- Smooth scrolling between sections
- Responsive layout that works on all devices
- Professional color scheme (Slate & Cyan gradient)

📱 **Fully Responsive**
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for phones, tablets, and desktops
- Touch-friendly interface

🎨 **Interactive Components**
- Animated hero section with CTA buttons
- Project cards with hover effects
- Smooth navigation bar with active links
- Contact form with validation
- Social media links

⚡ **Performance**
- Built with Vite for fast builds and development
- Optimized bundle size
- Fast page load times
- Smooth animations

♿ **Accessibility**
- Semantic HTML
- ARIA labels for icons and buttons
- Keyboard navigation support
- Focus states for better accessibility

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with mobile menu
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── About.jsx         # About me section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Skills.jsx        # Skills display
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── assets/               # Images and static files
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind CSS imports
├── public/
│   └── index.html            # HTML entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies

```

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **CSS Processing**: PostCSS & Autoprefixer

## Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The page will automatically reload when you make changes

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if ESLint is configured)
npm run lint
```

## Customization

### Update Your Information

Edit the following components to add your personal information:

**Hero Section** (`src/components/Hero.jsx`)
- Update your name and role
- Modify the introduction text
- Change CTA button text and links

**About Section** (`src/components/About.jsx`)
- Replace profile image URL
- Update your bio and background
- Modify your story

**Projects Section** (`src/components/Projects.jsx`)
- Add/remove project cards
- Update project details (title, description, tech stack)
- Add your GitHub and live project links

**Skills Section** (`src/components/Skills.jsx`)
- Update skill categories
- Add/remove skills
- Reorganize by preference

**Contact Section** (`src/components/Contact.jsx`)
- Update contact email and phone
- Add your social media links
- Customize the contact form

### Color Customization

Modify colors in `tailwind.config.js`:
```javascript
theme: {
  colors: {
    // Add custom colors here
  }
}
```

Current color scheme:
- Primary: Slate (900-950)
- Accent: Cyan/Blue gradients
- Background: Dark theme with gradient overlays

### Animations

Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in',
  'slide-up': 'slideUp 0.6s ease-out',
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite and configure build settings
   - Click Deploy

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npm run build
   npx netlify-cli deploy --prod --dir=dist
   ```

   Or via web UI:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Custom Domain**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain
   - Update DNS records

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default {
     base: '/repository-name/',
     // ... rest of config
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist
   git commit -m "Build for deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/dist` folder

## Contact Form

The contact form is frontend-only. To make it fully functional, you have several options:

### Option 1: Formspree
```bash
npm install formspree
```
Update the form action to use Formspree.

### Option 2: EmailJS
```bash
npm install @emailjs/browser
```
Set up EmailJS service and add keys to environment variables.

### Option 3: Backend Service
Connect to your backend API to handle form submissions.

See `src/components/Contact.jsx` for implementation details.

## Performance Optimization

- Lazy loading components (can be added)
- Image optimization with proper formats
- Code splitting with route-based lazy loading
- Minified CSS with Tailwind purging
- Optimized bundle with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Tailwind styles not applying
- Ensure `index.css` is imported in `main.jsx`
- Run `npm run dev` to rebuild
- Clear browser cache

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Best Practices Implemented

✅ Mobile-first responsive design
✅ Semantic HTML structure
✅ Accessibility considerations (ARIA labels, focus states)
✅ Component-based architecture
✅ Reusable components
✅ Clean, organized file structure
✅ CSS best practices with Tailwind
✅ Performance optimization
✅ SEO-friendly structure
✅ Easy customization

## License

This project is open source and available for personal and commercial use.

## Support

For issues, suggestions, or questions:
1. Check existing documentation
2. Review component files for customization options
3. Check GitHub issues/discussions

## Future Enhancements

Potential features to add:
- Dark/Light theme toggle
- Blog section
- Case studies
- Testimonials carousel
- Newsletter signup
- Analytics integration
- Multi-language support
- CMS integration

---

**Happy coding! 🚀**

Made with ❤️ for developers
