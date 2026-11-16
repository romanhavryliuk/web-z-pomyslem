import { contact } from '@/content/pl';
import { ContactForm } from '@/components/ContactForm';
import { ContactIcon } from '@/components/ContactIcon';
import { Pill } from '@/components/Pill';
import css from './Contact.module.css';

const TITLE_ID = 'kontakt-title';

export const Contact = () => {
  return (
    <section
      id={contact.id}
      aria-labelledby={TITLE_ID}
      className={`container ${css.section}`}
    >
      <div className={css.box}>
        <div className={css.intro}>
          <Pill variant="status">{contact.status}</Pill>
          <h2 id={TITLE_ID} className={css.title}>
            {contact.title}
          </h2>
          <p className={css.text}>{contact.text}</p>
          <ul className={css.channels}>
            {contact.channels.map((channel) => (
              <li key={channel.id}>
                <a href={channel.href} className={css.channel}>
                  <span className={css.channelIcon}>
                    <ContactIcon channelId={channel.id} />
                  </span>
                  <span className={css.channelText}>
                    <span className={css.channelLabel}>{channel.label}</span>
                    <span className={css.channelValue}>{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
