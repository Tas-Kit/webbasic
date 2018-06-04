import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';
const isProd = process.env.NODE_ENV === 'production';

const SecondaryActionButtons = props => {
  const { secondaryActions } = props;
  return (
    <Grid container justify={'space-between'}>
      {secondaryActions.map(action => (
        <Grid key={action.name}>
          <Link href={(isProd ? '/web/basic' : '') + action.url}>
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
