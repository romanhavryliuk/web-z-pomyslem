'use client';

import { useEffect, useRef } from 'react';
import { hero } from '@/content/pl';
import css from './HeroIllustration.module.css';

export const HeroIllustration = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bulbRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const bulb = bulbRef.current;
    if (!svg || !bulb) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    const update = () => {
      frame = 0;
      const matrix = bulb.getScreenCTM();
      if (!pointer || reducedMotion.matches || !matrix) {
        svg.style.setProperty('--look-x', '0');
        svg.style.setProperty('--look-y', '0');
        return;
      }

      // Use SVG coordinates so tracking also works when the illustration scales.
      const local = new DOMPoint(pointer.x, pointer.y).matrixTransform(
        matrix.inverse(),
      );
      const dx = (local.x - 98) / 160;
      const dy = (local.y - 112) / 160;
      const distance = Math.max(1, Math.hypot(dx, dy));
      svg.style.setProperty('--look-x', String(dx / distance));
      svg.style.setProperty('--look-y', String(dy / distance));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const track = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || reducedMotion.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const reset = () => {
      pointer = null;
      schedule();
    };
    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) reset();
    };

    window.addEventListener('pointermove', track, { passive: true });
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', reset);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', track);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', reset);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', reset);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={css.svg}
      viewBox="0 0 560 480"
      role="img"
      aria-label={hero.mascotAlt}
    >
      <defs>
        <radialGradient id="h-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F7D88A" stopOpacity="0.75" />
          <stop offset="1" stopColor="#F5EEE3" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="h-bulb" cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFE7A8" />
          <stop offset="0.55" stopColor="#F2BE4A" />
          <stop offset="1" stopColor="#D4952A" />
        </radialGradient>
        <linearGradient id="h-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9643A" />
          <stop offset="1" stopColor="#9A3F1E" />
        </linearGradient>
        <linearGradient id="h-slab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFBF4" />
          <stop offset="1" stopColor="#EADCC9" />
        </linearGradient>
        <radialGradient id="h-s1" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#E88A62" />
          <stop offset="1" stopColor="#9A3F1E" />
        </radialGradient>
        <radialGradient id="h-s2" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#D3DEC8" />
          <stop offset="1" stopColor="#8FA47F" />
        </radialGradient>
        <linearGradient id="h-cur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E7835A" />
          <stop offset="1" stopColor="#9A3F1E" />
        </linearGradient>
      </defs>
      <circle
        className={css.glow}
        cx="420"
        cy="210"
        r="190"
        fill="url(#h-glow)"
      />
      <ellipse
        cx="236"
        cy="438"
        rx="196"
        ry="16"
        fill="#2A211C"
        opacity="0.1"
      />
      <g transform="rotate(-6 240 260)">
        <rect
          x="40"
          y="96"
          width="380"
          height="300"
          rx="32"
          fill="url(#h-slab)"
        />
        <rect
          x="40"
          y="96"
          width="380"
          height="300"
          rx="32"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.7"
          strokeWidth="3"
        />
        <circle cx="80" cy="132" r="8" fill="#D9643A" />
        <circle cx="104" cy="132" r="8" fill="#F2BE4A" />
        <circle cx="128" cy="132" r="8" fill="#A7B79A" />
        <rect x="76" y="168" width="214" height="24" rx="12" fill="#2A211C" />
        <rect
          x="76"
          y="204"
          width="160"
          height="14"
          rx="7"
          fill="#5C5048"
          opacity="0.3"
        />
        <rect x="76" y="240" width="124" height="42" rx="21" fill="#B94E27" />
        <rect x="76" y="304" width="104" height="66" rx="16" fill="#EBB7A3" />
        <rect x="192" y="304" width="104" height="66" rx="16" fill="#A7B79A" />
        <rect x="308" y="304" width="80" height="66" rx="16" fill="#F2BE4A" />
      </g>
      <ellipse
        cx="426"
        cy="436"
        rx="72"
        ry="11"
        fill="#2A211C"
        opacity="0.16"
      />
      <g
        className={css.rays}
        stroke="#E2A73A"
        strokeWidth="9"
        strokeLinecap="round"
      >
        <path d="M426 140v-28" />
        <path d="M364 162l-18-20" />
        <path d="M488 162l18-20" />
      </g>
      <g className={css.float}>
        <g
          ref={bulbRef}
          transform="translate(331 160) rotate(6 100 140) scale(0.95)"
        >
          <g className={css.bulb}>
            <path
              d="M100 20C150 20 180 58 180 100C180 132 160 152 146 170C138 180 134 190 134 200H66C66 190 62 180 54 170C40 152 20 132 20 100C20 58 50 20 100 20Z"
              fill="url(#h-bulb)"
            />
            <ellipse
              cx="70"
              cy="64"
              rx="16"
              ry="26"
              transform="rotate(-24 70 64)"
              fill="#FFFFFF"
              opacity="0.5"
            />
            <g className={css.face}>
              <g className={css.eyes}>
                <g className={css.blink}>
                  <ellipse cx="78" cy="108" rx="7" ry="9" fill="#2A211C" />
                  <ellipse cx="118" cy="108" rx="7" ry="9" fill="#2A211C" />
                  <circle cx="80.5" cy="104.5" r="2.4" fill="#FFFFFF" />
                  <circle cx="120.5" cy="104.5" r="2.4" fill="#FFFFFF" />
                </g>
              </g>
              <path
                d="M84 130Q98 143 112 130"
                stroke="#2A211C"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <ellipse
                cx="62"
                cy="126"
                rx="10"
                ry="6"
                fill="#D9643A"
                opacity="0.45"
              />
              <ellipse
                cx="134"
                cy="126"
                rx="10"
                ry="6"
                fill="#D9643A"
                opacity="0.45"
              />
            </g>
            <rect
              x="62"
              y="198"
              width="76"
              height="16"
              rx="8"
              fill="url(#h-base)"
            />
            <rect
              x="65"
              y="214"
              width="70"
              height="15"
              rx="7.5"
              fill="url(#h-base)"
            />
            <rect
              x="69"
              y="229"
              width="62"
              height="14"
              rx="7"
              fill="url(#h-base)"
            />
            <path d="M84 243h32l-6 12H90z" fill="#7E3418" />
          </g>
        </g>
      </g>
      <path
        transform="translate(150 330) rotate(-12)"
        d="M0 0L0 66L17 51L30 78L43 72L30 46L53 46Z"
        fill="url(#h-cur)"
        stroke="#B94E27"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="60" r="16" fill="url(#h-s2)" />
      <circle cx="520" cy="420" r="24" fill="url(#h-s2)" />
      <circle cx="36" cy="438" r="11" fill="url(#h-s1)" />
    </svg>
  );
};
