import { ELocale } from '@/scripts/constants';
import de from '@/assets/lang/de.json';
import en from '@/assets/lang/en.json';
import fr from '@/assets/lang/fr.json';
import ja from '@/assets/lang/ja.json';
import pt from '@/assets/lang/pt.json';
import es from '@/assets/lang/es.json';

const translates = {
  [ELocale.EN]: en,
  [ELocale.DE]: de,
  [ELocale.FR]: fr,
  [ELocale.JA]: ja,
  [ELocale.PT]: pt,
  [ELocale.ES]: es,
};

export { translates };
