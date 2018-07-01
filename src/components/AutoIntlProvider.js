import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

// import locale libraries
import zhMessages from '../locales/zh';
import enMessages from '../locales/en';

addLocaleData(...zh, ...en);

const languageMap = {
  zh: zhMessages,
  en: enMessages
};

const AutoIntlProvider = props => {
  const { locale = 'en', children } = props;

  return (
    <IntlProvider locale={locale} messages={languageMap[locale]}>
      {children}
    </IntlProvider>
  );
};

export default AutoIntlProvider;
