/* ═══════════════════════════════════════════════════
   Shared Init — Common JS for all pages
   ═══════════════════════════════════════════════════ */

export function initCommon() {

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
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }, { passive: true });
  }


  // ── Mobile Menu ──
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const headerActions = document.querySelector('.header__actions');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      if (headerActions) headerActions.classList.toggle('open');
      if (header) header.classList.toggle('menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mainNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (headerActions) headerActions.classList.remove('open');
        if (header) header.classList.remove('menu-open');
        document.body.style.overflow = '';
      });
    });
  }


  // ── Smooth scroll for on-page anchors ──
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
  document.querySelectorAll('.services__grid, .training__grid, .destinations__grid, .packages__grid, .why__grid, .testimonials__grid, .quick-actions__grid, .about__values-grid, .visa__countries-grid, .training__programs-grid').forEach((grid) => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });
}


// ── WhatsApp Contact Form Logic ──
export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (!contactForm || !submitBtn) return;

  const defaultLabel = submitBtn.textContent;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone')?.value || '';
    const service = document.getElementById('formService')?.value || '';
    const dest = document.getElementById('formDest')?.value || '';
    const message = document.getElementById('formMessage')?.value || '';

    let waMsg = `Hello, I'd like to inquire about your services.\n\n`;
    waMsg += `Name: ${name}\n`;
    waMsg += `Email: ${email}\n`;
    if (phone) waMsg += `Phone: ${phone}\n`;
    if (service) waMsg += `Service: ${service}\n`;
    if (dest) waMsg += `Interest: ${dest}\n`;
    if (message) waMsg += `\nMessage: ${message}`;

    const waUrl = `https://wa.me/231886103385?text=${encodeURIComponent(waMsg)}`;

    submitBtn.textContent = 'Opening WhatsApp...';
    submitBtn.style.background = '#25D366';
    submitBtn.style.borderColor = '#25D366';

    setTimeout(() => {
      window.open(waUrl, '_blank');
      submitBtn.textContent = 'Sent! We\'ll respond shortly.';
      setTimeout(() => {
        submitBtn.textContent = defaultLabel;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        contactForm.reset();
      }, 3000);
    }, 500);
  });
}
