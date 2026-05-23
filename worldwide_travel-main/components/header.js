/* ═══════════════════════════════════════════════════
   Shared Header Component
   ═══════════════════════════════════════════════════ */

export function renderHeader(activePage = '') {
  const nav = [
    { label: 'Home',         href: '/' },
    { label: 'About',        href: '/about.html' },
    { label: 'Visa',         href: '/visa.html' },
    { label: 'Training',     href: '/training.html' },
    { label: 'Contact',      href: '/contact.html' },
  ];

  const navLinks = nav.map(n => {
    const isActive = activePage === n.label.toLowerCase() ? ' active' : '';
    return `<a href="${n.href}" class="nav-link${isActive}">${n.label}</a>`;
  }).join('\n        ');

  const html = `
  <header class="header" id="header">
    <div class="container header__inner">
      <a href="/" class="header__logo" aria-label="Worldwide Travel Agency Home">
        <img src="/assets/logo.jpeg" alt="Worldwide Travel Agency Logo" width="48" height="48" />
        <div class="header__brand">
          <span class="header__name">Worldwide Travel Agency</span>
          <span class="header__tagline">Excellent in Services</span>
        </div>
      </a>

      <nav class="header__nav" id="mainNav" aria-label="Main navigation">
        ${navLinks}
      </nav>

      <div class="header__actions">
        <a href="https://wa.me/231886103385" target="_blank" rel="noopener" class="btn btn--whatsapp" id="headerWhatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          WhatsApp
        </a>
        <a href="tel:+231777418794" class="btn btn--primary" id="headerBookBtn">Call Direct</a>
      </div>

      <button class="header__hamburger" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  document.body.insertAdjacentHTML('afterbegin', html);
}
