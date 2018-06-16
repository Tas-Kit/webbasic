import React from 'react';
import { withStyles, Grid, Button, colors } from '@material-ui/core';
import Validator from 'validatorjs';
import SecondaryActionButtons from './SecondaryActionButtons';
import Form from './Form';
import { post } from '../api';
import { FormattedMessage } from 'react-intl';

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
      isLoading: false,
      isError: false,
      errors: {}
    };
  }

  handleValueChange = key => e => {
    const { rules } = this.props.form;
    const newValues = {
      ...this.state.values,
      [key]: e.target.value
    };
    const validation = new Validator(newValues, rules);
    if (validation.passes()) {
      this.setState({
        ...this.state,
        values: newValues,
        isError: false,
        errors: {}
      });
    } else {
      this.setState({
        ...this.state,
        values: newValues,
        isError: true,
        errors: validation.errors.all()
      });
    }
  };

  handleSubmit = url => () => {
    if (!this.state.isError) {
      this.setState({
        ...this.state,
        isLoading: true
      });
      post(url, this.state.values)
        .then(result => {
          const destination =
            window.location.origin + this.props.form.action.redirectUrl;
          window.location = destination;
        })
        .catch(err =>
          this.setState({
            ...this.state,
            errors: err,
            isError: true
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
            errors={this.state.errors}
            isLoading={this.state.isLoading}
          />
          {this.state.errors['non_field_errors'] && (
            <p className={classes.errorMessage}>
              {this.state.errors['non_field_errors']}
            </p>
          )}
          <Button
            fullWidth
            color="primary"
            variant={'raised'}
            id={action.name}
            onClick={this.handleSubmit(action.url)}
            className={classes.mainButton}
            disabled={this.state.isLoading || this.state.isError}
          >
            <FormattedMessage
              id={action.labelId}
              defaultMessage={action.label}
            />
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
