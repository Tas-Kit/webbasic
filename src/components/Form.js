import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const styles = {
  textField: {}
};

const Form = props => {
  const { fields, handleValueChange, values, isLoading, errors } = props;
  return (
    <form>
      {!fields ? (
        <p>Empty form</p>
      ) : (
        fields.map(field => (
          <TextField
            id={field.name}
            key={field.name}
            label={
              <FormattedMessage
                id={field.labelId}
                defaultMessage={field.label}
              />
            }
            type={field.type}
            required={field.required}
            helperText={errors[field.name]}
            disabled={isLoading}
            error={!!errors[field.name]}
            fullWidth
            onChange={handleValueChange(field.name)}
            values={values[field.name]}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        ))
      )}
    </form>
  );
};

export default withStyles(styles)(Form);
