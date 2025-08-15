// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== SMOOTH SCROLLING =====
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

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add shadow and background when scrolling
  if (scrollTop > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.75)';
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.webkitBackdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.webkitBackdropFilter = 'blur(20px)';
  }

  // Keep navbar always visible (Apple-style)
  navbar.style.transform = 'translateY(0)';

  lastScrollTop = scrollTop;
});

// ===== ACTIVE NAVIGATION LINKS =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== SCROLL REVEAL ANIMATIONS =====
function revealOnScroll() {
  const elements = document.querySelectorAll('.service-card, .skill-category, .email-card');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.service-card, .skill-category, .email-card, .about-stats');
  animateElements.forEach(el => observer.observe(el));
});

// ===== TYPING EFFECT FOR CODE ANIMATION =====
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ===== LAZY LOADING FOR IMAGES (if any) =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink();
  revealOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Add loading animation class
  document.body.classList.add('loaded');

  // Initialize any additional features
  console.log('Portfolio website loaded successfully!');
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close mobile menu on ESC
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Add focus management for mobile menu
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// ===== SMOOTH ANIMATIONS =====
// Add CSS classes for smooth animations
const style = document.createElement('style');
style.textContent = `
  .service-card, .skill-category, .email-card, .about-stats {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .service-card.animate-in, .skill-category.animate-in, 
  .email-card.animate-in, .about-stats.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  .loaded {
    opacity: 1;
  }
  
  body {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  body.loaded {
    opacity: 1;
  }
`;

document.head.appendChild(style);
