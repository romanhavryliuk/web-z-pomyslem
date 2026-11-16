type ProcessBulbProps = {
  level: number;
};

const BULB_PATH =
  'M20 2C30.5 2 37 9.5 37 18c0 6.5-3.6 10.2-6.2 13.5-1.4 1.8-2 3.6-2 5.5H11.2c0-1.9-.6-3.7-2-5.5C6.6 28.2 3 24.5 3 18 3 9.5 9.5 2 20 2z';

// Кожен крок — яскравіша лампочка: від сірої (1) до палаючої (4).
type GradientStop = { offset: number; color: string };

const GRADIENT_STOPS: Record<number, GradientStop[]> = {
  1: [
    { offset: 0, color: '#EFE8DE' },
    { offset: 1, color: '#C9BCAB' },
  ],
  2: [
    { offset: 0, color: '#FBF0D2' },
    { offset: 1, color: '#E5CD94' },
  ],
  3: [
    { offset: 0, color: '#FCE3A0' },
    { offset: 1, color: '#E7B444' },
  ],
  4: [
    { offset: 0, color: '#FFE7A8' },
    { offset: 0.55, color: '#F2BE4A' },
    { offset: 1, color: '#D4952A' },
  ],
};

const LIT_LEVEL = 4;

export const ProcessBulb = ({ level }: ProcessBulbProps) => {
  const stops = GRADIENT_STOPS[level] ?? GRADIENT_STOPS[1];
  const gradientId = `pb${level}`;
  const isLit = level === LIT_LEVEL;

  return (
    <svg
      width={isLit ? 56 : 40}
      height="52"
      viewBox={isLit ? '-8 0 56 52' : '0 0 40 52'}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId} cx="0.36" cy="0.3" r="0.8">
          {stops.map((stop) => (
            <stop
              key={stop.color}
              offset={stop.offset}
              stopColor={stop.color}
            />
          ))}
        </radialGradient>
      </defs>
      {isLit && (
        <g stroke="#E2A73A" strokeWidth="3" strokeLinecap="round">
          <path d="M-4 10l5 3" />
          <path d="M44 10l-5 3" />
          <path d="M-6 22h5" />
          <path d="M46 22h-5" />
        </g>
      )}
      <path d={BULB_PATH} fill={`url(#${gradientId})`} />
      <rect x="11.5" y="38" width="17" height="5" rx="2.5" fill="#9A3F1E" />
      <rect x="13.5" y="44" width="13" height="4.5" rx="2.25" fill="#9A3F1E" />
    </svg>
  );
};
