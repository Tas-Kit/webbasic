import React from 'react';
import {
  withStyles,
  Grid,
  Button,
  colors,
  CircularProgress
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Validator from 'validatorjs';
import SecondaryActionButtons from './SecondaryActionButtons';
import Form from './Form';
import { post } from '../api';
import { redirect, getRedirectUrl } from '../util';

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
      errors: {},
      nonFieldError: ''
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
        errors: {},
        nonFieldError: ''
      });
    } else {
      this.setState({
        values: newValues,
        isError: true,
        errors: validation.errors.all(),
        nonFieldError: ''
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
            nonFieldError: err['non_field_errors']
              ? err['non_field_errors']
              : err.message,
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

  componentDidMount() {
    if (navigator) {
      const locale = navigator.language.split(/[-_]/)[0];
      Validator.useLang(locale);
    }
  }

  render() {
    const { classes, form } = this.props;
    const { fields, action, secondaryActions } = form;
    const { values, errors, isLoading, isError, nonFieldError } = this.state;

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
          {nonFieldError && (
            <p className={classes.errorMessage}>{nonFieldError}</p>
          )}
          <Button
            fullWidth
            color="primary"
            variant={'raised'}
            id={action.name}
            onClick={this.handleSubmit(action.url)}
            className={classes.mainButton}
            disabled={isLoading || isError}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <FormattedMessage
                id={action.labelId}
                defaultMessage={action.label}
              />
            )}
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
