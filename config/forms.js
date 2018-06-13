const usernameField = {
  name: 'username',
  label: 'Username',
  type: 'text',
  required: true
};

const passwordField = {
  name: 'password',
  label: 'Password',
  type: 'password',
  required: true
};

const emailField = {
  name: 'email',
  label: 'Email',
  type: 'email',
  required: true
};

export const loginForm = {
  fields: [usernameField, passwordField],
  action: {
    name: 'login',
    label: 'Login',
    url: '/userservice/exempt/login/',
    redirectUrl: '/main/'
  },
  secondaryActions: [
    {
      name: 'forgot password',
      url: '/userservice/exempt/reset_password/'
    },
    {
      name: 'sign up',
      url: '/userservice/exempt/signup/'
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
    url: '/signup/',
    redirectUrl: '/main/'
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
    url: '#'
  }
};

export default {
  loginForm
};
