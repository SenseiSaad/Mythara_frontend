// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(45, 52, 54, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(45, 52, 54, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animation trigger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.about-card, .service-card, .aws-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const inputs = contactForm.querySelectorAll('input, textarea');
        const formData = {};
        inputs.forEach(input => {
            formData[input.placeholder] = input.value;
        });
        
        // Show success message
        const button = contactForm.querySelector('.submit-button');
        const originalText = button.textContent;
        button.textContent = 'Request Sent!';
        button.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
        
        console.log('Early Access Request Submitted:', formData);
    });
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effect enhancement for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Typing animation for hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Counter animation for stats (if added later)
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Console welcome message
console.log('%c Welcome to Mythara Games! ', 'background: linear-gradient(135deg, #6c5ce7, #fd79a8); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Early Stage Startup - Join our Early Access Program ', 'color: #6c5ce7; font-size: 12px;');