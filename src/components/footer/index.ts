import { create } from '@/utils';
import { config } from './config';
import styles from './styles.module.css';

const Footer = () => {
  const elem = create('footer');

  const LinkList = create('ul', { className: styles.list });

  for (const { href, text } of config) {
    const Link = create('a', {
      textContent: text,
      href,
    });

    const ListItem = create('li', {}, Link);

    LinkList.appendChild(ListItem);
  }

  const Nav = create('nav', { className: styles.nav }, LinkList);

  elem.appendChild(Nav);

  return elem;
};

export { Footer };
