import React from 'react';
import { withStyles, Button, TextField } from '@material-ui/core';

const styles = {
  textField: {}
};

const Form = props => {
  const { fields, handleValueChange, values, isLoading } = props;
  return (
    <form>
      {!fields ? (
        <p>Empty form</p>
      ) : (
        fields.map(field => (
          <TextField
            id={field.name}
            key={field.name}
            label={field.label}
            type={field.type}
            required={field.required}
            helperText={field.helperText}
            disabled={isLoading}
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
