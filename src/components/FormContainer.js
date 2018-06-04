import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Form from './Form';
import SecondaryActionButtons from './SecondaryActionButtons';

const styles = {
  formContainer: {
    padding: '2em'
  }
};

const LoginForm = props => {
  const { classes, form } = props;
  const { fields, action, secondaryActions } = form;
  const handleSubmit = () => {};
  return (
    <Grid
      container
      item
      direction="column"
      xs
      className={classes.formContainer}
    >
      <Grid item xs>
        <Form fields={fields} action={action} handleSubmit={handleSubmit} />
      </Grid>
      <Grid item>
        {secondaryActions && (
          <SecondaryActionButtons secondaryActions={secondaryActions} />
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoginForm);
