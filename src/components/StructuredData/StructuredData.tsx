import { contact, meta, nav } from '@/content/pl';
import { SITE_URL } from '@/lib/site';

const EMAIL_CHANNEL_ID = 'email';

// Телефон не додаємо, поки в контактах заглушка: биті дані гірші, ніж жодних.
const email = contact.channels.find(
  (channel) => channel.id === EMAIL_CHANNEL_ID,
)?.value;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: nav.logo,
  description: meta.description,
  url: SITE_URL,
  email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Łódź',
    addressCountry: 'PL',
  },
  areaServed: { '@type': 'City', name: 'Łódź' },
  knowsLanguage: ['pl', 'uk'],
};

// Заміна «<» не дає рядку з даних закрити тег <script> (рекомендація Next.js).
const serializedData = JSON.stringify(structuredData).replace(/</g, '\\u003c');

export const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedData }}
    />
  );
};
