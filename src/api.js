let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://sandbox.tas-kit.com/api/v1/userservice/exempt';
} else {
  baseUrl = 'http://sandbox.tas-kit.com/api/v1/userservice/exempt';
  if (typeof window !== 'undefined') {
    const { location } = window;
    baseUrl = `${location.protocol}//${
      location.host
    }/api/v1/userservice/exempt`; // (or whatever)
  }
}

const defaultOnError = res => {
  throw new Error();
};

const handleUnauthorized = () => {
  if (window) {
    window.location.replace('/login');
  }
};

const transformResponse = res => {
  if (res.ok) {
    return res.json();
  } else {
    switch (res.status) {
      case 401:
        handleUnauthorized();
        break;
      default:
        return res.json().then(errors => Promise.reject(errors));
    }
  }
  return null;
};

export const post = async (url, payload) => {
  // use async so thrwoed errors in transformResponse can be caught
  try {
    const res = await fetch(`${baseUrl}${url}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    });
    return transformResponse(res);
  } catch (e) {
    return Promise.reject({
      non_field_errors: e.message
    });
  }
};

export default {
  post
};
