import css from './FooterIllustration.module.css';

export const FooterIllustration = () => {
  return (
    <svg className={css.svg} viewBox="0 0 560 200" aria-hidden="true">
      <defs>
        <radialGradient id="f-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F7D88A" stopOpacity="0.7" />
          <stop offset="1" stopColor="#F5EEE3" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="f-bulb" cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFE7A8" />
          <stop offset="0.55" stopColor="#F2BE4A" />
          <stop offset="1" stopColor="#D4952A" />
        </radialGradient>
        <linearGradient id="f-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9643A" />
          <stop offset="1" stopColor="#9A3F1E" />
        </linearGradient>
        <radialGradient id="f-s2" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#D3DEC8" />
          <stop offset="1" stopColor="#8FA47F" />
        </radialGradient>
        <radialGradient id="f-s3" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#F6D3C5" />
          <stop offset="1" stopColor="#D3917A" />
        </radialGradient>
      </defs>
      <circle cx="96" cy="96" r="96" fill="url(#f-glow)" />
      <ellipse cx="96" cy="190" rx="54" ry="8" fill="#2A211C" opacity="0.14" />
      <g stroke="#E2A73A" strokeWidth="6" strokeLinecap="round">
        <path d="M96 14v-12" />
        <path d="M54 30l-10-10" />
        <path d="M138 30l10-10" />
      </g>
      <g transform="translate(40 22) scale(0.66)">
        <path
          d="M100 20C150 20 180 58 180 100C180 132 160 152 146 170C138 180 134 190 134 200H66C66 190 62 180 54 170C40 152 20 132 20 100C20 58 50 20 100 20Z"
          fill="url(#f-bulb)"
        />
        <ellipse
          cx="70"
          cy="64"
          rx="16"
          ry="26"
          transform="rotate(-24 70 64)"
          fill="#FFFFFF"
          opacity="0.5"
        />
        <ellipse cx="80" cy="108" rx="7" ry="9" fill="#2A211C" />
        <ellipse cx="120" cy="108" rx="7" ry="9" fill="#2A211C" />
        <circle cx="82.5" cy="104.5" r="2.4" fill="#FFFFFF" />
        <circle cx="122.5" cy="104.5" r="2.4" fill="#FFFFFF" />
        <path
          d="M84 128Q100 146 116 128"
          stroke="#2A211C"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x="62"
          y="198"
          width="76"
          height="16"
          rx="8"
          fill="url(#f-base)"
        />
        <rect
          x="65"
          y="214"
          width="70"
          height="15"
          rx="7.5"
          fill="url(#f-base)"
        />
        <rect
          x="69"
          y="229"
          width="62"
          height="14"
          rx="7"
          fill="url(#f-base)"
        />
      </g>
      <circle cx="236" cy="166" r="26" fill="url(#f-s2)" />
      <circle cx="296" cy="182" r="14" fill="url(#f-s3)" />
      <circle cx="200" cy="96" r="8" fill="url(#f-s3)" />
    </svg>
  );
};
