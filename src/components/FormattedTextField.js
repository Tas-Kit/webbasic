import React from 'react';
import { TextField } from '@material-ui/core';
import { injectIntl } from 'react-intl';

// retrive intl to use formatMessage()
const FormattedTextField = injectIntl(props => {
  const { intl, labelId, helperText, ...rest } = props;
  const fieldName = intl.formatMessage({ id: labelId });
  return (
    <TextField
      label={fieldName}
      helperText={helperText && `${fieldName}${helperText}`}
      {...rest}
    />
  );
});

export default FormattedTextField;
