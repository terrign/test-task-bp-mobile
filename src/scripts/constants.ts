const TranslateKey = {
  MainHeading: 'Get Unlimited <br>Access',
  Feature1: 'Unlimited Art <br>Creation',
  Feature2: 'Exclusive <br>Styles',
  Feature3: 'Magic Avatars <br>With 20% Off',
  YearSelectorTitle: 'YEARLY ACCESS',
  BestOffer: 'BEST OFFER',
  AnnualPrice: 'Just {{price}} per year',
  WeekSelectorTitle: 'WEEKLY ACCESS',
  PricePerWeek: '{{price}} <br>per week',
  TermsOfUse: 'Terms of Use',
  PrivacyPolicy: 'Privacy Policy',
  Restore: 'Restore',
  Continue: 'Continue',
} as const;

enum ELocale {
  EN = 'en',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  JA = 'ja',
  PT = 'pt',
}

const DEFAULT_LOCALE = ELocale.EN;

export { TranslateKey, DEFAULT_LOCALE, ELocale };
