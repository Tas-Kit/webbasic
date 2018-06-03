import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from './components/Card';
import Decoration from './components/Decoration';
import FormContainer from './components/FormContainer';
import MaterialContext from './components/MaterialContext';

class App extends Component {
  render() {
    const { form } = this.props;
    return (
      <MaterialContext>
        <Card>
          <Decoration />
          <FormContainer form={form} />
        </Card>
      </MaterialContext>
    );
  }
}

export default App;
