import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animations discrètes, désactivées si « réduire les animations » est actif.
const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduit) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('[data-apparait]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: Number(el.dataset.delai ?? 0),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  // Titre d'accueil : les lignes montent l'une après l'autre
  const lignes = document.querySelectorAll('.titre-ligne > span');
  if (lignes.length) {
    gsap.from(lignes, { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.12 });
  }

  // Sommaire : la vignette suit le pointeur au survol d'une ligne
  const vignette = document.querySelector<HTMLElement>('.sommaire-vignette');
  const sommaire = document.querySelector<HTMLElement>('.sommaire');
  if (vignette && sommaire && window.matchMedia('(hover: hover)').matches) {
    const img = vignette.querySelector('img')!;
    const x = gsap.quickTo(vignette, 'x', { duration: 0.5, ease: 'power3' });
    const y = gsap.quickTo(vignette, 'y', { duration: 0.5, ease: 'power3' });
    sommaire.addEventListener('pointermove', (e) => {
      x(e.clientX + 24);
      y(e.clientY - 90);
    });
    sommaire.querySelectorAll<HTMLElement>('[data-vignette]').forEach((ligne) => {
      ligne.addEventListener('pointerenter', () => {
        img.src = ligne.dataset.vignette!;
        gsap.to(vignette, { autoAlpha: 1, scale: 1, duration: 0.3 });
      });
    });
    sommaire.addEventListener('pointerleave', () => gsap.to(vignette, { autoAlpha: 0, scale: 0.92, duration: 0.25 }));
  }
}
