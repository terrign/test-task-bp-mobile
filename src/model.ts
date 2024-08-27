import { TranslateKey } from '@/scripts/constants';

type TSrcSet = {
  x2: string;
  x3: string;
};

type TTranslateKey = (typeof TranslateKey)[keyof typeof TranslateKey];

type TTranslateMap = Record<TTranslateKey, string>;

export { type TSrcSet, type TTranslateMap, type TTranslateKey };
