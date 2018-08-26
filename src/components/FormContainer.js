import React from 'react';
import {
  withStyles,
  Grid,
  Button,
  colors,
  CircularProgress
} from '@material-ui/core';
import Validator from 'validatorjs';
import { FormattedMessage } from 'react-intl';
import SecondaryActionButtons from './SecondaryActionButtons';
import Form from './Form';
import { post } from '../api';
import { redirect, getRedirectUrl } from '../util';
import LoadingButton from './LoadingButton';

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
    const { rules } = this.props.form;
    const validation = new Validator({}, rules);
    this.state = {
      values: {},
      isLoading: false,
      isError: !validation.passes(),
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
        values: newValues,
        isError: false,
        errors: {}
      });
    } else {
      this.setState({
        values: newValues,
        isError: true,
        errors: validation.errors.all()
      });
    }
  };

  sendAction = url => {
    const { onSubmitSucceed, onSubmitFail } = this.props;
    if (this.state.values['username'] && !this.state.isError) {
      this.setState({
        isLoading: true
      });
      post(url, this.state.values)
        .then(result => {
          if (onSubmitSucceed) {
            onSubmitSucceed(result, this.state.values);
          } else {
            // If user does not handle success, form will simply redirect
            redirect(getRedirectUrl(this.props.form.action.redirectUrl));
          }
        })
        .catch(err => {
          if (onSubmitFail) {
            onSubmitFail(err, this.state.values);
          }
          this.setState({
            errors: err,
            isError: true
          });
        })
        .finally(() =>
          this.setState({
            isLoading: false
          })
        );
    }
  };

  handleSubmit = url => () => {
    this.sendAction(url);
  };

  handleKeyDown = url => e => {
    if (e.key === 'Enter') {
      this.sendAction(url);
    }
  };

  render() {
    const { classes, form } = this.props;
    const { fields, action, secondaryActions } = form;
    const { values, errors, isLoading, isError } = this.state;

    return (
      <Grid container direction="column" className={classes.formContainer}>
        <Grid item xs onKeyDown={this.handleKeyDown(action.url)}>
          <Form
            fields={fields}
            values={values}
            handleValueChange={this.handleValueChange}
            errors={errors}
            isLoading={isLoading}
          />
          {errors['non_field_errors'] && (
            <p className={classes.errorMessage}>{errors['non_field_errors']}</p>
          )}
          <LoadingButton
            fullWidth
            color="primary"
            variant={'raised'}
            id={action.name}
            onClick={this.handleSubmit(action.url)}
            className={classes.mainButton}
            disabled={isLoading || isError}
            isLoading={isLoading}
            progressProps={{ size: 25 }}
          >
            <FormattedMessage
              id={action.labelId}
              defaultMessage={action.label}
            />
          </LoadingButton>
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
