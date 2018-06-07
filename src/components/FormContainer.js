import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import SecondaryActionButtons from './SecondaryActionButtons';
import Form from './Form';
import { post } from '../api';

const styles = {
  formContainer: {
    padding: '2em'
  }
};

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}
    };
  }

  componentDidUpdate() {
    this.setState({
      values: {}
    });
  }

  handleValueChange = key => e => {
    this.setState({
      values: {
        ...this.state.values,
        [key]: e.target.value
      }
    });
  };
  handleSubmit = url => {
    post(url, this.state.values);
  };

  render() {
    const { classes, form } = this.props;
    const { fields, action, secondaryActions } = form;

    return (
      <Grid
        container
        item
        direction="column"
        xs
        className={classes.formContainer}
      >
        <Grid item xs>
          <Form
            fields={fields}
            action={action}
            values={this.state.values}
            handleValueChange={this.handleValueChange}
            handleSubmit={this.handleSubmit(action.url)}
          />
        </Grid>
        <Grid item>
          {secondaryActions && (
            <SecondaryActionButtons secondaryActions={secondaryActions} />
          )}
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(FormContainer);
