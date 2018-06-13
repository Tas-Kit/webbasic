import React from 'react';
import { Grid, withStyles, colors } from '@material-ui/core';
import Logo from './Logo';

const styles = {
  decoration: {
    background: colors.lightBlue[200],
    padding: '1em'
  }
};

const Decoration = props => {
  const { classes } = props;
  return (
    <Grid
      container
      item
      xs
      justify="center"
      alignItems="center"
      className={classes.decoration}
    >
      <Logo color="white" />
    </Grid>
  );
};

export default withStyles(styles)(Decoration);
