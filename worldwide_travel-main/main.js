import { inject } from '@vercel/analytics';

inject();

/* ═══════════════════════════════════════════════════
   WORLDWIDE TRAVEL AGENCY — Main JS
   ═══════════════════════════════════════════════════ */

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


// ── Header scroll state ──
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
  lastScroll = scrollY;
}, { passive: true });


// ── Mobile Menu ──
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const headerActions = document.querySelector('.header__actions');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
  headerActions.classList.toggle('open');
  header.classList.toggle('menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu on nav link click
mainNav.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    headerActions.classList.remove('open');
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
  });
});


// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));


// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('formSubmitBtn');
const defaultSubmitLabel = submitBtn?.textContent || 'Send Inquiry';

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const phone = document.getElementById('formPhone').value;
  const service = document.getElementById('formService').value;
  const dest = document.getElementById('formDest').value;
  const message = document.getElementById('formMessage').value;

  // Build WhatsApp message
  let waMsg = `Hello, I'd like to inquire about your services.\n\n`;
  waMsg += `Name: ${name}\n`;
  waMsg += `Email: ${email}\n`;
  if (phone) waMsg += `Phone: ${phone}\n`;
  if (service) waMsg += `Service: ${service}\n`;
  if (dest) waMsg += `Interest: ${dest}\n`;
  if (message) waMsg += `\nMessage: ${message}`;

  const waUrl = `https://wa.me/231886103385?text=${encodeURIComponent(waMsg)}`;

  // Visual feedback
  submitBtn.textContent = 'Opening WhatsApp...';
  submitBtn.style.background = '#25D366';
  submitBtn.style.borderColor = '#25D366';

  setTimeout(() => {
    window.open(waUrl, '_blank');
    submitBtn.textContent = 'Sent! We\'ll respond shortly.';
    setTimeout(() => {
      submitBtn.textContent = defaultSubmitLabel;
      submitBtn.style.background = '';
      submitBtn.style.borderColor = '';
      contactForm.reset();
    }, 3000);
  }, 500);
});


// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ── Staggered reveal for grids ──
document.querySelectorAll('.services__grid, .training__grid, .destinations__grid, .packages__grid, .why__grid, .testimonials__grid, .quick-actions__grid').forEach((grid) => {
  const children = grid.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
  });
});
