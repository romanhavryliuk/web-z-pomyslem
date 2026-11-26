import Image from 'next/image';
import { hero } from '@/content/pl';
import css from './Hero.module.css';

export const IdeaLight = () => {
  return (
    <figure className={css.visual}>
      <Image
        src="/images/idea-light-hero.webp"
        alt={hero.imageAlt}
        width={1120}
        height={1400}
        preload
        sizes="(min-width: 1440px) 472px, (min-width: 768px) 288px, calc(100vw - 40px)"
        className={css.photograph}
      />
      <figcaption className={css.visualCaption}>
        {hero.visualCaption}
      </figcaption>
    </figure>
  );
};
