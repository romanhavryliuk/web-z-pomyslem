import { nav } from '@/content/pl';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={`container ${css.header}`}>
      <Logo />
      <nav aria-label={nav.ariaLabel} className={css.nav}>
        <ul className={css.list}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={css.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button href={nav.cta.href} size="sm">
        {nav.cta.label}
      </Button>
    </header>
  );
};
