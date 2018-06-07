let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = '#';
} else {
  baseUrl = '#';
  if (typeof window !== 'undefined') {
    const { location } = window;
    baseUrl = `${location.protocol}//${location.host}/api/v1`; // (or whatever)
  }
}

const defaultOnError = () => {
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
    default:
      defaultOnError();
  }
  return null;
};

export const post = async (url, payload) => {
  // use async so thrwoed errors in transformResponse can be caught
  const json = await fetch(`${baseUrl}${url}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => transformResponse(res));
  return json;
};

export const postLogin = payload => {
  return post('/login', payload);
};

export const postSignup = payload => {
  return post('/signup', payload);
};

export default {
  post,
  postLogin,
  postSignup
};
