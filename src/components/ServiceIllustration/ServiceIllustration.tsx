import type { JSX } from 'react';
import css from './ServiceIllustration.module.css';

type ServiceIllustrationProps = {
  serviceId: string;
};

const LandingIcon = () => (
  <svg
    className={css.svg}
    width="120"
    height="104"
    viewBox="0 0 120 104"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="s1a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFBF4" />
        <stop offset="1" stopColor="#E5D4BE" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="98" rx="46" ry="6" fill="#2A211C" opacity="0.12" />
    <g transform="rotate(-8 60 52)">
      <rect x="10" y="12" width="100" height="76" rx="18" fill="url(#s1a)" />
      <circle cx="26" cy="28" r="4" fill="#D9643A" />
      <circle cx="38" cy="28" r="4" fill="#F2BE4A" />
      <rect x="24" y="42" width="56" height="9" rx="4.5" fill="#2A211C" />
      <rect x="24" y="60" width="34" height="14" rx="7" fill="#B94E27" />
    </g>
  </svg>
);

const CompanyIcon = () => (
  <svg
    className={css.svg}
    width="112"
    height="104"
    viewBox="0 0 112 104"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="s2a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFBF4" />
        <stop offset="1" stopColor="#E5D4BE" />
      </linearGradient>
      <linearGradient id="s2b" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F7CF6E" />
        <stop offset="1" stopColor="#D99E2E" />
      </linearGradient>
      <linearGradient id="s2c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#C3D0B6" />
        <stop offset="1" stopColor="#8FA47F" />
      </linearGradient>
    </defs>
    <ellipse cx="56" cy="98" rx="44" ry="6" fill="#2A211C" opacity="0.12" />
    <rect x="40" y="6" width="62" height="72" rx="14" fill="url(#s2c)" />
    <rect x="26" y="14" width="62" height="72" rx="14" fill="url(#s2b)" />
    <rect x="12" y="22" width="62" height="72" rx="14" fill="url(#s2a)" />
    <rect x="22" y="38" width="34" height="7" rx="3.5" fill="#2A211C" />
    <rect
      x="22"
      y="52"
      width="24"
      height="6"
      rx="3"
      fill="#5C5048"
      opacity="0.4"
    />
    <rect x="22" y="70" width="20" height="11" rx="5.5" fill="#B94E27" />
  </svg>
);

const RedesignIcon = () => (
  <svg
    className={css.svg}
    width="104"
    height="104"
    viewBox="0 0 104 104"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="s3a" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stopColor="#D3DEC8" />
        <stop offset="1" stopColor="#8FA47F" />
      </radialGradient>
    </defs>
    <ellipse cx="52" cy="98" rx="38" ry="6" fill="#2A211C" opacity="0.12" />
    <circle cx="52" cy="50" r="42" fill="url(#s3a)" />
    <circle
      cx="52"
      cy="50"
      r="22"
      fill="none"
      stroke="#2A211C"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="104 34"
    />
    <path
      d="M68 28l2 14-14-2"
      fill="none"
      stroke="#2A211C"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BotIcon = () => (
  <svg
    className={css.svg}
    width="116"
    height="104"
    viewBox="0 0 116 104"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="s4a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F7CF6E" />
        <stop offset="1" stopColor="#D99E2E" />
      </linearGradient>
    </defs>
    <ellipse cx="58" cy="98" rx="42" ry="6" fill="#2A211C" opacity="0.12" />
    <path
      d="M12 22a16 16 0 0 1 16-16h60a16 16 0 0 1 16 16v38a16 16 0 0 1-16 16H46L26 94V76a16 16 0 0 1-14-16z"
      fill="url(#s4a)"
    />
    <path
      d="M24 16h44"
      stroke="#FFFFFF"
      strokeOpacity="0.55"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="38" cy="42" r="6" fill="#2A211C" />
    <circle cx="58" cy="42" r="6" fill="#2A211C" />
    <circle cx="78" cy="42" r="6" fill="#2A211C" />
  </svg>
);

const ICONS: Record<string, () => JSX.Element> = {
  landing: LandingIcon,
  firmowa: CompanyIcon,
  redesign: RedesignIcon,
  bot: BotIcon,
};

export const ServiceIllustration = ({
  serviceId,
}: ServiceIllustrationProps) => {
  const Icon = ICONS[serviceId];

  if (!Icon) {
    return null;
  }

  return <Icon />;
};
