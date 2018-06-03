import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Form from './Form';
import { loginForm } from '../config/forms';
import SecondaryActionButtons from './SecondaryActionButtons';

const styles = {
  formContainer: {
    padding: '2em'
  }
};

const { fields, action, secondaryActions } = loginForm;

const LoginForm = props => {
  const { classes } = props;
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
        <SecondaryActionButtons secondaryActions={secondaryActions} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoginForm);
