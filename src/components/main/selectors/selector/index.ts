import { create } from '@/utils';
import styles from './ styles.module.css';
import { LinkButton } from '@/components/main/linkButton';

type TSelector = {
  title: string;
  pricePerWeek: string;
  annualPrice: string | null;
  bestOffer: string | null;
  href: string;
};

const Selector = ({ title, pricePerWeek, annualPrice, bestOffer, href }: TSelector) => {
  const elem = LinkButton({ href });
  elem.classList.add(styles.selector);

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

    elem.classList.add(styles.selectorActive);
    elem.appendChild(BestOffer);
  }

  elem.appendChild(Wrapper);
  elem.appendChild(PerWeekPrice);

  return elem;
};

export { Selector, type TSelector };
