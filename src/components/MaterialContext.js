import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  CssBaseline,
  Grid,
  colors
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.lightBlue[100],
      main: colors.lightBlue[200],
      dark: colors.lightBlue[300],
      contrastText: '#fff'
    }
  }
});

const styles = {
  app: {
    background: `radial-gradient(${colors.lightBlue[50]}, ${
      colors.lightBlue[300]
    })`,
    minHeight: '100vh'
  }
};

const MaterialContext = props => {
  const { classes, children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.app}
      >
        {children}
      </Grid>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(MaterialContext);
