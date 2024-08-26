import { config } from '@/components/main/features/config';
import { Feature } from './feature';
import styles from './styles.module.css';
import { create } from '@/utils';

const Features = () =>
  create('section', { className: styles.features }, ...config.map((it) => Feature(it)));

export { Features };
