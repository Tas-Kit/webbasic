import React from 'react';
import { loginForm } from '../config/forms';
import AccountCard from '../src/components/AccountCard';
import withRoot from '../src/withRoot';
import FormContainer from '../src/components/FormContainer';

export default withRoot(() => (
  <AccountCard>
    <FormContainer form={loginForm} />
  </AccountCard>
));
