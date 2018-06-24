let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://sandbox.tas-kit.com/api/v1/userservice/exempt';
} else {
  baseUrl = 'http://sandbox.tas-kit.com/api/v1/userservice/exempt';
  if (typeof window !== 'undefined') {
    const { location } = window;
    baseUrl = `${location.protocol}//${
      location.host
    }/api/v1/userservice/exempt`; // (or whatever) trigger build
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
    default:
      return res.json().then(errors => Promise.reject(errors));
  }
  return null;
};

export const post = async (url, payload) => {
  // use async so thrwoed errors in transformResponse can be caught
  const json = await fetch(`${baseUrl}${url}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(payload)
  }).then(res => transformResponse(res));
  return json;
};

export default {
  post
};
