import type { Metadata } from 'next';
import { Onest, Unbounded } from 'next/font/google';
import { meta, nav } from '@/content/pl';
import { SITE_LOCALE, SITE_URL } from '@/lib/site';
import './globals.css';

// next/font завантажує шрифти під час білду й віддає з нашого домену —
// браузер відвідувача не звертається до Google (питання RODO).
// Кирилиці у видимих текстах немає (сайт польською) — її файли лише конкурували з фото hero. Повернути 'cyrillic', коли з'явиться україномовний текст.
const onest = Onest({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-onest',
});

const unbounded = Unbounded({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '700'],
  variable: '--font-unbounded',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/',
    siteName: nav.logo,
    title: meta.title,
    description: meta.description,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pl" className={`${onest.variable} ${unbounded.variable}`}>
      <body>
        <a href="#tresc" className="skip-link">
          {meta.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
