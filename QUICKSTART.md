# Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)
- Git (optional, for version control)
- A code editor (VS Code recommended)

## Installation (5 minutes)

### 1. Navigate to Project Directory
```bash
cd portfolio-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
- The CLI will show you the local URL (usually `http://localhost:5173`)
- Click the link or copy-paste it into your browser
- You'll see your portfolio website!

## First Customization (10 minutes)

### Add Your Name
1. Open `src/components/Hero.jsx`
2. Find: `Hi, I'm <span className="...">Your Name</span>`
3. Replace `Your Name` with your actual name
4. Save the file - **Changes appear instantly!**

### Update Your Role
1. In `Hero.jsx`, find the role text
2. Change it to your actual role/title
3. Save - updates appear in browser automatically

### Add Your Profile Photo
1. Find a good headshot photo (square, 300x300px works great)
2. Upload it to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com) (free)
3. Copy the image URL
4. Open `src/components/About.jsx`
5. Find: `src="https://via.placeholder.com/300x300?text=Profile+Photo"`
6. Replace with your image URL
7. Save!

## Add Your Projects (15 minutes)

1. Open `src/components/Projects.jsx`
2. Find the `projects` array
3. Update each project object:
   ```javascript
   {
     title: "Your Project Name",
     description: "What it does",
     tech: ["React", "Node", "MongoDB"],
     github: "https://github.com/yourname/project",
     live: "https://project-url.com"
   }
   ```
4. Save and see updates instantly

## Update Your Skills (5 minutes)

1. Open `src/components/Skills.jsx`
2. Find `skillCategories` array
3. Update skills in each category
4. Save!

## Update Contact Info (5 minutes)

1. Open `src/components/Contact.jsx`
2. Find your email address:
   ```javascript
   <a href="mailto:your.email@example.com">
   ```
3. Replace with your actual email
4. Find your phone number and update
5. Update social media links (GitHub, LinkedIn, Twitter)
6. Save!

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Before Deployment

**Checklist:**
- [ ] All text updated with your info
- [ ] Profile image added
- [ ] Projects added/updated
- [ ] Contact info correct
- [ ] Links working (click them!)
- [ ] Mobile view looks good
- [ ] No console errors (F12 > Console tab)
- [ ] Tested on phone/tablet

---

## Deploy in 5 Minutes

### Option A: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. **Done!** Your site is live

### Option B: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repo
5. Click "Deploy"
6. **Done!**

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## File Structure Quick Reference

```
src/
├── components/
│   ├── Navbar.jsx         ← Navigation bar
│   ├── Hero.jsx           ← Your name & intro (EDIT FIRST)
│   ├── About.jsx          ← About me section
│   ├── Projects.jsx       ← Your projects (EDIT THIS)
│   ├── Skills.jsx         ← Your skills (EDIT THIS)
│   ├── Contact.jsx        ← Contact form (EDIT THIS)
│   └── Footer.jsx         ← Footer
├── App.jsx                ← Main file
├── main.jsx               ← Entry point
└── index.css              ← Styles
```

---

## Common Questions

### Q: Where do I change colors?
**A:** Edit `tailwind.config.js` or change class names in components. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

### Q: How do I add more sections?
**A:** Create new file in `src/components/`, import in `App.jsx`. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

### Q: Will it work on mobile?
**A:** Yes! It's fully responsive. Test by resizing your browser or opening on your phone.

### Q: Can I use my own domain?
**A:** Yes! Vercel and Netlify let you add custom domains. See [DEPLOYMENT.md](DEPLOYMENT.md).

### Q: How do I set up the contact form?
**A:** Form currently just shows a success message. To send emails, integrate EmailJS or Formspree. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## Keyboard Shortcuts

- **Ctrl+S** - Save changes
- **Ctrl+Shift+Delete** - Clear browser cache
- **F12** - Open Developer Tools
- **Ctrl+F5** - Hard refresh (clear cache + reload)

---

## Next Steps

1. ✅ Customize hero section
2. ✅ Add profile photo
3. ✅ Add your projects
4. ✅ Update skills
5. ✅ Fix contact info
6. ✅ Test on mobile
7. ✅ Deploy!

---

## Need More Help?

- **Customization**: Read [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment**: Read [DEPLOYMENT.md](DEPLOYMENT.md)
- **Full README**: Read [README.md](README.md)
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/learn
- **Vite**: https://vitejs.dev/guide/

---

**You've got this! 🚀**

Your portfolio website is ready to showcase your skills!
