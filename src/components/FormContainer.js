import React from 'react';
import { withStyles, Grid, Button, colors } from '@material-ui/core';
import SecondaryActionButtons from './SecondaryActionButtons';
import Form from './Form';
import { post } from '../api';

const styles = {
  formContainer: {
    padding: '2em'
  },
  mainButton: {
    borderRadius: 15,
    margin: '1em 0'
  },
  errorMessage: {
    color: colors.red[500]
  }
};

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errorMessage: '',
      isLoading: false
    };
  }

  handleValueChange = key => e => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [key]: e.target.value
      }
    });
  };

  handleSubmit = url => () => {
    if (this.hasError()) {
      console.log('error');
    } else {
      this.setState({
        ...this.state,
        isLoading: true
      });
      post(url, this.state.values)
        .then(result => {
          this.setState({
            ...this.state,
            errorMessage: ''
          });
        })
        .catch(err =>
          this.setState({
            ...this.state,
            errorMessage: err['non_field_errors']
          })
        )
        .finally(() =>
          this.setState({
            ...this.state,
            isLoading: false
          })
        );
    }
  };

  hasError() {
    const values = this.state.values;
    return this.props.form.fields.some(field => {
      const name = field.name;
      if (field.required && !values[name]) {
        return true;
      }
      return false;
    });
  }

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
            values={this.state.values}
            handleValueChange={this.handleValueChange}
            isLoading={this.state.isLoading}
          />
          <p className={classes.errorMessage}>{this.state.errorMessage}</p>
          <Button
            fullWidth
            color="primary"
            variant={'raised'}
            id={action.name}
            onClick={this.handleSubmit(action.url)}
            className={classes.mainButton}
            disabled={this.state.isLoading}
          >
            {action.label}
          </Button>
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
