const usernameField = {
  name: 'username',
  label: 'Username',
  labelId: 'username',
  type: 'text',
  required: true
};

const passwordField = {
  name: 'password',
  labelId: 'password',
  label: 'Password',
  type: 'password',
  required: true
};

const emailField = {
  name: 'email',
  labelId: 'email',
  label: 'Email',
  type: 'email',
  required: true
};

export const loginForm = {
  fields: [usernameField, passwordField],
  action: {
    name: 'login',
    label: 'Login',
    labelId: 'loginButton',
    url: '/login/',
    redirectUrl: '/web/main/'
  },
  secondaryActions: [
    {
      name: 'forgot password',
      nameId: 'forgotPasswordButton',
      url: '/reset_password/'
    },
    {
      name: 'sign up',
      nameId: 'signUpButton',
      url: '/signup/'
    }
  ],
  rules: {
    username: 'required',
    password: 'required'
  }
};

export const signupForm = {
  fields: [usernameField, emailField, passwordField],
  action: {
    name: 'signup',
    label: 'Sign up',
    labelId: 'signUpButton',
    url: '/signup/',
    redirectUrl: '/web/main/'
  },
  rules: {
    username: 'required',
    password: 'required|min:8',
    email: 'required|email'
  }
};

export const resetPasswordForm = {
  fields: [emailField],
  action: {
    name: 'reset_password',
    label: 'Reset Password',
    labelId: 'resetPasswordButton',
    url: '/reset_password/',
    redirectUrl: '/web/main/'
  },
  rules: {
    email: 'required|email'
  }
};

export default {
  loginForm
};
