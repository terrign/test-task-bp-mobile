import { create } from '@/utils';
import { config } from './config';
import { Selector } from './selector';
import styles from './styles.module.css';

const Selectors = () =>
  create('section', { className: styles.selectors }, ...config.map((it) => Selector(it)));

export { Selectors };
