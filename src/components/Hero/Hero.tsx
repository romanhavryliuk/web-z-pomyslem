import { hero } from '@/content/pl';
import { Button } from '@/components/Button';
import { IdeaLight } from './IdeaLight';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="top" className={css.hero}>
      <div className={css.content}>
        <p className={css.eyebrow}>
          <span className={css.eyebrowLine} aria-hidden="true" />
          {hero.eyebrow}
        </p>
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
        <p className={css.note}>{hero.note}</p>
      </div>
      <IdeaLight />
      <nav className={css.continue} aria-label={hero.continueLabel}>
        <p className={css.continueIntro}>
          {hero.continueIntro}
          <span aria-hidden="true">↘</span>
        </p>
        <ol className={css.chapterList}>
          {hero.chapters.map((chapter, index) => (
            <li key={chapter.href}>
              <a href={chapter.href} className={css.chapter}>
                <span className={css.chapterNumber}>0{index + 1}</span>
                <span>{chapter.label}</span>
                <span className={css.chapterArrow} aria-hidden="true">
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};
