'use client';

import { useEffect, useRef } from 'react';

const approach = (
  current: number,
  target: number,
  speed: number,
  dt: number,
) => {
  const next = current + (target - current) * (1 - Math.exp(-speed * dt));
  return Math.abs(next - target) < 0.001 ? target : next;
};

// Close quickly, hold briefly, then let the eyelid open more slowly.
const eyelid = (elapsed: number, hold = 20) => {
  if (elapsed < 0) return 1;
  if (elapsed < 60) return 1 - elapsed / 60;
  if (elapsed < 60 + hold) return 0;
  return Math.min(1, (elapsed - 60 - hold) / 115);
};

export const useBulbMotion = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bulbRef = useRef<SVGGElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const anchor = bulbRef.current;
    const scene = sceneRef.current;
    const button = buttonRef.current;
    if (!svg || !anchor || !scene || !button) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const touchScreen = window.matchMedia(
      '(hover: none) and (pointer: coarse)',
    );
    let lastAutoWink = -Infinity;
    let frame = 0;
    let inView = true;
    let previousTime = 0;
    let pointer: { x: number; y: number } | null = null;
    let hovered = false;
    let focused = false;
    let blinkStarted = -Infinity;
    let delightedStarted = -Infinity;
    let lastPointerTime = -Infinity;
    let glanceUntil = 0;
    let glanceIndex = 0;
    const surroundings = [
      { x: -0.58, y: -0.12 },
      { x: 0.52, y: 0.16 },
      { x: 0.24, y: -0.42 },
      { x: -0.2, y: 0.3 },
      { x: 0.54, y: -0.16 },
    ];
    let idleGaze = { x: 0, y: 0 };
    const gaze = { x: 0, y: 0 };
    const head = { x: 0, y: 0 };
    let interest = 0;
    let blinkTimer: ReturnType<typeof setTimeout>;
    let glanceTimer: ReturnType<typeof setTimeout>;
    const active = () => inView && !document.hidden;

    const update = (now: number) => {
      frame = 0;
      if (!active()) return;
      const dt = Math.min((now - previousTime) / 1000 || 1 / 60, 0.032);
      previousTime = now;

      // Read one stable matrix before writing styles. All facial parts share it.
      const matrix = anchor.getScreenCTM();
      const local =
        pointer && matrix
          ? new DOMPoint(pointer.x, pointer.y).matrixTransform(matrix.inverse())
          : null;
      let targetX = 0;
      let targetY = 0;
      let proximity = 0;
      if (local && !reduced.matches) {
        const dx = local.x - 98;
        const dy = local.y - 108;
        const distance = Math.hypot(dx, dy);
        targetX = dx / (distance + 100);
        targetY = dy / (distance + 100);
        proximity = Math.max(0, 1 - distance / 160);
      } else if (!reduced.matches && now < glanceUntil) {
        targetX = idleGaze.x;
        targetY = idleGaze.y;
      }

      const desiredInterest = Math.max(
        proximity,
        hovered || focused ? 0.55 : 0,
      );
      interest = reduced.matches
        ? desiredInterest
        : approach(interest, desiredInterest, 9, dt);
      for (const axis of ['x', 'y'] as const) {
        const target = reduced.matches ? 0 : axis === 'x' ? targetX : targetY;
        gaze[axis] = reduced.matches ? 0 : approach(gaze[axis], target, 36, dt);
        head[axis] = reduced.matches ? 0 : approach(head[axis], target, 9, dt);
      }

      const delightElapsed = now - delightedStarted;
      const delighted = delightElapsed < 800;
      const warmth = delighted
        ? Math.sin((Math.PI * Math.max(0, delightElapsed)) / 800)
        : 0;
      const blinkElapsed = now - blinkStarted;
      const blinking = !reduced.matches && blinkElapsed < 195;
      const blinkOpen = blinking ? eyelid(blinkElapsed) : 1;
      const winkOpen =
        delighted && !reduced.matches ? eyelid(delightElapsed - 100, 90) : 1;
      const properties: Record<string, number> = {
        '--gaze-x': gaze.x,
        '--gaze-y': gaze.y,
        '--look-x': head.x,
        '--look-y': head.y,
        '--interest': interest,
        '--vergence': reduced.matches ? 0 : proximity * 0.12,
        '--joy': warmth,
        '--left-open': blinkOpen,
        '--right-open': Math.min(blinkOpen, winkOpen),
      };
      for (const [name, value] of Object.entries(properties)) {
        svg.style.setProperty(name, String(value));
      }
      scene.dataset.expression = delighted
        ? 'delighted'
        : local || hovered || focused
          ? 'attentive'
          : 'idle';

      const moving =
        gaze.x !== targetX ||
        gaze.y !== targetY ||
        head.x !== targetX ||
        head.y !== targetY ||
        interest !== desiredInterest;
      if (
        (!reduced.matches && (moving || blinking || now < glanceUntil)) ||
        delighted
      ) {
        frame = requestAnimationFrame(update);
      }
    };
    const schedule = () => {
      if (!frame && active()) {
        previousTime = performance.now();
        frame = requestAnimationFrame(update);
      }
    };
    const track = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || reduced.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      lastPointerTime = performance.now();
      glanceUntil = 0;
      schedule();
    };
    const reset = () => {
      pointer = null;
      glanceUntil = 0;
      schedule();
    };
    const touch = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') return;
      lastPointerTime = performance.now();
      glanceUntil = 0;
      schedule();
    };
    const leaveWindow = (event: PointerEvent) => {
      if (!event.relatedTarget) reset();
    };
    const enter = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      hovered = true;
      schedule();
    };
    const leave = () => {
      hovered = false;
      schedule();
    };
    const focus = () => {
      focused = button.matches(':focus-visible');
      schedule();
    };
    const blur = () => {
      focused = false;
      schedule();
    };
    const delight = () => {
      if (performance.now() - delightedStarted < 800) return;
      delightedStarted = performance.now();
      // Let the intentional wink finish before the next spontaneous blink.
      blinkStarted = -Infinity;
      schedule();
    };
    const blink = () => {
      if (
        active() &&
        !reduced.matches &&
        performance.now() - delightedStarted > 1000
      ) {
        if (
          touchScreen.matches &&
          performance.now() - lastAutoWink > 14000 &&
          performance.now() - lastPointerTime > 3000 &&
          performance.now() > glanceUntil
        ) {
          lastAutoWink = performance.now();
          delight();
        } else {
          blinkStarted = performance.now();
          schedule();
        }
      }
      blinkTimer = setTimeout(blink, 2800 + Math.random() * 3000);
    };
    const glance = () => {
      // A short purposeful glance only when there is no cursor to attend to.
      if (
        active() &&
        !reduced.matches &&
        !pointer &&
        !hovered &&
        !focused &&
        performance.now() - delightedStarted > 1400 &&
        performance.now() - lastPointerTime > 3000
      ) {
        // Change direction between glances, with a deliberate pause to look.
        glanceIndex =
          (glanceIndex +
            1 +
            Math.floor(Math.random() * (surroundings.length - 1))) %
          surroundings.length;
        idleGaze = surroundings[glanceIndex];
        glanceUntil =
          performance.now() +
          (touchScreen.matches ? 1100 + Math.random() * 500 : 650);
        schedule();
      }
      glanceTimer = setTimeout(
        glance,
        (touchScreen.matches ? 4000 : 5500) + Math.random() * 2500,
      );
    };
    blinkTimer = setTimeout(blink, 2200);
    glanceTimer = setTimeout(glance, touchScreen.matches ? 4200 : 5500);

    const visibility = () => {
      scene.dataset.paused = String(!active());
      if (active()) {
        schedule();
      } else {
        if (document.hidden) pointer = null;
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      visibility();
    });
    observer.observe(svg);
    window.addEventListener('pointermove', track, { passive: true });
    window.addEventListener('pointerdown', touch, { passive: true });
    window.addEventListener('pointerout', leaveWindow);
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('visibilitychange', visibility);
    reduced.addEventListener('change', reset);
    button.addEventListener('pointerenter', enter);
    button.addEventListener('pointerleave', leave);
    button.addEventListener('focus', focus);
    button.addEventListener('blur', blur);
    button.addEventListener('click', delight);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(blinkTimer);
      clearTimeout(glanceTimer);
      observer.disconnect();
      window.removeEventListener('pointermove', track);
      window.removeEventListener('pointerdown', touch);
      window.removeEventListener('pointerout', leaveWindow);
      window.removeEventListener('blur', reset);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', visibility);
      reduced.removeEventListener('change', reset);
      button.removeEventListener('pointerenter', enter);
      button.removeEventListener('pointerleave', leave);
      button.removeEventListener('focus', focus);
      button.removeEventListener('blur', blur);
      button.removeEventListener('click', delight);
    };
  }, []);

  return { svgRef, bulbRef, sceneRef, buttonRef };
};
