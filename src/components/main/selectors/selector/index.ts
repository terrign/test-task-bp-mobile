import { create } from '@/utils';
import { getContinueButton } from '@/components/main';
import styles from './styles.module.css';
import mainStyles from '@/components/main/styles.module.css';

type TSelector = {
  title: string;
  pricePerWeek: string;
  annualPrice: string | null;
  bestOffer: string | null;
  href: string;
  defaultActive?: boolean;
};

const Selector = ({
  title,
  pricePerWeek,
  annualPrice,
  bestOffer,
  href,
  defaultActive,
}: TSelector) => {
  const elem = create('div', {
    className: `${styles.selector} ${mainStyles.button} ${defaultActive ? styles.selectorActive : ''}`,
  });

  const clickHandler = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;

    if (target.classList.contains(styles.selectorActive)) {
      return;
    }

    document.querySelectorAll(`.${styles.selector}`).forEach((it) => {
      it.classList.toggle(styles.selectorActive);
    });

    getContinueButton().href = href;
  };

  elem.addEventListener('click', clickHandler);

  const Title = create('p', {
    className: styles.title,
    innerHTML: title,
  });

  const PerWeekPrice = create('p', {
    className: styles.perWeekPrice,
    innerHTML: pricePerWeek,
  });

  const Wrapper = create('div', { className: styles.wrapper }, Title);

  if (annualPrice) {
    const AnnualPrice = create('p', {
      className: styles.annualPrice,
      innerHTML: annualPrice,
    });

    Wrapper.appendChild(AnnualPrice);
  }

  if (bestOffer) {
    const BestOffer = create('span', { className: styles.bestOffer, innerHTML: bestOffer });
    elem.appendChild(BestOffer);
  }

  elem.appendChild(Wrapper);
  elem.appendChild(PerWeekPrice);

  return elem;
};

export { Selector, type TSelector };
