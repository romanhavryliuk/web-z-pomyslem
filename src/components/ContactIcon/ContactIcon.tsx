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
      {channelId === 'whatsapp' && (
        <>
          <path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8 18.8z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
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
