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
    alt: textContent,
    height: 140,
    width: 105,
    className: styles.image,
  });

  const Picture = create('picture', { className: styles.picture }, Source, Image);

  //see https://github.com/facebook/react/issues/22684
  Image.srcset = fallbackSrcSet;

  const Text = create('p', {
    className: styles.text,
    innerHTML: textContent,
  });

  const Content = create('div', { className: styles.content }, Text);

  return create('div', { className: styles.feature }, Picture, Content);
};

export { Feature, type TFeature };
