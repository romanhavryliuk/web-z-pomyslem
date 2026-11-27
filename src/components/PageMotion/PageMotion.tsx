'use client';

import { useEffect } from 'react';

const REVEAL_DURATION_MS = 420;
// Дублює --motion-ease з globals.css: Web Animations API не читає CSS-змінні напряму.
const REVEAL_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
// Старт з 0.7, а не з 0: текст читабельний навіть до гідратації й без JS.
const REVEAL_START_OPACITY = 0.7;
const REVEAL_OFFSET_PX = 10;
const OBSERVER_THRESHOLD = 0.08;
const OBSERVER_ROOT_MARGIN = '0px 0px -24px 0px';

export const PageMotion = () => {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !Element.prototype.animate)
      return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const seen = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (seen.has(entry.target)) continue;
          seen.add(entry.target);
          if (
            reduced.matches ||
            document.hidden ||
            entry.target.contains(document.activeElement)
          )
            continue;

          const animation = entry.target.animate(
            [
              {
                opacity: REVEAL_START_OPACITY,
                transform: `translateY(${REVEAL_OFFSET_PX}px)`,
              },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: REVEAL_DURATION_MS, easing: REVEAL_EASING },
          );
          animations.set(entry.target, animation);
          animation.onfinish = () => animations.delete(entry.target);
        }
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: OBSERVER_ROOT_MARGIN },
    );

    const cancel = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const focus = (event: FocusEvent) => {
      animations.forEach((animation, target) => {
        if (event.target instanceof Node && target.contains(event.target)) {
          animation.cancel();
          animations.delete(target);
        }
      });
    };
    for (const target of targets) {
      const bounds = target.getBoundingClientRect();
      // Перший екран і відновлену позицію прокрутки лишаємо видимими одразу, без анімації.
      if (bounds.top < window.innerHeight && bounds.bottom > 0)
        seen.add(target);
      else observer.observe(target);
    }
    reduced.addEventListener('change', cancel);
    document.addEventListener('focusin', focus);

    return () => {
      observer.disconnect();
      cancel();
      reduced.removeEventListener('change', cancel);
      document.removeEventListener('focusin', focus);
    };
  }, []);

  return null;
};
