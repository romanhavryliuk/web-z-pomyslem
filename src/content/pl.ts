// Усі тексти сайту. Рядки перенесені дослівно з plan-tresci-i-animacje.md.
//   — нерозривний пробіл: ціни й «1–2 dni» не мають розриватися між рядками.

export const meta = {
  title: 'web z pomysłem — strony i boty dla małych firm w Łodzi',
  description:
    'Szybkie strony internetowe i boty na Telegramie dla małych firm z Łodzi. Stała cena przed startem.',
  skipLink: 'Przejdź do treści',
} as const;

export const nav = {
  logo: 'web z pomysłem',
  ariaLabel: 'Główna nawigacja',
  links: [
    { label: 'Usługi i ceny', href: '#uslugi' },
    { label: 'Projekty', href: '#projekty' },
    { label: 'Jak pracuję', href: '#proces' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Wyceń projekt', href: '#kontakt' },
} as const;

export const hero = {
  eyebrow: 'Strony i boty dla małych firm · Łódź',
  // Фрагмент highlight має жовтий маркер, тому H1 розбитий на частини.
  // Після односкладового «z» — нерозривний пробіл: «z pomysłem» не рветься.
  title: {
    before: 'Strony ',
    highlight: 'z pomysłem',
    after: ', nie z szablonu.',
  },
  subtitle:
    'Projektuję i koduję szybkie strony oraz boty na Telegramie. Rozmawiasz bezpośrednio z osobą, która pisze kod, a cenę znasz przed startem.',
  // Назви й ціни беруться з services за id — щоб ціна в hero не розійшлася з картками.
  priceServiceIds: ['landing', 'firmowa'],
  priceSeparator: ' · ',
  primaryCta: { label: 'Wyceń projekt →', href: '#kontakt' },
  secondaryCta: { label: 'Zobacz projekty ↓', href: '#projekty' },
  note: 'Bezpłatna wycena na piśmie w 1–2 dni robocze',
  imageAlt:
    'Duża żarówka w stylu retro ze świecącym żarnikiem, w mosiężnej oprawie na terakotowej podstawie',
  mascotAlt: 'Żarówka — symbol pomysłu',
  visualCaption: 'Od pierwszej iskry do działającej strony.',
} as const;

export const trustBar = {
  ariaLabel: 'Co obiecuję',
  items: [
    { id: 'price', text: 'Stała cena na piśmie' },
    { id: 'reply', text: 'Odpowiadam w 1–2 dni robocze' },
    { id: 'ownership', text: 'Domena na Twoje dane, kod na własność' },
    { id: 'speed', text: 'Cel: PageSpeed 90+ na telefonie' },
    { id: 'languages', text: 'Po polsku i po ukraińsku' },
  ],
} as const;

export const servicesSection = {
  id: 'uslugi',
  eyebrow: '01 — Usługi i ceny',
  title: 'Co mogę dla Ciebie zrobić',
  lead: 'Cztery usługi z ceną „od” podaną z góry. Dokładną kwotę zapisujemy w wycenie, zanim cokolwiek zapłacisz.',
  forWhomLabel: 'Dla kogo:',
} as const;

// id збігаються з id опцій поля «Czego potrzebujesz?» у contactForm.fields.services.
export const services = [
  {
    id: 'landing',
    title: 'Landing page',
    promise: 'Jedna strona, jeden cel: zapytania od klientów.',
    forWhom: 'nowa firma, kampania albo jedna usługa do wypromowania.',
    includes: [
      'Układ i treść nastawione na jedno działanie: telefon, formularz, zapis',
      'Wersja mobilna i podstawowe SEO',
      'Formularz z powiadomieniem na e-mail',
    ],
    price: 'od 800 zł',
    time: '7–14 dni',
    cta: 'Wyceń landing →',
  },
  {
    id: 'firmowa',
    title: 'Strona firmowa',
    promise: 'Klient znajdzie odpowiedź, zanim do Ciebie zadzwoni.',
    forWhom: 'firma usługowa, która chce być widoczna w Łodzi i okolicach.',
    includes: [
      'Do 6 podstron i formularz',
      'Mapa, lokalne SEO i pomoc z profilem firmy w Google',
      'Panel do edycji tekstów i zdjęć',
    ],
    price: 'od 2 500 zł',
    time: '2–4 tygodnie',
    cta: 'Wyceń stronę →',
  },
  {
    id: 'redesign',
    title: 'Redesign',
    promise:
      'Masz już stronę, ale wolno się ładuje albo źle wygląda na telefonie.',
    forWhom: 'firma ze stroną sprzed lat, która nie przynosi zapytań.',
    includes: [
      'Wynik PageSpeed przed i po',
      'Nowy wygląd, Twoje dotychczasowe treści',
      'Przekierowania starych adresów',
    ],
    price: 'od 1 000 zł',
    time: '1–3 tygodnie',
    cta: 'Wyceń redesign →',
  },
  {
    id: 'bot',
    title: 'Boty na Telegramie',
    promise: 'Odpowiada klientom, kiedy Ty pracujesz.',
    forWhom:
      'salony, warsztaty i sklepy, które przyjmują zapisy na czacie, np. z klientami z Ukrainy.',
    includes: [
      'Zapisy i przypomnienia',
      'Powiadomienia o zamówieniach',
      'Odpowiedzi na częste pytania',
    ],
    price: 'od 999 zł',
    time: '1–3 tygodnie',
    cta: 'Wyceń bota →',
  },
] as const;

export const care = {
  title: 'Opieka nad stroną — od 99 zł / mies.',
  text: 'Aktualizacje, kopie zapasowe i drobne zmiany treści. Możesz zrezygnować w dowolnym miesiącu.',
  cta: { label: 'Zapytaj o opiekę →', href: '#kontakt' },
} as const;

export const projectsSection = {
  id: 'projekty',
  eyebrow: '02 — Projekty',
  title: 'Projekty, które możesz kliknąć',
  lead: 'Na razie pokazuję własne projekty i jeden projekt pokazowy dla fikcyjnej firmy z Łodzi. Wszystkie działają — sprawdź je na telefonie.',
} as const;

export const featuredProject = {
  id: 'od-nowa',
  badge: 'Projekt pokazowy · marka fikcyjna',
  title: 'OD NOWA',
  lead: 'Landing page usługi prania kanap z dojazdem w Łodzi.',
  description:
    'Kompletna strona: wygodna na telefonie, szybko się ładuje, ma jasną ofertę i formularz zapytania (w trybie demo). Tak może wyglądać Twoja.',
  tech: ['HTML · CSS · JavaScript', 'Vite', 'GitHub Pages'],
  demo: {
    label: 'Zobacz demo →',
    href: 'https://romanhavryliuk.github.io/od-nowa/',
  },
  code: {
    label: 'Kod na GitHubie',
    href: 'https://github.com/romanhavryliuk/od-nowa',
  },
  imageAlt: 'Strona OD NOWA na komputerze i telefonie',
  // Тексти декоративної мініатюри сайту OD NOWA (з макету).
  mock: {
    eyebrow: 'Pranie kanap z dojazdem · Łódź',
    title: 'Twoja kanapa.',
    button: 'Wyceń pranie',
    features: ['U Ciebie w domu', 'Z uwagą na tkaninę', 'Bez zgadywania ceny'],
  },
} as const;

export const projects = [
  {
    id: 'cosmogram',
    type: 'Aplikacja',
    title: 'Cosmogram',
    description:
      'Aplikacja astrologiczna w 3 językach. Next.js, Express, MongoDB.',
    href: 'https://cosmogram-front.vercel.app',
    linkLabel: 'Zobacz projekt →',
    ariaLabel: 'Zobacz projekt Cosmogram',
  },
  {
    id: 'mindterms',
    type: 'Serwis wiedzy',
    title: 'mindterms',
    description:
      '48 pojęć psychologicznych wyjaśnionych prostym językiem — po polsku, ukraińsku i angielsku.',
    href: 'https://mindterms.vercel.app',
    linkLabel: 'Zobacz projekt →',
    ariaLabel: 'Zobacz projekt mindterms',
  },
  {
    id: 'pixasearch',
    type: 'Projekt zespołowy',
    title: 'PixaSearch',
    description: 'Wyszukiwarka zdjęć w Next.js, zbudowana w zespole.',
    href: 'https://pixa-search-ruddy.vercel.app',
    linkLabel: 'Zobacz projekt →',
    ariaLabel: 'Zobacz projekt PixaSearch',
  },
  {
    id: 'getmatch',
    type: 'Bot na Telegramie',
    title: 'GetMatch UA',
    description:
      'Bot randkowy z profilami i wzajemnymi polubieniami. Node.js, TypeScript.',
    href: 'https://t.me/getmatch_ua_bot',
    linkLabel: 'Otwórz bota →',
    ariaLabel: 'Otwórz bota GetMatch UA',
  },
] as const;

export const audit = {
  title: 'Masz już stronę?',
  text: 'Sprawdzę ją za darmo i wyślę Ci 3 konkretne rzeczy do poprawy razem z wynikiem PageSpeed. Bez zobowiązań.',
  // Поки веде лише до форми; автоматичне відмічання «Mini-audyt» — окрема задача.
  cta: { label: 'Poproś o mini-audyt', href: '#kontakt' },
} as const;

export const processSection = {
  id: 'proces',
  eyebrow: '03 — Jak pracuję',
  title: 'Od rozmowy do publikacji w 4 krokach',
  lead: 'Łączny czas podaję w wycenie: landing zwykle 7–14 dni, strona firmowa 2–4 tygodnie.',
  steps: [
    {
      id: 'rozmowa',
      label: 'Krok 1 · 15 min',
      title: 'Rozmowa',
      text: 'Online albo przy kawie w Łodzi. Wycenę na piśmie dostajesz w 1–2 dni.',
    },
    {
      id: 'projekt',
      label: 'Krok 2 · zwykle 2–4 dni',
      title: 'Projekt',
      text: 'Makieta i styl. Poprawiamy, zanim napiszę kod.',
    },
    {
      id: 'kodowanie',
      label: 'Krok 3 · zwykle 1–2 tygodnie',
      title: 'Kodowanie',
      text: 'Postęp widzisz na bieżąco pod roboczym linkiem.',
    },
    {
      id: 'start',
      label: 'Krok 4 · 30 dni poprawek gratis',
      title: 'Start i opieka',
      text: 'Podpinam domenę i analitykę, publikuję stronę. Przez 30 dni drobne poprawki robię bez dopłat.',
    },
  ],
} as const;

export const about = {
  id: 'o-mnie',
  eyebrow: '04 — O mnie',
  title: 'Cześć, jestem Roman',
  text: 'Jestem frontend developerem z Łodzi. Pracuję z Reactem, Next.js i TypeScriptem, a boty buduję w Node.js. Po godzinach tworzę muzykę, więc lubię, kiedy strona ma rytm. Rozmawiam po polsku i po ukraińsku.',
  chips: [
    'Polski i ukraiński',
    'React · Next.js · TypeScript',
    'Node.js · boty na Telegramie',
    'Łódź',
  ],
  photoPlaceholder: '[Twoje zdjęcie]',
  photoAlt: 'Roman, twórca web z pomysłem',
} as const;

export const faqSection = {
  id: 'faq',
  eyebrow: '05 — FAQ',
  title: 'Częste pytania',
} as const;

export const faq = [
  {
    id: 'sam',
    question: 'Pracujesz sam? Co, jeśli zachorujesz?',
    answer:
      'Tak, rozmawiasz z osobą, która pisze kod. Domena i hosting są na Twoje dane, a kod należy do Ciebie, więc stronę zawsze może przejąć ktoś inny.',
  },
  {
    id: 'faktura',
    question: 'Wystawiasz fakturę?',
    answer:
      'Formę rozliczenia ustalamy przed startem i wpisujemy do umowy. Zapytaj przy wycenie, a powiem, jak to wygląda w Twoim przypadku.',
  },
  {
    id: 'czas',
    question: 'Ile trwa stworzenie strony?',
    answer:
      'Landing page zwykle 7–14 dni, strona firmowa 2–4 tygodnie. Termin zapisujemy w wycenie.',
  },
  {
    id: 'google',
    question: 'Czy strona będzie widoczna w Google?',
    answer:
      'Ma podstawowe SEO i szybko się ładuje. Pomogę założyć profil firmy w Google. Konkretnej pozycji w wynikach nikt uczciwie nie zagwarantuje.',
  },
  {
    id: 'wlasnosc',
    question: 'Czy strona będzie moja?',
    answer:
      'Tak. Domenę kupujesz na swoje dane, a po odbiorze dostajesz cały kod. Opieka jest opcjonalna.',
  },
  {
    id: 'platnosc',
    question: 'Jak wygląda płatność?',
    answer:
      '50% przed startem, 50% po odbiorze. Cena się nie zmienia, chyba że razem rozszerzymy zakres.',
  },
] as const;

export const contact = {
  id: 'kontakt',
  status: 'Wolne terminy: [miesiąc]',
  title: 'Bezpłatna wycena albo mini-audyt Twojej strony',
  text: 'Napisz kilka słów o firmie. Odpowiem z wyceną albo pytaniami, a jeśli masz już stronę — także z mini-audytem.',
  // Заглушки в [дужках] Роман заповнює сам.
  // Порядок: спершу канали, якими користується більшість поляків, Telegram — останнім.
  channels: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+48 [numer]',
      href: 'https://wa.me/48[numer]',
    },
    {
      id: 'email',
      label: 'E-mail',
      value: 'kontakt@webzpomyslem.pl',
      href: 'mailto:kontakt@webzpomyslem.pl',
    },
    {
      id: 'phone',
      label: 'Telefon',
      value: '+48 [numer]',
      href: 'tel:+48[numer]',
    },
    {
      id: 'telegram',
      label: 'Telegram — także po ukraińsku',
      value: '@[twój_nick]',
      href: 'https://t.me/[twój_nick]',
    },
  ],
} as const;

export const contactForm = {
  ariaLabel: 'Formularz kontaktowy',
  optionalHint: '(opcjonalnie)',
  // isRequired — для серверної валідації на етапі відправки.
  fields: {
    name: {
      label: 'Imię',
      placeholder: 'Jak masz na imię?',
      isRequired: true,
    },
    contact: {
      label: 'E-mail lub telefon',
      placeholder: 'Jak mogę odpowiedzieć?',
      isRequired: true,
    },
    services: {
      label: 'Czego potrzebujesz?',
      isRequired: false,
      options: [
        { id: 'landing', label: 'Landing page' },
        { id: 'firmowa', label: 'Strona firmowa' },
        { id: 'redesign', label: 'Redesign' },
        { id: 'bot', label: 'Bot na Telegramie' },
        { id: 'audyt', label: 'Mini-audyt' },
      ],
    },
    message: {
      label: 'Kilka słów o firmie',
      placeholder: 'Np. salon fryzjerski w Łodzi, chcę zapisy przez stronę',
      isRequired: false,
    },
  },
  consent: {
    before:
      'Twoje dane wykorzystam tylko do odpowiedzi na zapytanie. Szczegóły: ',
    linkLabel: 'Polityka prywatności',
    href: '/polityka-prywatnosci',
    after: '.',
  },
  submit: 'Wyślij zapytanie',
  note: 'Formularz jeszcze nie wysyła wiadomości. Do tego czasu napisz do mnie bezpośrednio — kontakty znajdziesz w tej sekcji.',
  // notReady — поки форма не надсилає. Решта — для етапу відправки (Server Action), поки не використовується свідомо. Потребують вичитки носієм.
  messages: {
    notReady:
      'Wiadomość nie została wysłana — formularz jeszcze nie działa. Napisz do mnie bezpośrednio, kontakty znajdziesz w tej sekcji.',
    sending: 'Wysyłam…',
    success: 'Dziękuję! Twoje zapytanie dotarło. Odpowiem w 1–2 dni robocze.',
    error:
      'Coś poszło nie tak. Spróbuj ponownie albo napisz na WhatsAppie lub e-mailem.',
    rateLimited: 'Za dużo prób. Spróbuj ponownie za kilka minut.',
    nameInvalid: 'Podaj swoje imię.',
    contactInvalid: 'Podaj e-mail lub numer telefonu, żebym mógł odpowiedzieć.',
  },
} as const;

export const footer = {
  logoLines: ['web z', 'pomysłem'],
  columns: [
    {
      id: 'uslugi',
      title: 'Usługi',
      links: [
        { label: 'Landing page', href: '#uslugi' },
        { label: 'Strona firmowa', href: '#uslugi' },
        { label: 'Redesign i opieka', href: '#uslugi' },
        { label: 'Boty na Telegramie', href: '#uslugi' },
      ],
    },
    {
      id: 'strona',
      title: 'Strona',
      links: [
        { label: 'Projekty', href: '#projekty' },
        { label: 'Jak pracuję', href: '#proces' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Kontakt', href: '#kontakt' },
      ],
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      links: [
        { label: 'WhatsApp', href: 'https://wa.me/48[numer]' },
        { label: 'Telegram', href: 'https://t.me/[twój_nick]' },
        {
          label: 'kontakt@webzpomyslem.pl',
          href: 'mailto:kontakt@webzpomyslem.pl',
        },
        { label: 'GitHub', href: 'https://github.com/romanhavryliuk' },
      ],
    },
  ],
  copyright:
    '© 2026 web z pomysłem — szybkie strony i boty na Telegramie dla małych firm z Łodzi.',
  // Сторінки cookies немає: сайт нічого не зберігає на пристрої (ст. 399 PKE).
  // Повернути посилання, якщо з'явиться аналітика, карти чи вбудоване відео.
  legalLinks: [
    { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  ],
} as const;
