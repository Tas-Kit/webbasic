let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl =
    'http://userservice-sandbox.taskit.13.56.178.175.xip.io/api/v1/userservice';
} else {
  baseUrl =
    'http://userservice-sandbox.taskit.13.56.178.175.xip.io/api/v1/userservice';
  if (typeof window !== 'undefined') {
    const { location } = window;
    baseUrl = `${location.protocol}//${location.host}/api/v1`; // (or whatever)
  }
}

const defaultOnError = res => {
  throw new Error();
};

const handleTimeOut = () => {
  if (window) {
    window.location.replace('/login');
  }
};

const transformResponse = res => {
  if (res.ok) {
    return res.json();
  }
  switch (res.status) {
    case 401:
      handleTimeOut();
      break;
    case 400:
      return res.json().then(errors => Promise.reject(errors));
    default:
      defaultOnError(res);
  }
  return null;
};

export const post = async (url, payload) => {
  // use async so thrwoed errors in transformResponse can be caught
  const json = await fetch(`${baseUrl}${url}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => transformResponse(res));
  return json;
};

export const postLogin = payload => {
  return post('/login/', payload);
};

export const postSignup = payload => {
  return post('/signup/', payload);
};

export default {
  post,
  postLogin,
  postSignup
};
