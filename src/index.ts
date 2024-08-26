import '@/styles/variables.css';
import '@/styles/global.css';
import '@/components/header';

import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';
import { create } from '@/utils';
import styles from './styles.module.css';

const createApp = (root: HTMLElement) => {
  const Content = create('div', { className: styles.wrapper }, Header(), Main(), Footer());

  root.appendChild(Content);

  const isInSafariStandaloneMode =
    'standalone' in window.navigator && window.navigator['standalone'];

  //full viewport height in fullscreen mode;
  if (isInSafariStandaloneMode) {
    document.body.style.height = '100vh';
  }
};

createApp(document.querySelector('#app') as HTMLBodyElement);

// const ratio = window.devicePixelRatio;

// app.append(`Ratio: ${ratio}`);
// app.appendChild(document.createElement('br'));
// app.append(`safe-area-inset-top: ${top}`);
// app.appendChild(document.createElement('br'));
// app.append(`safe-area-inset-right: ${right}`);
// app.appendChild(document.createElement('br'));
// app.append(`safe-area-inset-bottom: ${bottom}`);
// app.appendChild(document.createElement('br'));
// app.append(`safe-area-inset-left: ${left}`);
// app.appendChild(document.createElement('br'));
// app.append(t);
// app.append(JSON.stringify(t, undefined, 4));
