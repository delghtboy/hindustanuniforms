# Hindustan Uniforms - Premium Coming Soon Landing Page

A classy, premium landing page for a school dress shop featuring modern design, soft color accents, and clean layouts.

## ✨ Features

- **Premium Design**: Clean, modern layout with soft color palette and elegant typography
- **Responsive Design**: Looks perfect on desktop, tablet, and mobile devices  
- **Premium Fonts**: Uses Raleway and Didot fonts for a sophisticated look
- **Interactive Elements**: Smooth scrolling, form validation, and engaging animations
- **Professional Sections**:
  - Hero section with high-quality uniform image
  - Features showcase (spacious fitting rooms, wide variety of sizes, secure payments, easy returns)
  - Shop location with embedded map
  - Contact information with prominent phone number
  - Email signup form for notifications
  - Social media links
- **Accessibility**: Keyboard navigation, focus states, and screen reader support
- **Performance**: Optimized loading with modern web standards

## 🎨 Design Highlights

- **Color Scheme**: Soft blues, purples, greens, and professional grays
- **Typography**: Raleway for headings and body text, Didot for elegant titles
- **Shadows**: Subtle, tasteful shadows throughout
- **Animations**: Smooth fade-in effects and hover states
- **White Space**: Ample spacing for a clean, upscale appearance

## 📁 Project Structure

```
school-dress-shop/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # Interactive JavaScript
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to update your business information
3. **Style adjustments**: Modify `styles.css` for color or layout changes
4. **Add functionality**: Extend `script.js` for additional features

## ✏️ Customization Guide

### Update Business Information

**Company Name & Branding:**
```html
<!-- In index.html, update these elements -->
<h2>Your School Uniform Shop Name</h2>
<h1 class="hero-title">Your Store Name</h1>
```

**Contact Information:**
```html
<!-- Phone Number -->
<a href="tel:+1-YOUR-NUMBER" class="phone-number">+1 (XXX) XXX-XXXX</a>

<!-- Email Address -->
<a href="mailto:your-email@domain.com">your-email@domain.com</a>

<!-- Address -->
<p>Your Street Address<br>
City, State ZIP Code</p>
```

**Location Map:**
Replace the Google Maps embed URL with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

### Update Images

**Hero Section Image:**
Replace the Unsplash URL with your professional uniform photos:
```html
<img src="path-to-your-uniform-image.jpg" alt="Your School Uniforms" />
```

### Color Customization

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-primary-color;
    --secondary-color: #your-secondary-color;
    --accent-color: #your-accent-color;
    /* ... other colors ... */
}
```

### Social Media Links

Update the social media links in the HTML:
```html
<a href="https://facebook.com/yourpage" class="social-link facebook">
<a href="https://instagram.com/yourhandle" class="social-link instagram">
<!-- etc. -->
```

## 📱 Mobile Responsiveness

The website includes comprehensive responsive design:

- **Desktop**: Full two-column layouts with spacious design
- **Tablet**: Adapted layouts with appropriate spacing
- **Mobile**: Single-column layout optimized for touch interaction

## 🔧 Technical Features

### Email Form Validation
- Real-time email validation
- Success/error message display
- Loading states for better UX

### Smooth Scrolling Navigation
- Animated scrolling between sections
- Fixed navigation with scroll effects

### Performance Optimizations
- Optimized CSS with CSS custom properties
- Efficient JavaScript with modern APIs
- Reduced motion support for accessibility

## 🌐 Deployment Options

### Option 1: Simple File Hosting
Upload the files to any web hosting service:
- Upload `index.html`, `styles.css`, and `script.js`
- Ensure all files are in the same directory
- Your site will be live at your domain

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

### Option 3: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder
3. Get an instant live URL

### Option 4: Professional Hosting
Upload to your preferred hosting provider (GoDaddy, Bluehost, etc.)

## 📈 Analytics & Tracking

The JavaScript includes placeholder code for Google Analytics:
```javascript
// Add your Google Analytics tracking ID
gtag('config', 'GA_TRACKING_ID');
```

## 🔒 Email Collection

The form currently simulates email submission. To collect real emails:

1. **Use a form service**: Formspree, Netlify Forms, or similar
2. **Add backend processing**: PHP, Node.js, or serverless functions
3. **Integrate with email marketing**: Mailchimp, ConvertKit, etc.

Example Formspree integration:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 🛠️ Additional Customizations

### Add More Sections
- Customer testimonials
- Uniform gallery
- School partnerships
- Size guides

### Enhance Functionality
- Online appointment booking
- Live chat widget
- Multi-language support
- Dark mode toggle

### SEO Optimization
- Add meta descriptions
- Include structured data
- Optimize images with alt text
- Add sitemap.xml

## 🎯 Best Practices Included

- **Semantic HTML**: Proper heading structure and ARIA labels
- **Modern CSS**: Flexbox, Grid, and custom properties
- **Progressive Enhancement**: Works without JavaScript
- **Performance**: Optimized fonts and images
- **Security**: No external dependencies for core functionality

## 📞 Support

For questions or customization help, you can:
- Review the code comments for guidance
- Refer to this README for common changes
- Test thoroughly on different devices and browsers

## 🔄 Future Enhancements

Consider adding:
- Online catalog preview
- Appointment scheduling
- Size recommendation tool
- Virtual fitting room
- Customer portal
- Inventory notifications

---

**Built with modern web standards for a professional, premium experience. Perfect for Hindustan Uniforms - India's trusted name in premium school uniforms.**
