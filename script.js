// Modern Vibrant Hindustan Uniforms - Interactive Elements

// DOM Elements
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const notifyForm = document.getElementById('notifyForm');
const emailInput = document.getElementById('email');

// Initialize particle system for hero
let particles = [];

// Particle class for floating animations
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = Math.random() * 100 + 50;
        this.decay = Math.random() * 0.05 + 0.005;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life / 100;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(44, 62, 80, 0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Form Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Success Message Display
function showSuccessMessage() {
    const formGroup = document.querySelector('.form-group');
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Thank you! We'll notify you when we open.</span>
    `;
    successMsg.style.cssText = `
        background: linear-gradient(135deg, #58d68d, #52c41a);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        box-shadow: 0 4px 20px rgba(88, 214, 141, 0.3);
        animation: slideInUp 0.5s ease-out forwards;
    `;
    
    formGroup.parentNode.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transform = 'translateY(-20px)';
        setTimeout(() => successMsg.remove(), 300);
    }, 3000);
}

// Error Message Display
function showErrorMessage(message) {
    const formGroup = document.querySelector('.form-group');
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
    `;
    errorMsg.style.cssText = `
        background: linear-gradient(135deg, #e74c3c, #ec7063);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.9rem;
        animation: shake 0.5s ease-in-out;
    `;
    
    formGroup.appendChild(errorMsg);
    
    setTimeout(() => {
        errorMsg.style.opacity = '0';
        setTimeout(() => errorMsg.remove(), 300);
    }, 4000);
}

// Email Form Handler
function handleEmailSubmit(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Remove existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    if (!email) {
        showErrorMessage('Please enter your email address');
        emailInput.focus();
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    // Simulate form submission
    const submitButton = notifyForm.querySelector('button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        emailInput.value = '';
        showSuccessMessage();
        
        // Optional: Track email signup (replace with your analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_signup', {
                'event_category': 'engagement',
                'event_label': 'coming_soon_page'
            });
        }
    }, 1500);
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .address-card, .contact-card, .signup-form, .social-content'
    );
    
    animateElements.forEach(el => observer.observe(el));
}

// Navigation Link Handlers
function initNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Phone Number Click Tracking
function initPhoneTracking() {
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) {
        phoneLink.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', {
                    'event_category': 'contact',
                    'event_label': 'phone_number'
                });
            }
        });
    }
}

// Social Media Link Tracking
function initSocialTracking() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = link.classList[1]; // facebook, instagram, etc.
            if (typeof gtag !== 'undefined') {
                gtag('event', 'social_click', {
                    'event_category': 'social_media',
                    'event_label': platform
                });
            }
        });
    });
}

// Loading Animation
function initLoadingAnimation() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 500);
    });
}

// Keyboard Navigation Support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key to close any open modals or reset forms
        if (e.key === 'Escape') {
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) errorMessage.remove();
        }
        
        // Enter key on CTA button
        if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
            e.target.click();
        }
    });
}

// Parallax Effect for Hero Section (Optional)
function initParallaxEffect() {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Add CSS for animations
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .loading {
            overflow: hidden;
        }
        
        .loading .hero-content {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .loaded .hero-content {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.8s ease-out;
        }
        
        .success-message, .error-message {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all features
function init() {
    // Add animation styles
    addAnimationStyles();
    
    // Initialize loading animation
    initLoadingAnimation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation
    initNavigationLinks();
    
    // Initialize form handling
    if (notifyForm) {
        notifyForm.addEventListener('submit', handleEmailSubmit);
    }
    
    // Initialize tracking
    initPhoneTracking();
    initSocialTracking();
    
    // Initialize keyboard navigation
    initKeyboardNavigation();
    
    // Initialize parallax effect (optional)
    // initParallaxEffect();
    
    // Scroll event listener for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initialize navbar state
    handleNavbarScroll();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for potential external use
window.schoolUniformsApp = {
    scrollToSection,
    validateEmail,
    showSuccessMessage,
    showErrorMessage
};
