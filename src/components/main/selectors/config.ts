import { TSelector } from '@/components/main/selectors/selector';
import { TranslateKey } from '@/scripts/constants';

import { t } from '@/scripts/localize';

const config: TSelector[] = [
  {
    title: t(TranslateKey.YearSelectorTitle),
    annualPrice: t(TranslateKey.AnnualPrice, { price: '$39.99' }),
    pricePerWeek: t(TranslateKey.PricePerWeek, { price: '$0.48' }),
    bestOffer: t(TranslateKey.BestOffer),
    href: 'https://apple.com/',
    defaultActive: true,
  },
  {
    title: t(TranslateKey.WeekSelectorTitle),
    annualPrice: null,
    pricePerWeek: t(TranslateKey.PricePerWeek, { price: '$6.99' }),
    bestOffer: null,
    href: 'https://google.com/',
  },
];

export { config };
