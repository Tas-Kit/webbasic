import React from 'react';
import Card from '../src/components/Card';
import { Typography } from '@material-ui/core';
import withRoot from '../src/withRoot';

export default withRoot(() => (
  <Card>
    <Typography variant={'display3'}>TasKit</Typography>
  </Card>
));
