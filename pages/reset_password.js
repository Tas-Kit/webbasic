import React from 'react';
import AccountCard from '../src/components/AccountCard';
import withRoot from '../src/withRoot';
import ResetPasswordContainer from '../src/components/ResetPasswordContainer';

export default withRoot(() => (
  <AccountCard>
    <ResetPasswordContainer />
  </AccountCard>
));
