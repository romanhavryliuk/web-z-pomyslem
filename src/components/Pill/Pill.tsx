import type { ReactNode } from 'react';
import css from './Pill.module.css';

type PillVariant = 'eyebrow' | 'status' | 'badge';

type PillProps = {
  children: ReactNode;
  variant?: PillVariant;
};

export const Pill = ({ children, variant = 'eyebrow' }: PillProps) => {
  const hasDot = variant !== 'badge';

  return (
    <p className={`${css.pill} ${css[variant]}`}>
      {hasDot && <span className={css.dot} aria-hidden="true" />}
      {children}
    </p>
  );
};
