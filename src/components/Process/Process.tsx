import { processSection } from '@/content/pl';
import { ProcessBulb } from '@/components/ProcessBulb';
import { SectionHeader } from '@/components/SectionHeader';
import css from './Process.module.css';

const TITLE_ID = 'proces-title';

export const Process = () => {
  return (
    <section
      id={processSection.id}
      aria-labelledby={TITLE_ID}
      className={`container ${css.section}`}
    >
      <SectionHeader
        eyebrow={processSection.eyebrow}
        title={processSection.title}
        titleId={TITLE_ID}
        lead={processSection.lead}
        isWideLead
      />
      <ol className={css.steps} data-reveal>
        {processSection.steps.map((step, index) => (
          <li key={step.id} className={css.step}>
            <ProcessBulb level={index + 1} />
            <p className={css.label}>{step.label}</p>
            <h3 className={css.title}>{step.title}</h3>
            <p className={css.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
