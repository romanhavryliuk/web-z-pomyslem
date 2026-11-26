'use client';

import Image from 'next/image';
import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { hero } from '@/content/pl';
import css from './Hero.module.css';

export const IdeaLight = () => {
  const figureRef = useRef<HTMLElement>(null);

  const reflect = (event: PointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== 'mouse' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    figureRef.current?.style.setProperty(
      '--reflection-x',
      `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
    );
    figureRef.current?.style.setProperty(
      '--reflection-y',
      `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    );
  };

  return (
    <figure ref={figureRef} className={css.visual} onPointerMove={reflect}>
      <Image
        src="/images/idea-light-hero.webp"
        alt={hero.imageAlt}
        width={1120}
        height={1400}
        preload
        sizes="(min-width: 1100px) 560px, (min-width: 768px) 400px, 280px"
        className={css.photograph}
      />
      <div className={css.reflection} aria-hidden="true" />
      <figcaption className={css.visualCaption}>
        {hero.visualCaption}
      </figcaption>
      <a href="#od-nowa" className={css.projectTeaser}>
        <span className={css.projectEyebrow}>{hero.project.eyebrow}</span>
        <span className={css.projectName}>
          {hero.project.name}
          <span aria-hidden="true">↗</span>
        </span>
        <span className={css.projectDescription}>
          {hero.project.description}
        </span>
        <span className={css.projectLink}>
          {hero.project.link}
          <span aria-hidden="true"> →</span>
        </span>
      </a>
    </figure>
  );
};
