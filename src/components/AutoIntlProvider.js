import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import Validator from 'validatorjs';

// import locale libraries
import zhMessages from '../locales/zh';
import enMessages from '../locales/en';
import {
  zhValidatorMessages,
  enValidatorMessages
} from '../constants/customValidatorMessages';

addLocaleData(...zh, ...en);

const languageMap = {
  zh: zhMessages,
  en: enMessages
};

Validator.setMessages('en', enValidatorMessages);
Validator.setMessages('zh', zhValidatorMessages);

class AutoIntlProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en'
    };
  }
  componentDidMount() {
    if (navigator) {
      const locale = navigator.language.split(/[-_]/)[0];
      Validator.useLang(locale);
      this.setState({
        locale
      });
    }
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale} messages={languageMap[locale]}>
        {children}
      </IntlProvider>
    );
  }
}

export default AutoIntlProvider;
