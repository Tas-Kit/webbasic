import React from 'react';
import { withStyles, Grid, Button, colors, TextField } from '@material-ui/core';
import Validator from 'validatorjs';
import SecondaryActionButtons from './SecondaryActionButtons';
import { post } from '../api';
import { FormattedMessage } from 'react-intl';
import { resetPasswordForm } from '../../config/forms';

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

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.form = resetPasswordForm;
    let isError = false;
    if (this.form.fields.some(field => field.required)) {
      isError = true;
    }
    this.state = {
      values: {},
      isLoading: false,
      isError,
      errors: {}
    };
  }

  handleValueChange = key => e => {
    const { rules } = this.form;
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

  handleSubmit = url => () => {
    if (!this.state.isError) {
      this.setState({
        isLoading: true
      });
      post(url, this.state.values)
        .then(result => {
          // If user does not handle success, form will simply redirect
          const destination =
            window.location.origin + this.props.form.action.redirectUrl;
          window.location = destination;
        })
        .catch(err => {
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

  handleGetCodeClick = () => {
    if (this.state.values['email']) {
      this.setState({
        isLoading: true
      });
      post('/reset_password/', { email: this.state.values['email'] })
        .then(result => console.log)
        .catch(err => {
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

  render() {
    const { classes } = this.props;
    const { fields, action, secondaryActions } = this.form;
    const { isLoading, errors, values, isError } = this.state;

    return (
      <Grid container direction="column" className={classes.formContainer}>
        <Grid item xs>
          <form>
            {fields.map(field => {
              return (
                <Grid
                  container
                  direction="row"
                  key={field.name}
                  wrap="nowrap"
                  spacing={8}
                >
                  <Grid item xs={field.name === 'code' ? 7 : true}>
                    <TextField
                      id={field.name}
                      label={
                        <FormattedMessage
                          id={field.labelId}
                          // defaultMessage={field.label}
                        />
                      }
                      type={field.type}
                      required={field.required}
                      helperText={errors[field.name]}
                      disabled={isLoading}
                      error={!!errors[field.name]}
                      fullWidth
                      onChange={this.handleValueChange(field.name)}
                      values={values[field.name]}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                    />
                  </Grid>
                  {field.name === 'code' && (
                    <Grid item xs={5}>
                      <Button
                        fullWidth
                        color="primary"
                        variant={'raised'}
                        id={action.name}
                        onClick={this.handleGetCodeClick}
                        className={classes.mainButton}
                        disabled={
                          isLoading || !values['email'] || !!errors['email']
                        }
                      >
                        <FormattedMessage id={'getCodeButton'} />
                      </Button>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </form>

          {errors['non_field_errors'] && (
            <p className={classes.errorMessage}>{errors['non_field_errors']}</p>
          )}
          <Button
            fullWidth
            color="primary"
            variant={'raised'}
            className={classes.mainButton}
            disabled={isLoading || isError}
            onClick={this.handleSubmit(action.url)}
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
export default withStyles(styles)(ResetPasswordContainer);
