(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const nav = header?.querySelector('nav');
  menuButton?.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Tutup' : 'Menu';
  });
  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) {
      header.classList.remove('menu-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.textContent = 'Menu';
    }
  });

  const dialog = document.getElementById('lightbox');
  const cards = [...document.querySelectorAll('[data-lightbox]')];
  if (dialog && cards.length) {
    const image = dialog.querySelector('img');
    const caption = dialog.querySelector('p');
    const close = dialog.querySelector('.lightbox-close');
    cards.forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      const open = () => {
        const thumb = card.querySelector('img');
        image.src = card.dataset.lightbox;
        image.alt = thumb.alt;
        caption.textContent = card.querySelector('figcaption')?.textContent || thumb.alt;
        dialog.showModal();
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
      });
    });
    close?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  }

  const loadAnalytics = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8BN88F83K4';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-8BN88F83K4', { anonymize_ip: true });
  };
  if ('requestIdleCallback' in window) requestIdleCallback(loadAnalytics, { timeout: 4000 });
  else setTimeout(loadAnalytics, 2500);
})();
