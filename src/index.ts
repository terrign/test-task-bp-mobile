import '@/styles/variables.css';
import '@/styles/global.css';
import { Header, Main, Footer } from '@/components';
import { create } from '@/utils';
import styles from './styles.module.css';
import { isFullscreen } from '@/scripts/isFullscreen';

const createApp = (root: HTMLElement) => {
  if (isFullscreen()) {
    document.documentElement.dataset.fullScreen = 'true';
  }

  const Content = create('div', { className: styles.wrapper }, Header(), Main(), Footer());

  root.appendChild(Content);
};

createApp(document.querySelector('#app') as HTMLBodyElement);
