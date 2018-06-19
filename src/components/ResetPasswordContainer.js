import React from 'react';
import FormContainer from '../components/FormContainer';
import { resetPasswordForm } from '../../config/forms';

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleEmailSent = (result, values) => {
    this.setState({
      email: values.email
    });
  };

  render() {
    return (
      <FormContainer
        form={resetPasswordForm}
        onSubmitSucceed={this.handleEmailSent}
      />
    );
  }
}

export default ResetPasswordContainer;
