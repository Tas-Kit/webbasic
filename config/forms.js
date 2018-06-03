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
    url: '#'
  },
  secondaryActions: [
    {
      name: 'forgot password'
    },
    {
      name: 'sign up'
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
      name: 'first-name',
      label: 'First Name',
      type: 'text'
    },
    {
      name: 'last-name',
      label: 'Last Name',
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
    url: '#'
  }
};

export default {
  loginForm
};
