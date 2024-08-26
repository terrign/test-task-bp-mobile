import { create } from '@/utils';
import styles from './styles.module.css';

type TFeature = {
  textContent: string;
  sourceSrcSet: string;
  fallbackSrcSet: string;
};

const Feature = ({ textContent, sourceSrcSet, fallbackSrcSet }: TFeature) => {
  const Source = create('source', {
    type: 'image/webp',
    srcset: sourceSrcSet,
  });

  const Image = create('img', {
    srcset: fallbackSrcSet,
    alt: textContent,
    height: 140,
    width: 105,
  });

  const Picture = create('picture', { className: styles.picture }, Source, Image);

  const Text = create('p', {
    className: styles.text,
    innerHTML: textContent,
  });

  const Content = create('div', { className: styles.content }, Text);

  return create('div', { className: styles.feature }, Picture, Content);
};

export { Feature, type TFeature };
