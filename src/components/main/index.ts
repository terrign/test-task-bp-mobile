import { Features } from './features';
import { TranslateKey } from '@/scripts/constants';
import { t } from '@/scripts/localize';
import { Selectors } from '@/components/main/selectors';
import { create } from '@/utils';
import { config } from '@/components/main/selectors/config';
import styles from './styles.module.css';

const continueId = 'continue';

const Main = () => {
  const Heading = create('h1', {
    className: styles.mainHeading,
    innerHTML: t(TranslateKey.MainHeading),
  });

  const Continue = create('a', {
    className: `${styles.button} ${styles.continue}`,
    innerHTML: t(TranslateKey.Continue),
    id: continueId,
    href: config.find((selector) => selector.defaultActive)?.href,
  });

  return create('main', { className: styles.main }, Heading, Features(), Selectors(), Continue);
};

const getContinueButton = () => document.querySelector(`#${continueId}`) as HTMLAnchorElement;

export { Main, getContinueButton };
