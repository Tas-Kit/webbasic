import React from 'react';
import { Paper, withStyles, Grid } from '@material-ui/core';

const styles = {
  cardWrapper: {
    position: 'relative',
    width: 640,
    padding: 0
  }
};

const Card = props => {
  const { children, classes } = props;
  return (
    <Paper elevation={5}>
      <Grid container className={classes.cardWrapper}>
        {children}
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Card);
