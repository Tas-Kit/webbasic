import React, { Component } from 'react';
import Card from './Card';
import Decoration from './Decoration';
import FormContainer from './FormContainer';

class AccountCard extends Component {
  render() {
    const { form } = this.props;
    return (
      <Card>
        <Decoration />
        <FormContainer form={form} />
      </Card>
    );
  }
}

export default AccountCard;
