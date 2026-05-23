/* ═══════════════════════════════════════════════════
   Shared Footer Component
   ═══════════════════════════════════════════════════ */

export function renderFooter() {
  const html = `
  <!-- ═══════════════ FINAL CTA ═══════════════ -->
  <section class="final-cta" id="finalCta">
    <div class="container final-cta__inner">
      <h2 class="final-cta__title reveal">Start Your Journey Today</h2>
      <p class="final-cta__text reveal">Whether you need travel support or career training — we're ready to help you move forward.</p>
      <div class="final-cta__btns reveal">
        <a href="tel:+231777418794" class="btn btn--accent">Call Direct</a>
        <a href="https://wa.me/231886103385" target="_blank" rel="noopener" class="btn btn--outline-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>

  <!-- ═══════════════ FOOTER ═══════════════ -->
  <footer class="footer" id="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <img src="/assets/logo.jpeg" alt="Worldwide Travel Agency" width="48" height="48" />
        <span class="footer__name">Worldwide Travel Agency</span>
        <p class="footer__desc">Professional travel support and career training based in Monrovia, Liberia. Excellent in Services since 2019.</p>
      </div>
      <div class="footer__links">
        <div class="footer__col">
          <h4>Services</h4>
          <a href="/flight-booking-monrovia.html">Flight Booking</a>
          <a href="/#services">Hotel Reservation</a>
          <a href="/visa.html">Visa Assistance</a>
          <a href="/#packages">Tour Packages</a>
          <a href="/corporate-travel-liberia.html">Corporate Travel</a>
        </div>
        <div class="footer__col">
          <h4>Guides</h4>
          <a href="/">Home</a>
          <a href="/about.html">About Us</a>
          <a href="/training.html">Training Institute</a>
          <a href="/airline-ticketing-training-liberia.html">Ticketing Training</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <a href="https://wa.me/231886103385" target="_blank" rel="noopener">WhatsApp: +231 88 610 3385</a>
          <a href="tel:+231777418794">Direct: +231 77 741 8794</a>
          <a href="tel:+231770295866">Direct: +231 77 029 5866</a>
          <a href="https://www.facebook.com/p/Worldwide-Travel-Agency-100040878017944/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.instagram.com/world.widetravelagency" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <div>
          <span>&copy; 2019 – 2026 Worldwide Travel Agency. All rights reserved.</span>
          <span style="display: block; margin-top: 4px; font-size: 0.95em; opacity: 0.9;">Powered by <a href="https://soumed.org" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">SOUMED Technologies</a></span>
        </div>
        <div class="footer__legal" style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
          <div style="display: flex; gap: 1.5rem;">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/terms.html">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- ═══════════════ WHATSAPP FAB ═══════════════ -->
  <a href="https://wa.me/231886103385" target="_blank" rel="noopener" class="whatsapp-fab" id="whatsappFab" aria-label="Chat on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  </a>`;

  document.body.insertAdjacentHTML('beforeend', html);
}
