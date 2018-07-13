import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
const LoadingButton = props => {
  const { isLoading, progressProps, children, ...rest } = props;
  return (
    <Button {...rest}>
      {isLoading ? <CircularProgress {...progressProps} /> : children}
    </Button>
  );
};

export default LoadingButton;
