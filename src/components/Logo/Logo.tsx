import { nav } from '@/content/pl';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="#top" className={css.logo}>
      <svg
        className={css.icon}
        width="28"
        height="34"
        viewBox="0 0 40 48"
        aria-hidden="true"
      >
        <path
          d="M20 2C30.5 2 37 9.5 37 18c0 6.5-3.6 10.2-6.2 13.5-1.4 1.8-2 3.6-2 5.5H11.2c0-1.9-.6-3.7-2-5.5C6.6 28.2 3 24.5 3 18 3 9.5 9.5 2 20 2z"
          fill="#F2BE4A"
        />
        <circle cx="15" cy="19" r="2.2" fill="#2A211C" />
        <circle cx="25" cy="19" r="2.2" fill="#2A211C" />
        <path
          d="M16 24.5q4 3.2 8 0"
          stroke="#2A211C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="11.5" y="38" width="17" height="4" rx="2" fill="#B94E27" />
        <rect
          x="13.5"
          y="43"
          width="13"
          height="3.5"
          rx="1.75"
          fill="#B94E27"
        />
      </svg>
      <span className={css.text}>{nav.logo}</span>
    </a>
  );
};
