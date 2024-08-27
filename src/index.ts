import '@/styles/variables.css';
import '@/styles/global.css';
import { Header, Main, Footer } from '@/components';
import { create } from '@/utils';
import styles from './styles.module.css';

const createApp = (root: HTMLElement) => {
  const Content = create('div', { className: styles.wrapper }, Header(), Main(), Footer());

  root.appendChild(Content);

  const isInSafariStandaloneMode =
    'standalone' in window.navigator && window.navigator['standalone'];

  if (isInSafariStandaloneMode) {
    document.documentElement.dataset.fullScreen = 'true';
  }
};

createApp(document.querySelector('#app') as HTMLBodyElement);
