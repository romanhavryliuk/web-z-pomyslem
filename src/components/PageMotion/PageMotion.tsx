'use client';

import { useEffect } from 'react';

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

          // Content is always readable, including before hydration and without JS.
          const animation = entry.target.animate(
            [
              { opacity: 0.7, transform: 'translateY(10px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
          );
          animations.set(entry.target, animation);
          animation.onfinish = () => animations.delete(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
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
      // Leave the first screen and restored scroll positions immediately visible.
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
