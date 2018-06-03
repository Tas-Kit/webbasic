import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';

const SecondaryActionButtons = props => {
  const { secondaryActions } = props;

  return (
    <Grid container justify={'space-between'}>
      {secondaryActions.map(action => (
        <Grid key={action.name}>
          <Link href={action.url}>
            <Button variant="flat" color="primary">
              {action.name}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SecondaryActionButtons;
