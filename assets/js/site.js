(() => {
  const cards = [...document.querySelectorAll('[data-lightbox]')];
  const dialog = document.getElementById('lightbox');
  if (!dialog || !cards.length) return;
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  const close = dialog.querySelector('.lightbox-close');
  const prev = dialog.querySelector('.prev');
  const next = dialog.querySelector('.next');
  let current = 0;

  function render(index) {
    current = (index + cards.length) % cards.length;
    const card = cards[current];
    const thumb = card.querySelector('img');
    image.src = card.dataset.lightbox;
    image.alt = thumb.alt;
    caption.textContent = card.querySelector('figcaption')?.textContent || thumb.alt;
  }
  function open(index) {
    render(index);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }
  cards.forEach((card, index) => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Buka foto: ${card.querySelector('figcaption')?.textContent || ''}`);
    card.addEventListener('click', () => open(index));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(index); } });
  });
  close.addEventListener('click', () => dialog.close());
  prev.addEventListener('click', () => render(current - 1));
  next.addEventListener('click', () => render(current + 1));
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', e => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft') render(current - 1);
    if (e.key === 'ArrowRight') render(current + 1);
  });

  // Keep analytics from blocking first paint.
  const loadAnalytics = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-8BN88F83K4';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', 'G-8BN88F83K4', { anonymize_ip: true });
  };
  if ('requestIdleCallback' in window) requestIdleCallback(loadAnalytics, { timeout: 3500 });
  else setTimeout(loadAnalytics, 2500);
})();
