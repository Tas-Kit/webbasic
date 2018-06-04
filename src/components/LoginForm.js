import React from 'react';
import { withStyles, Grid, Button, TextField } from '@material-ui/core';
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
        <TextField
          id="username"
          label="Username"
          className={classes.textField}
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
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
