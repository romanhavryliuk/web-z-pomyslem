import type { ReactNode } from 'react';
import css from './Button.module.css';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  size?: ButtonSize;
  className?: string;
};

export const Button = ({
  children,
  href,
  type = 'button',
  size = 'md',
  className,
}: ButtonProps) => {
  const classes = [css.button, css[size], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};
