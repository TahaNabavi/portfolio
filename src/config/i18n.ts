export const LANGS = ["en", "ge", "fa"] as const;

export type Locale = (typeof LANGS)[number];

export type LanguageConfig = {
  label: string;
  nativeLabel: string;
  icon: string;
  rtl: boolean;
  fonts: {
    body: string;
  };
};

const languages = {
  en: {
    label: "English",
    nativeLabel: "English",
    icon: "/locales/en.png",
    rtl: false,
    fonts: {
      body: "var(--font-inter-en), Arial, Helvetica, sans-serif",
    },
  },
  ge: {
    label: "German",
    nativeLabel: "Deutsch",
    icon: "/locales/ge.png",
    rtl: false,
    fonts: {
      body: "var(--font-inter-en), Arial, Helvetica, sans-serif",
    },
  },
  fa: {
    label: "Persian",
    nativeLabel: "فارسی",
    icon: "/locales/fa.svg",
    rtl: true,
    fonts: {
      body: "var(--font-persian-fa), Tahoma, Arial, sans-serif",
    },
  },
} satisfies Record<Locale, LanguageConfig>;

const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && LANGS.includes(value as Locale));

const resolveLocale = (value: string | undefined): Locale =>
  isLocale(value) ? value : "en";

const TRANSLATION = {
  langs: LANGS,
  languages,
  default: "en" as Locale,
  isLocale,
  resolveLocale,
  getLanguage: (locale: string | undefined) => languages[resolveLocale(locale)],
};

export default TRANSLATION;
