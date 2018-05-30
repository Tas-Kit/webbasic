import React from 'react';
import { withStyles, Grid, Button, TextField } from '@material-ui/core';
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

const fields = loginForm.fields;

const LoginForm = props => {
  const { classes } = props;
  return (
    <Grid
      container
      item
      direction="column"
      xs
      className={classes.formContainer}
    >
      <Grid item xs>
        <Form fields={fields} />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          color="primary"
          variant={'raised'}
          id="login"
          className={classes.mainButton}
        >
          Login
        </Button>
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
