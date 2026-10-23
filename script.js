const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const backToTop = document.querySelector('.back-to-top');
const header = document.querySelector('.header');
const updateScrollEffects = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
  backToTop.style.setProperty('--scroll-progress', `${progress * 360}deg`);
  backToTop.classList.toggle('is-visible', window.scrollY > 360);
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', updateScrollEffects, { passive: true });
updateScrollEffects();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--pointer-x');
    card.style.removeProperty('--pointer-y');
  });
});
