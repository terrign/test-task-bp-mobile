import { create } from '@/utils';
import styles from './styles.module.css';

const LinkButton = ({ href, text }: { href: string; text?: string }) =>
  create('a', {
    className: styles.linkButton,
    href,
    textContent: text,
  });

export { LinkButton };
