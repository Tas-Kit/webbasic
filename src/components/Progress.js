import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default props => {
  return (
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
  );
};
