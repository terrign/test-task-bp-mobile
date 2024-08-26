import { DEFAULT_LOCALE, ELocale } from '@/scripts/constants';
import { translates } from './translates';
import { TTranslateKey } from '@/model';

const isSupportedLocale = (candidate: string): candidate is ELocale => {
  return Object.values(ELocale).includes(candidate.toLowerCase() as ELocale);
};

const getSupportedSystemLocale = () =>
  navigator.languages
    .map((it) => it.split('-')[0]) //maybe in **-** format
    .filter(isSupportedLocale)
    .shift();

const setLocale = (href: string): ELocale => {
  const locale = getSupportedSystemLocale() ?? DEFAULT_LOCALE;

  const newUrl = new URL(href);

  newUrl.searchParams.set('lang', locale);
  window.history.replaceState({}, '', newUrl.toString());

  return locale;
};

const localize = () => {
  const { href, searchParams } = new URL(window.location.href);

  let locale = searchParams.get('lang');

  if (!locale || !isSupportedLocale(locale)) {
    locale = setLocale(href);
  }

  document.documentElement.lang = locale;

  return translates[locale as ELocale];
};

const map = localize();

const t = (key: TTranslateKey, interpolations?: Record<string, string>) => {
  let translate = map[key];

  if (interpolations) {
    for (const key in interpolations) {
      translate = translate.replace(`{{${key}}}`, interpolations[key]);
    }
  }

  return translate;
};

export { t };
