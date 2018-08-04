import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { PhraseAppProvider } from 'react-i18next-phraseapp';

import MyApp from './MyApp';
import i18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <MyApp />
  </I18nextProvider>,
  document.getElementById('root')
);
