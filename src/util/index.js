import qs from 'qs';

// functions to be used only in browser
export const getRedirectUrl = defaultUrl => {
  const origin = window.location.origin;
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const destination = query.redirect || defaultUrl;
  return origin + destination;
};

export const redirect = url => {
  window.location = url;
};
