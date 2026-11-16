'use client';

import type { FormEvent } from 'react';
import { contactForm } from '@/content/pl';
import { Button } from '@/components/Button';
import css from './ContactForm.module.css';

const { fields, consent } = contactForm;

export const ContactForm = () => {
  // Відправка ще не підключена (Server Action — окремий етап).
  // Без preventDefault браузер відправив би дані GET-запитом і показав би їх в адресі.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      aria-label={contactForm.ariaLabel}
      className={css.form}
      onSubmit={handleSubmit}
    >
      <div className={css.row}>
        <label htmlFor="contact-name" className={css.label}>
          <span>
            {fields.name.label}
            <span aria-hidden="true"> *</span>
          </span>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            placeholder={fields.name.placeholder}
            className={css.input}
          />
        </label>
        <label htmlFor="contact-contact" className={css.label}>
          <span>
            {fields.contact.label}
            <span aria-hidden="true"> *</span>
          </span>
          <input
            id="contact-contact"
            name="contact"
            type="text"
            required
            autoComplete="email"
            placeholder={fields.contact.placeholder}
            className={css.input}
          />
        </label>
      </div>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>
          {fields.services.label}{' '}
          <span className={css.optional}>{contactForm.optionalHint}</span>
        </legend>
        <div className={css.options}>
          {fields.services.options.map((option) => (
            <label key={option.id} className={css.option}>
              <input
                type="checkbox"
                name="services"
                value={option.id}
                className={css.checkbox}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor="contact-message" className={css.label}>
        <span>
          {fields.message.label}{' '}
          <span className={css.optional}>{contactForm.optionalHint}</span>
        </span>
        <textarea
          id="contact-message"
          name="message"
          rows={2}
          placeholder={fields.message.placeholder}
          className={`${css.input} ${css.textarea}`}
        />
      </label>

      <p className={css.consent}>
        {consent.before}
        <a href={consent.href} className={css.consentLink}>
          {consent.linkLabel}
        </a>
        {consent.after}
      </p>

      <Button type="submit" size="lg" className={css.submit}>
        {contactForm.submit}
      </Button>
      <p className={css.note}>{contactForm.note}</p>
    </form>
  );
};
