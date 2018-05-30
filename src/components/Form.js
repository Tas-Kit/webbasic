import React from 'react';
import { TextField } from '@material-ui/core';

const Form = props => {
  const { fields } = props;
  return (
    <form>
      {!fields ? (
        <p>Empty form</p>
      ) : (
        fields.map(field => (
          <TextField
            id={field.name}
            label={field.label}
            type={field.type}
            required={field.required}
            fullWidth
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

export default Form;
