import { Features } from './features';
import { TranslateKey } from '@/scripts/constants';
import styles from './styles.module.css';
import { t } from '@/scripts/localize';
import { LinkButton } from '@/components/main/linkButton';
import { Selectors } from '@/components/main/selectors';
import { create } from '@/utils';

const Main = () => {
  const Heading = create('h1', {
    className: styles.mainHeading,
    innerHTML: t(TranslateKey.MainHeading),
  });

  const Continue = LinkButton({
 href: '#',
text: t(TranslateKey.Continue) 
});

  Continue.classList.add(styles.continue);

  return create('main', {}, Heading, Features(), Selectors(), Continue);
};

export { Main };
