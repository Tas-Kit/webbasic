import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from './Card';
import Decoration from './Decoration';

class AccountCard extends Component {
  render() {
    const { children } = this.props;
    return (
      <Card>
        <Decoration />
        <Grid item xs>
          {children}
        </Grid>
      </Card>
    );
  }
}

export default AccountCard;
