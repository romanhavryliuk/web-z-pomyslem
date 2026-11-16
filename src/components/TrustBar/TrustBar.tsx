import { trustBar } from '@/content/pl';
import css from './TrustBar.module.css';

export const TrustBar = () => {
  return (
    <section
      aria-label={trustBar.ariaLabel}
      className={`container ${css.section}`}
    >
      <ul className={css.list}>
        {trustBar.items.map((item) => (
          <li key={item.id} className={css.item}>
            <svg
              className={css.icon}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7" />
            </svg>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
