const loadLang = (lang = 'en') => {
  return import(`./${ lang }.json`);
}

export default loadLang;
