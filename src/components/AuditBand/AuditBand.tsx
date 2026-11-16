import { audit } from '@/content/pl';
import { Button } from '@/components/Button';
import css from './AuditBand.module.css';

const TITLE_ID = 'audyt-title';

export const AuditBand = () => {
  return (
    <section aria-labelledby={TITLE_ID} className={`container ${css.section}`}>
      <div className={css.box}>
        <div className={css.text}>
          <h2 id={TITLE_ID} className={css.title}>
            {audit.title}
          </h2>
          <p className={css.description}>{audit.text}</p>
        </div>
        <Button href={audit.cta.href} size="lg">
          {audit.cta.label}
        </Button>
      </div>
    </section>
  );
};
