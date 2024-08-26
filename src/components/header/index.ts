import { create } from '@/utils';
import styles from './styles.module.css';

const Header = () => {
  const CloseIcon = create('span', { className: styles.closeIcon });

  const CloseButton = create(
    'a',
    {
      className: styles.closeButton,
      href: '#',
      title: 'Close',
    },
    CloseIcon,
  );

  return create('header', { className: styles.header }, CloseButton);
};

export { Header };
