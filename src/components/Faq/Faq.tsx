import { faq, faqSection } from '@/content/pl';
import { SectionHeader } from '@/components/SectionHeader';
import css from './Faq.module.css';

const TITLE_ID = 'faq-title';
// За макетом перше питання відкрите.
const OPEN_BY_DEFAULT_INDEX = 0;

export const Faq = () => {
  return (
    <section
      id={faqSection.id}
      aria-labelledby={TITLE_ID}
      className={`container ${css.section}`}
    >
      <SectionHeader
        eyebrow={faqSection.eyebrow}
        title={faqSection.title}
        titleId={TITLE_ID}
      />
      <div className={css.grid}>
        {faq.map((item, index) => (
          <details
            key={item.id}
            className={css.item}
            open={index === OPEN_BY_DEFAULT_INDEX}
          >
            <summary className={css.question}>
              {item.question}
              <span className={css.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={css.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
