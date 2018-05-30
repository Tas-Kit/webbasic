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
  }
};

export default {
  loginForm
};
