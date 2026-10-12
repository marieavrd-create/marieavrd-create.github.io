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
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
  });

  // L'ellipse se dessine quand elle entre dans l'écran, et se redessine au survol.
  // Le SVG est recalé sur la taille réelle du mot pour que le trait reste fin.
  document.querySelectorAll<HTMLElement>('.ellipse').forEach((boite) => {
    const svg = boite.querySelector('svg')!;
    const forme = svg.querySelector('ellipse')!;
    const caler = () => {
      const { width: w, height: h } = boite.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      forme.setAttribute('cx', String(w / 2));
      forme.setAttribute('cy', String(h / 2));
      forme.setAttribute('rx', String(w / 2 - 1));
      forme.setAttribute('ry', String(h / 2 - 1));
      forme.style.vectorEffect = 'none';
      return forme.getTotalLength();
    };
    let long = caler();
    const dessiner = (duree: number) =>
      gsap.fromTo(forme, { strokeDasharray: long, strokeDashoffset: long }, { strokeDashoffset: 0, duration: duree, ease: 'power2.inOut', overwrite: true });
    gsap.set(svg, { opacity: 1 });
    gsap.set(forme, { strokeDasharray: long, strokeDashoffset: long });
    ScrollTrigger.create({ trigger: boite, start: 'top 90%', once: true, onEnter: () => dessiner(1.3).delay(0.35) });
    boite.parentElement?.addEventListener('pointerenter', () => dessiner(0.9));
    window.addEventListener('resize', () => {
      long = caler();
      gsap.set(forme, { strokeDasharray: long, strokeDashoffset: 0 });
    });
  });

  // Cartes projet : apparition en cascade
  ScrollTrigger.batch('.carte', {
    start: 'top 92%',
    once: true,
    onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }),
  });
}
