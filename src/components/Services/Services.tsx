import { care, services, servicesSection } from '@/content/pl';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import css from './Services.module.css';

// За макетом перша картка виділена кольором powder.
const HIGHLIGHTED_SERVICE_ID = 'landing';
const TITLE_ID = 'uslugi-title';

export const Services = () => {
  return (
    <section
      id={servicesSection.id}
      aria-labelledby={TITLE_ID}
      className={`container ${css.section}`}
    >
      <SectionHeader
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        titleId={TITLE_ID}
        lead={servicesSection.lead}
      />
      <ul className={css.grid} data-reveal>
        {services.map((service) => (
          <li key={service.id} className={css.gridItem}>
            <ServiceCard
              service={service}
              forWhomLabel={servicesSection.forWhomLabel}
              isHighlighted={service.id === HIGHLIGHTED_SERVICE_ID}
            />
          </li>
        ))}
      </ul>
      <div className={css.care}>
        <p>
          <strong>{care.title}</strong>{' '}
          <span className={css.careText}>{care.text}</span>
        </p>
        <a href={care.cta.href} className={css.careLink}>
          {care.cta.label}
        </a>
      </div>
    </section>
  );
};
