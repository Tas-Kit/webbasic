import { loginForm } from '../config/forms';
import AccountCard from '../src/components/AccountCard';
import Card from '../src/components/Card';
import { Typography } from '@material-ui/core';
import withRoot from '../src/withRoot';

export default withRoot(() => (
  <Card>
    <Typography variant={'display3'}>TasKit</Typography>
  </Card>
));
