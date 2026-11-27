import { contact, type services } from '@/content/pl';
import { ServiceIllustration } from '@/components/ServiceIllustration';
import css from './ServiceCard.module.css';

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  forWhomLabel: string;
  isHighlighted: boolean;
};

export const ServiceCard = ({
  service,
  forWhomLabel,
  isHighlighted,
}: ServiceCardProps) => {
  const cardClass = isHighlighted ? `${css.card} ${css.highlighted}` : css.card;

  return (
    <article className={cardClass}>
      <ServiceIllustration serviceId={service.id} />
      <h3 className={css.title}>{service.title}</h3>
      <p className={css.promise}>{service.promise}</p>
      <p className={css.forWhom}>
        <strong className={css.forWhomLabel}>{forWhomLabel}</strong>{' '}
        {service.forWhom}
      </p>
      <ul className={css.includes}>
        {service.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={css.footer}>
        <p className={css.priceRow}>
          <span className={css.price}>{service.price}</span>
          <span className={css.time}>{service.time}</span>
        </p>
        <a href={`#${contact.id}`} className={css.link}>
          {service.cta}
        </a>
      </div>
    </article>
  );
};
