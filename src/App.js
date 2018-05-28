import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  CssBaseline,
  Grid,
  colors
} from '@material-ui/core';
import Card from './components/Card';
import Decoration from './components/Decoration';
import LoginForm from './components/LoginForm';

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

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.app}
        >
          <Card>
            <Decoration />
            <LoginForm />
          </Card>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
