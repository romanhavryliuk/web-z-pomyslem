import { about } from '@/content/pl';
import { SectionHeader } from '@/components/SectionHeader';
import css from './About.module.css';

const TITLE_ID = 'o-mnie-title';

export const About = () => {
  return (
    <section
      id={about.id}
      aria-labelledby={TITLE_ID}
      className={`container ${css.section}`}
    >
      {/* Заглушка до появи фото (next/image, 1:1, без priority). */}
      <div className={css.photo} role="img" aria-label={about.photoAlt}>
        <span className={css.photoPlaceholder}>{about.photoPlaceholder}</span>
      </div>
      <div className={css.content}>
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          titleId={TITLE_ID}
        />
        <p className={css.text}>{about.text}</p>
        <ul className={css.chips}>
          {about.chips.map((chip) => (
            <li key={chip} className={css.chip}>
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
