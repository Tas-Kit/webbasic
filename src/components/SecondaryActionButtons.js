import React from 'react';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
const isProd = process.env.NODE_ENV === 'production';

class SecondaryActionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  handleClick = url => {
    return () => {
      this.setState({
        isLoading: true
      });
      const destination =
        window.location.origin + (isProd ? '/web/basic' : '') + url;
      window.location = destination;
    };
  };
  render() {
    const { secondaryActions } = this.props;

    return (
      <Grid container justify={'space-between'} wrap="nowrap">
        {secondaryActions.map(action => (
          <Grid key={action.name}>
            <Button
              variant="flat"
              color="primary"
              onClick={this.handleClick(action.url)}
            >
              {this.isLoading ? (
                <CircularProgress />
              ) : (
                <FormattedMessage
                  id={action.nameId}
                  defaultMessage={action.name}
                />
              )}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default SecondaryActionButtons;
