import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';

// const en = require('../i18n/en/locale.json');
// const de = require('../i18n/de/locale.json');
// const fr = require('../i18n/fr/locale.json');
// const nl = require('../i18n/nl/locale.json');

const i18n = i18next
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: 'i18n/{{lng}}/locale.json',
      addPath: 'i18n/{{lng}}/add/{{lng}}/{{ns}}',
      crossDomain: false,
      // parse: (data) => data,
      // ajax: loadLocales
    //   // loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    // lng: 'de',
    // have a common namespace used around the full app
    // ns: ["translations"],
    // defaultNS: "translations",

    // resources: {
    //   en: {
    //     translation: en
    //   },
    //   de: {
    //     translation: de
    //   },
    //   nl: {
    //     translation: nl
    //   },
    //   fr: {
    //     translation: fr
    //   }
    // },
    react: {
      wait: true
    }
  }, (err, t) => {
    // force loading en
    // i18next.t('i18n', { lng: 'de' }); 
  });

export default i18n;
