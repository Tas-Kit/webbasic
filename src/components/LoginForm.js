import React from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import Form from './Form';
import { loginForm } from '../config/forms';

const styles = {
  formContainer: {
    padding: '2em'
  },
  textField: {},
  mainButton: {
    borderRadius: 15,
    margin: '1em 0'
  }
};

const { fields, action } = loginForm;

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
        <Grid container>
          <Grid item xs>
            <Button color="primary" variant={'flat'} id="forgot-password">
              FORGOT PASSWORD
            </Button>
          </Grid>
          <Button color="primary" variant={'flat'} id="sign-up">
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoginForm);
