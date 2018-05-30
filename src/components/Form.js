import React from 'react';
import { withStyles, Button, TextField } from '@material-ui/core';

const styles = {
  textField: {},
  mainButton: {
    borderRadius: 15,
    margin: '1em 0'
  }
};

const Form = props => {
  const { fields, handleSubmit, action, classes } = props;
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
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        ))
      )}
      <Button
        fullWidth
        color="primary"
        variant={'raised'}
        id={action.name}
        onClick={handleSubmit}
        className={classes.mainButton}
      >
        {action.label}
      </Button>
    </form>
  );
};

export default withStyles(styles)(Form);
