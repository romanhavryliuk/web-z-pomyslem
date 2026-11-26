import { Fragment } from 'react';
import { hero, services } from '@/content/pl';
import { Button } from '@/components/Button';
import { IdeaLight } from '@/components/IdeaLight';
import css from './Hero.module.css';

const HERO_TITLE_ID = 'hero-title';

const heroPrices = hero.priceServiceIds
  .map((id) => services.find((service) => service.id === id))
  .filter((service) => service !== undefined);

export const Hero = () => {
  return (
    <section
      id="top"
      aria-labelledby={HERO_TITLE_ID}
      className={`container ${css.hero}`}
    >
      <div className={css.content}>
        <p className={css.eyebrow}>
          <span className={css.eyebrowLine} aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id={HERO_TITLE_ID} className={css.title}>
          {hero.title.before}
          <span className={css.marker}>{hero.title.highlight}</span>
          {hero.title.after}
        </h1>
        <p className={css.subtitle}>{hero.subtitle}</p>
        {heroPrices.length > 0 && (
          <p className={css.price}>
            {heroPrices.map((service, index) => (
              <Fragment key={service.id}>
                {index > 0 && hero.priceSeparator}
                <span className={css.priceItem}>
                  {service.title}{' '}
                  <strong className={css.priceValue}>{service.price}</strong>
                </span>
              </Fragment>
            ))}
          </p>
        )}
        <div className={css.actions}>
          <Button href={hero.primaryCta.href} size="lg" className={css.primary}>
            {hero.primaryCta.label}
          </Button>
          <a href={hero.secondaryCta.href} className={css.secondary}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <p className={css.note}>{hero.note}</p>
      </div>
      <IdeaLight />
    </section>
  );
};
