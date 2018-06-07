import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Form from './Form';
import SecondaryActionButtons from './SecondaryActionButtons';

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

  handleValueChange = key => e => {
    this.setState({
      values: {
        ...this.state.values,
        [key]: e.target.value
      }
    });
  };

  render() {
    const { classes, form } = this.props;
    const { fields, action, secondaryActions } = form;
    const handleSubmit = () => {};
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
            handleSubmit={handleSubmit}
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
