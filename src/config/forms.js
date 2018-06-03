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

export default {
  loginForm
};
