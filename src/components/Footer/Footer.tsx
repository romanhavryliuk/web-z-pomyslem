import { footer } from '@/content/pl';
import { FooterIllustration } from '@/components/FooterIllustration';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.top}`}>
        <div className={css.brand}>
          <p className={css.logo}>
            {footer.logoLines[0]}
            <br />
            {footer.logoLines[1]}
          </p>
          <FooterIllustration />
        </div>
        <div className={css.columns}>
          {footer.columns.map((column) => (
            <nav
              key={column.id}
              aria-label={column.title}
              className={css.column}
            >
              <p className={css.columnTitle}>{column.title}</p>
              <ul className={css.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={css.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className={css.bottom}>
        <div className={`container ${css.bottomInner}`}>
          <p>{footer.copyright}</p>
          <ul className={css.legal}>
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={css.legalLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
