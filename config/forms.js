export const loginForm = {
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true
    }
  ],
  action: {
    name: 'login',
    label: 'Login',
    url: '/login/'
  },
  secondaryActions: [
    {
      name: 'forgot password',
      url: '/reset_password/'
    },
    {
      name: 'sign up',
      url: '/signup/'
    }
  ]
};

export const signupForm = {
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ],
  action: {
    name: 'signup',
    label: 'Sign up',
    url: '/signup/'
  }
};

export const resetPasswordForm = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email'
    }
  ],
  action: {
    name: 'reset_password',
    label: 'Reset Password',
    url: '#'
  }
};

export default {
  loginForm
};
