import React from 'react';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

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
      const destination = window.location.origin + url;
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
