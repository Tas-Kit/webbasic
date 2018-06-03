import React from 'react';
import { Grid, Button } from '@material-ui/core';

const SecondaryActionButtons = props => {
  const { secondaryActions } = props;

  return (
    <Grid container justify={'space-between'}>
      {secondaryActions.map(action => (
        <Grid key={action.name}>
          <Button variant="flat" color="primary" onClick={action.handleClick}>
            {action.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default SecondaryActionButtons;
