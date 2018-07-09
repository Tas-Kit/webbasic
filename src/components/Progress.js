// trigger build
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default props => {
  return <React.Fragment />;
};
