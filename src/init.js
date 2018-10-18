import { library }  from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import store from './store';
import { loadLiterals } from './store/literals';
import loadLang from './i18n';

const registerFontawesome = () => {
  return library.add(far, fas);
};

const registerLanguage = () => {
  return loadLang().then(
    lang => store.dispatch(loadLiterals(lang))
  );
};

export {
  registerFontawesome,
  registerLanguage,
}
