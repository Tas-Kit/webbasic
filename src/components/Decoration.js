import React from 'react';
import { Grid, withStyles, colors } from '@material-ui/core';

const styles = {
  decoration: {
    background: colors.lightBlue[200]
  }
};

const Decoration = props => {
  const { classes } = props;
  return <Grid item xs className={classes.decoration} />;
};

export default withStyles(styles)(Decoration);
