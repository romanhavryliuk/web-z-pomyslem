import { hero } from '@/content/pl';
import { Button } from '@/components/Button';
import { HeroIllustration } from '@/components/HeroIllustration';
import { Pill } from '@/components/Pill';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="top" className={`container ${css.hero}`}>
      <div className={css.content}>
        <Pill>{hero.eyebrow}</Pill>
        <h1 className={css.title}>
          {hero.title.before}
          <span className={css.marker}>{hero.title.highlight}</span>
          {hero.title.after}
        </h1>
        <p className={css.subtitle}>{hero.subtitle}</p>
        <div className={css.actions}>
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <a href={hero.secondaryCta.href} className={css.secondary}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <p className={css.note}>
          {hero.note}
          <strong className={css.noteHighlight}>{hero.noteHighlight}</strong>
        </p>
      </div>
      <div className={css.illustration}>
        <HeroIllustration />
      </div>
    </section>
  );
};
