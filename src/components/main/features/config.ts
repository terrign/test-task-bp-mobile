import { type TFeature } from './feature';
import { TranslateKey } from '@/scripts/constants';
import { type TSrcSet } from '@/model';

import feature_1_x2_webp from '@/assets/images/f1@2x.png?as=webp';
import feature_1_x3_webp from '@/assets/images/f1@3x.png?as=webp';

import feature_2_x2_webp from '@/assets/images/f2@2x.png?as=webp';
import feature_2_x3_webp from '@/assets/images/f2@3x.png?as=webp';

import feature_3_x2_webp from '@/assets/images/f3@2x.png?as=webp';
import feature_3_x3_webp from '@/assets/images/f3@3x.png?as=webp';

import feature_1_x2_jpg from '@/assets/images/f1@2x.png?as=jpg';
import feature_1_x3_jpg from '@/assets/images/f1@3x.png?as=jpg';

import feature_2_x2_jpg from '@/assets/images/f2@2x.png?as=jpg';
import feature_2_x3_jpg from '@/assets/images/f2@3x.png?as=jpg';

import feature_3_x2_jpg from '@/assets/images/f3@2x.png?as=jpg';
import feature_3_x3_jpg from '@/assets/images/f3@3x.png?as=jpg';
import { t } from '@/scripts/localize';

const createSrcSet = ({ x2, x3 }: TSrcSet) => `${x2} 2x, ${x3} 3x`;

const config: TFeature[] = [
  {
    sourceSrcSet: createSrcSet({
      x2: feature_1_x2_webp,
      x3: feature_1_x3_webp,
    }),
    textContent: t(TranslateKey.Feature1),
    fallbackSrcSet: createSrcSet({
      x2: feature_1_x2_jpg,
      x3: feature_1_x3_jpg,
    }),
  },
  {
    sourceSrcSet: createSrcSet({
      x2: feature_2_x2_webp,
      x3: feature_2_x3_webp,
    }),
    textContent: t(TranslateKey.Feature2),
    fallbackSrcSet: createSrcSet({
      x2: feature_2_x2_jpg,
      x3: feature_2_x3_jpg,
    }),
  },
  {
    sourceSrcSet: createSrcSet({
      x2: feature_3_x2_webp,
      x3: feature_3_x3_webp,
    }),
    textContent: t(TranslateKey.Feature3),
    fallbackSrcSet: createSrcSet({
      x2: feature_3_x2_jpg,
      x3: feature_3_x3_jpg,
    }),
  },
];

export { config };
