import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  CssBaseline
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {}
});

const styles = {
  app: {
    background: 'radial-gradient(#add1e2 30%, #74c3df)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.app}>test</div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
