import css from './ContactIcon.module.css';

type ContactIconProps = {
  channelId: string;
};

export const ContactIcon = ({ channelId }: ContactIconProps) => {
  return (
    <svg
      className={css.icon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {channelId === 'telegram' && (
        <>
          <path d="M21 4L3 11l6 2 2 6 3-4 5 4z" />
          <path d="M9 13l12-9" />
        </>
      )}
      {channelId === 'email' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M4 7l8 6 8-6" />
        </>
      )}
      {channelId === 'phone' && (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      )}
    </svg>
  );
};
